import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${siteConfig.url}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const cleanExcerpt = escapeXml(post.excerpt || post.title);
      const cleanTitle = escapeXml(post.title);
      const imageUrl = post.coverImage;

      return `
    <item>
      <title>${cleanTitle}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${cleanExcerpt}</description>
      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" length="0" />
      <media:content url="${escapeXml(imageUrl)}" medium="image">
        <media:title>${cleanTitle}</media:title>
        <media:description>${cleanExcerpt}</media:description>
      </media:content>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:wfw="http://wellformedweb.org/CommentAPI/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(siteConfig.name)} - Online Earning &amp; AI Tools</title>
    <atom:link href="${siteConfig.url}/pinterest-feed.xml" rel="self" type="application/rss+xml" />
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
