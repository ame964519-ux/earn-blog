const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Master pool of 100% DISTINCT, Handcrafted High-CPC Topics (Zero Duplicates)
const uniqueMasterTopics = [
  {
    title: "How to Make $2,000/Month with AI Website Building for Local Businesses",
    slug: "make-money-ai-website-builder-local-businesses",
    category: "Online Earning",
    tags: ["Web Design", "Local Business", "AI Tools", "Framer", "Agency"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.80+",
    summary: "How modern freelancers use AI website builders like Framer and Webflow to build and deliver responsive business sites in 48 hours for $500 to $1,500.",
    sections: [
      { heading: "1. The High Demand from Local Service Businesses", body: "Dentists, lawyers, landscapers, and plumbers often have outdated websites that lose leads. Providing a fast, mobile-optimized site solves their direct revenue problem." },
      { heading: "2. The 3-Hour AI Design Pipeline", body: "Use Framer AI or Relume to generate full site wireframes, Claude for compelling local business copywriting, and Unsplash for high-res commercial imagery." },
      { heading: "3. Retainer Upsells for Recurring Income", body: "Bundle monthly hosting, speed optimization, and basic text updates into a $99/month recurring maintenance plan." }
    ]
  },
  {
    title: "Automated Cold Email Lead Generation: The $3,000/Month B2B Blueprint",
    slug: "automated-cold-email-lead-generation-blueprint",
    category: "Online Earning",
    tags: ["Cold Email", "Lead Generation", "B2B", "Sales Outreach", "Agency"],
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    cpc: "$7.50+",
    summary: "How B2B lead generation agencies set up secondary domains, email warmups, and personalized AI prompts to book qualified sales calls for tech companies.",
    sections: [
      { heading: "1. Setting Up Secondary Email Infrastructure", body: "Never send cold campaigns from your primary domain. Set up 3 to 5 auxiliary domains with proper SPF, DKIM, and DMARC DNS records to ensure 99% inbox placement." },
      { heading: "2. AI-Driven List Building & Personalization", body: "Extract verified target decision-maker leads using Apollo or Clay, then use AI to write relevant, non-spammy opening lines referencing recent company milestones." },
      { heading: "3. Pay-Per-Appointment Pricing Model", body: "Charge clients $250 to $500 for every qualified decision-maker that attends a sales discovery call, providing a frictionless risk-free pitch." }
    ]
  },
  {
    title: "Selling High-Yield Excel & Google Sheets Budget Trackers on Gumroad",
    slug: "selling-excel-google-sheets-budget-trackers-gumroad",
    category: "Online Earning",
    tags: ["Google Sheets", "Excel Templates", "Digital Products", "Gumroad", "Personal Finance"],
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.10+",
    summary: "Learn how spreadsheet creators generate $1,500/month in passive digital sales by turning basic formulas into automated financial tracking dashboards.",
    sections: [
      { heading: "1. Why Simple Spreadsheets Outsell Complex Apps", body: "Users prefer the transparency and privacy of Google Sheets over expensive subscription budgeting apps. Clean visual dashboards with automated charts convert extremely well." },
      { heading: "2. Top Best-Selling Financial Spreadsheet Types", body: "Popular categories include 50/30/20 monthly budget planners, debt snowball calculators, real estate rental yield trackers, and crypto portfolio sheets." },
      { heading: "3. Viral Organic Marketing on Reddit & TikTok", body: "Share honest, helpful financial breakdown videos on TikTok and r/personalfinance showing before-and-after debt reduction visuals with template links." }
    ]
  },
  {
    title: "Faceless TikTok Shop Product Reviews: Complete Setup Guide",
    slug: "faceless-tiktok-shop-product-reviews-complete-guide",
    category: "Affiliate Marketing",
    tags: ["TikTok Shop", "Affiliate", "Ecommerce", "Video Reviews", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=80",
    cpc: "$4.90+",
    summary: "Discover how creators film engaging aesthetic hands-only product unboxings and demonstration clips to generate thousands in affiliate commissions.",
    sections: [
      { heading: "1. The Power of Overhead Hands-Only B-Roll", body: "You do not need to show your face or speak on microphone. Overhead tabletop lighting, clean desk mats, and rhythmic background music keep retention high." },
      { heading: "2. Requesting Free Sample Units from Sellers", body: "Once your creator account qualifies, request free physical samples directly from top TikTok Shop manufacturers in exchange for honest video reviews." },
      { heading: "3. Tagging Commissionable Product Links", body: "Attach the direct shopping cart link to your video so viewers can purchase with one click without ever leaving the TikTok application." }
    ]
  },
  {
    title: "How to Build a $1,000/Month AI Newsletter with Beehiiv and Substack",
    slug: "build-1000-month-ai-newsletter-beehiiv-substack",
    category: "AI Tools",
    tags: ["Newsletter", "Beehiiv", "Substack", "AI", "Digital Media"],
    coverImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.60+",
    summary: "A practical step-by-step masterclass on curating the week's top AI developments and monetizing a targeted reader base through programmatic sponsorships.",
    sections: [
      { heading: "1. The 30-Minute AI Curation Routine", body: "Scan GitHub trending, HuggingFace releases, and tech Twitter. Feed the top 5 announcements into an AI summarizer to extract key takeaways for busy executives." },
      { heading: "2. Setting Up Native Ad Networks in Beehiiv", body: "Beehiiv features built-in ad networks that automatically match your newsletter with premium tech sponsors paying $20 to $45 per thousand opens." },
      { heading: "3. Expanding with Digital Resource Upgrades", body: "Offer a 'Top 100 AI Prompts Database' as a lead magnet on LinkedIn to rapidly acquire 2,000+ organic subscribers in your first 60 days." }
    ]
  },
  {
    title: "Midjourney to Merch by Amazon: Passive T-Shirt Royalty Blueprint",
    slug: "midjourney-merch-by-amazon-passive-tshirt-royalties",
    category: "AI Tools",
    tags: ["Midjourney", "Amazon Merch", "Print on Demand", "AI Art", "Royalties"],
    coverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    cpc: "$4.70+",
    summary: "How digital artists create commercial vector designs with Midjourney v6 and earn automated royalties on Amazon's massive global marketplace.",
    sections: [
      { heading: "1. Generating Commercial Vector Graphics with AI", body: "Prompt Midjourney for isolated graphics on white backgrounds with clean outlines and flat vintage color palettes suitable for screen printing." },
      { heading: "2. Vectorizing and Transparent Upscaling", body: "Convert raster images to crisp 4500x5400 pixel 300 DPI transparent PNGs using free AI vectorizers like Vectorizer.ai and Upscayl." },
      { heading: "3. Optimizing Amazon Title and Brand Keywords", body: "Structure your product titles with high-intent search terms (e.g. 'Retro Vintage Hiking T-Shirt Outdoor Adventure Graphic Tee') to capture organic Amazon search shoppers." }
    ]
  },
  {
    title: "Top 7 High-Converting VPN & Cybersecurity Affiliate Programs",
    slug: "top-vpn-cybersecurity-affiliate-programs-high-commissions",
    category: "Affiliate Marketing",
    tags: ["VPN", "Cybersecurity", "Affiliate Marketing", "High CPC", "Tech Reviews"],
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    cpc: "$8.90+",
    summary: "Explore the most lucrative cybersecurity partner programs paying 40% to 70% recurring revenue share and $100+ CPA bounties for VPN referrals.",
    sections: [
      { heading: "1. Why Cybersecurity Keywords Have Sky-High CPCs", body: "VPN providers like NordVPN, ExpressVPN, and Surfshark battle fiercely for search market share, driving ad bid prices up to $15+ per click." },
      { heading: "2. Target Low-Competition Privacy Search Queries", body: "Instead of competitive terms like 'Best VPN', target specific use cases: 'Fastest VPN for Remote Workers in Europe' or 'How to Secure Public Wi-Fi on iPhone'." },
      { heading: "3. In-Depth Speed and Leak Test Comparisons", body: "Include real DNS leak tests and download speed benchmarks in your review articles to build buyer confidence and achieve double-digit conversion rates." }
    ]
  }
];

function generateMarkdownArticle(topic) {
  const today = new Date().toISOString().split("T")[0];

  let bodyContent = `## Executive Summary\n\n${topic.summary}\n\n`;

  topic.sections.forEach((sec) => {
    bodyContent += `## ${sec.heading}\n\n${sec.body}\n\n`;
  });

  bodyContent += `## Strategic Action Steps to Implement This Model\n\n`;
  bodyContent += `1. **Commit to one monetization vertical**: Focus entirely on executing this single blueprint for at least 30 continuous days.\n`;
  bodyContent += `2. **Build your automated distribution asset**: Set up your blog, storefront, or workflow using 100% free cloud tiers.\n`;
  bodyContent += `3. **Analyze performance and scale**: Review your conversion data weekly to optimize traffic funnels and multiply your earnings.\n\n`;

  bodyContent += `## Frequently Asked Questions (FAQs)\n\n`;
  bodyContent += `### How much capital is required to get started?\n`;
  bodyContent += `All workflows outlined in this guide use zero-cost cloud platforms and free software tiers, allowing you to start with **$0 upfront budget**.\n\n`;
  bodyContent += `### When will initial earnings begin to arrive?\n`;
  bodyContent += `Publishers and creators executing these methods consistently typically generate active conversions within **30 to 45 days**.\n`;

  return `---
title: "${topic.title}"
excerpt: "${topic.summary}"
date: "${today}"
category: "${topic.category}"
tags: ${JSON.stringify(topic.tags)}
coverImage: "${topic.coverImage}"
cpcPotential: "High CPC (${topic.cpc})"
featured: false
author:
  name: "EarnSmartly Editorial"
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
---

${bodyContent}`;
}

function run() {
  const args = process.argv.slice(2);
  let count = 7;
  const countIdx = args.indexOf("--count");
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10) || 7;
  }

  console.log(`Starting Unique Post Generator (Target: ${count} fresh unique posts)...`);

  const existingFiles = fs.readdirSync(postsDirectory).map((f) => f.replace(/\.md$/, ""));
  let generated = 0;

  for (const topic of uniqueMasterTopics) {
    if (generated >= count) break;

    // Strict Anti-Duplication check
    if (!existingFiles.includes(topic.slug)) {
      const filePath = path.join(postsDirectory, `${topic.slug}.md`);
      const content = generateMarkdownArticle(topic);
      fs.writeFileSync(filePath, content, "utf8");
      existingFiles.push(topic.slug);
      console.log(`[${generated + 1}/${count}] Published unique: ${topic.title}`);
      generated++;
    }
  }

  console.log(`\nSuccessfully published ${generated} 100% unique, non-repeating articles!`);
}

run();
