/**
 * Pinterest Auto-Sync & Bulk Pin Generator Engine
 * 
 * Features:
 * 1. Scans all posts (both existing and new) in content/posts/
 * 2. Generates Pinterest-optimized SEO Titles, Descriptions, Hashtags, and Destination URLs
 * 3. Generates an official Pinterest Bulk Upload CSV file for 1-click batch publishing
 * 4. Maintains a sync registry (data/pinterest-sync-registry.json) to monitor and auto-detect new posts
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POSTS_DIR = path.join(__dirname, "../content/posts");
const DATA_DIR = path.join(__dirname, "../data");
const REGISTRY_FILE = path.join(DATA_DIR, "pinterest-sync-registry.json");
const BULK_CSV_FILE = path.join(DATA_DIR, "pinterest-bulk-upload.csv");
const BASE_URL = "https://earn-blog.vercel.app";

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load or initialize registry
let registry = {};
if (fs.existsSync(REGISTRY_FILE)) {
  try {
    registry = JSON.parse(fs.readFileSync(REGISTRY_FILE, "utf-8"));
  } catch (err) {
    registry = {};
  }
}

// Category hashtags mapping
const CATEGORY_TAGS = {
  "Online Earning": "#makemoneyonline #passiveincome #sidehustle #onlinebusiness #financialfreedom",
  "Affiliate Marketing": "#affiliatemarketing #passiveincomestream #recurringincome #makemoneyonline #digitalmarketing",
  "AI Tools": "#aitools #artificialintelligence #productivity #chatgpt #techtrends #aivideo",
  "Blogging": "#bloggingtips #makemoneyblogging #seo2026 #adsense #googleadsense #contentcreator",
  "General": "#passiveincome #sidehustle #workfromhome #businessgrowth"
};

function generatePinData(file, data) {
  const slug = file.replace(/\.md$/, "");
  const title = (data.title || slug).replace(/["]/g, "'").trim();
  const excerpt = (data.excerpt || "").replace(/["]/g, "'").trim();
  const category = data.category || "Online Earning";
  const tags = CATEGORY_TAGS[category] || CATEGORY_TAGS["General"];
  const link = `${BASE_URL}/blog/${slug}`;
  const image = data.coverImage || `${BASE_URL}/pins/pin_youtube_automation.jpg`;
  const boardName = "Make Money Online & Passive Income";

  const description = `${excerpt} Read the complete guide with actionable frameworks, pricing tables, and step-by-step instructions. ${tags}`.trim();

  return {
    slug,
    title: title.slice(0, 100),
    description: description.slice(0, 500),
    link,
    mediaUrl: image,
    boardName,
    date: data.date || new Date().toISOString().split("T")[0],
    category
  };
}

function runAutoSync() {
  console.log("==================================================");
  console.log("🚀 Pinterest Auto-Sync & Content Monitor Starting...");
  console.log("==================================================");

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));
  console.log(`Found ${files.length} total posts in content/posts/`);

  let newPostsCount = 0;
  let allPins = [];

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    const pin = generatePinData(file, data);
    allPins.push(pin);

    if (!registry[pin.slug]) {
      console.log(`✨ [NEW POST DETECTED] -> ${pin.title}`);
      registry[pin.slug] = {
        title: pin.title,
        link: pin.link,
        mediaUrl: pin.mediaUrl,
        firstDetected: new Date().toISOString(),
        status: "ready_to_pin"
      };
      newPostsCount++;
    }
  }

  // Save updated registry
  fs.writeFileSync(REGISTRY_FILE, JSON.stringify(registry, null, 2), "utf-8");

  // Generate Pinterest Bulk Upload CSV (Official Format)
  // Headers: Title, Media URL, Pinterest board, Thumbnail, Description, Link, Publish at
  const csvHeaders = "Title,Media URL,Pinterest board,Thumbnail,Description,Link,Publish at\n";
  const csvRows = allPins.map(pin => {
    return `"${pin.title}","${pin.mediaUrl}","${pin.boardName}","","${pin.description}","${pin.link}",""`;
  }).join("\n");

  fs.writeFileSync(BULK_CSV_FILE, csvHeaders + csvRows, "utf-8");

  console.log("--------------------------------------------------");
  console.log(`✅ Registry updated: ${Object.keys(registry).length} total posts tracked.`);
  console.log(`✅ New posts synced: ${newPostsCount}`);
  console.log(`📁 Official Pinterest Bulk CSV generated: ${BULK_CSV_FILE}`);
  console.log("==================================================");
}

runAutoSync();
