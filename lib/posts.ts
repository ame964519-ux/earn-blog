import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  readingTime: string;
  featured?: boolean;
  cpcPotential?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
  rawContent: string;
  tableOfContents: { id: string; text: string; level: number }[];
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Estimate reading time
      const wordCount = content.split(/\s+/g).length;
      const readingTimeMinutes = Math.ceil(wordCount / 200);

      return {
        slug,
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        date: data.date || new Date().toISOString().split("T")[0],
        category: data.category || "General",
        tags: data.tags || [],
        coverImage: data.coverImage || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
        author: data.author || {
          name: "EarnSmartly Team",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
        },
        readingTime: `${readingTimeMinutes} min read`,
        featured: data.featured || false,
        cpcPotential: data.cpcPotential || "High",
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Extract table of contents (H2 and H3)
  const toc: { id: string; text: string; level: number }[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);
    if (h2Match) {
      const text = h2Match[1].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      toc.push({ id, text, level: 2 });
    } else if (h3Match) {
      const text = h3Match[1].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      toc.push({ id, text, level: 3 });
    }
  }

  // Parse markdown into HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  
  let contentHtml = processedContent.toString();

  // Add IDs to h2 and h3 in html for smooth scrolling
  contentHtml = contentHtml.replace(/<h2>(.*?)<\/h2>/g, (match, p1) => {
    const id = p1.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return `<h2 id="${id}">${p1}</h2>`;
  });
  contentHtml = contentHtml.replace(/<h3>(.*?)<\/h3>/g, (match, p1) => {
    const id = p1.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return `<h3 id="${id}">${p1}</h3>`;
  });

  const wordCount = content.split(/\s+/g).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);

  return {
    slug,
    title: data.title || "Untitled",
    excerpt: data.excerpt || "",
    date: data.date || new Date().toISOString().split("T")[0],
    category: data.category || "General",
    tags: data.tags || [],
    coverImage: data.coverImage || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    author: data.author || {
      name: "EarnSmartly Team",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    readingTime: `${readingTimeMinutes} min read`,
    featured: data.featured || false,
    cpcPotential: data.cpcPotential || "High",
    contentHtml,
    rawContent: content,
    tableOfContents: toc,
  };
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  const posts = getAllPosts();
  return posts.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, "-") === categorySlug.toLowerCase()
  );
}
