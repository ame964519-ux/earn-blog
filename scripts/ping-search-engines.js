const fs = require("fs");
const path = require("path");

const siteUrl = "https://earn-blog.vercel.app";
const indexNowKey = "4c77b960b73c4eb89e6e87b7a2d815e9";
const postsDir = path.join(__dirname, "../content/posts");

async function pingSearchEngines() {
  console.log("=== Fast Indexing & Search Engine Notification Engine ===");

  // 1. Collect all post slugs
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const postUrls = files.map((f) => `${siteUrl}/blog/${f.replace(/\.md$/, "")}`);

  const staticUrls = [
    siteUrl,
    `${siteUrl}/blog`,
    `${siteUrl}/about`,
    `${siteUrl}/contact`,
    `${siteUrl}/dmca`,
    `${siteUrl}/privacy-policy`,
    `${siteUrl}/terms`,
    `${siteUrl}/disclaimer`,
    `${siteUrl}/category/ai-tools`,
    `${siteUrl}/category/online-earning`,
    `${siteUrl}/category/affiliate-marketing`,
    `${siteUrl}/category/blogging`,
  ];

  const allUrls = [...staticUrls, ...postUrls];
  console.log(`Total URLs to submit for indexing: ${allUrls.length}`);

  // 2. Submit to IndexNow (Bing, Yandex, Seznam, Naver)
  try {
    console.log("\n1. Pinging IndexNow API (Bing / Yandex)...");
    const indexNowRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "earn-blog.vercel.app",
        key: indexNowKey,
        keyLocation: `${siteUrl}/${indexNowKey}.txt`,
        urlList: allUrls.slice(0, 500),
      }),
    });

    console.log(`IndexNow Response: ${indexNowRes.status} ${indexNowRes.statusText}`);
    if (indexNowRes.ok || indexNowRes.status === 200 || indexNowRes.status === 202) {
      console.log("SUCCESS: IndexNow successfully accepted all URLs for instant indexing!");
    }
  } catch (err) {
    console.warn("IndexNow ping warning:", err.message);
  }

  // 3. Ping Google Sitemap Endpoint
  try {
    console.log("\n2. Pinging Google Sitemap Endpoint...");
    const googleRes = await fetch(`https://www.google.com/ping?sitemap=${siteUrl}/sitemap.xml`);
    console.log(`Google Ping Response: ${googleRes.status} ${googleRes.statusText}`);
  } catch (err) {
    console.warn("Google ping notice:", err.message);
  }

  // 4. Ping Bing Sitemap Endpoint
  try {
    console.log("\n3. Pinging Bing Sitemap Endpoint...");
    const bingRes = await fetch(`https://www.bing.com/ping?sitemap=${siteUrl}/sitemap.xml`);
    console.log(`Bing Ping Response: ${bingRes.status} ${bingRes.statusText}`);
  } catch (err) {
    console.warn("Bing ping notice:", err.message);
  }

  console.log("\n=== Search Engine Pinging Completed Successfully ===");
}

pingSearchEngines();
