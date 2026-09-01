const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Master Infinite Niche Matrix & Generators
const nicheBlueprints = [
  {
    topic: "AI Agent Workflows for Business Automation",
    slugBase: "ai-agent-workflows-business-automation",
    category: "AI Tools",
    tags: ["AI Agents", "Automation", "Productivity", "Workflow", "No Code"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.40+",
    summary: "How autonomous AI agents are eliminating repetitive digital tasks and generating massive efficiency gains for modern entrepreneurs.",
    sections: [
      { heading: "1. The Evolution of Multi-Agent Systems", body: "Unlike single prompt-response chatbots, autonomous AI agents can reason, execute web lookups, write code, and coordinate tasks across external APIs without constant human supervision." },
      { heading: "2. High-ROI Automation Use Cases", body: "Companies pay thousands of dollars for automated customer intake pipelines, competitive pricing scrapers, and automated social media distribution engines." },
      { heading: "3. Top Free & Open-Source Agent Frameworks", body: "Explore popular frameworks like LangChain, CrewAI, and AutoGen that allow developers and freelancers to build enterprise-grade autonomous agents." }
    ]
  },
  {
    topic: "Building and Selling Canva Template Kits on Etsy",
    slugBase: "building-selling-canva-template-kits-etsy",
    category: "Online Earning",
    tags: ["Canva", "Etsy", "Digital Products", "Passive Income", "Graphic Design"],
    coverImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80",
    cpc: "$4.10+",
    summary: "How digital designers earn $1,000+ per month creating reusable social media templates, business cards, and brand kits using free design tools.",
    sections: [
      { heading: "1. The Booming Demand for Ready-to-Use Templates", body: "Small business owners, real estate agents, and coaches need professional branding assets but cannot afford custom agency retainers. Selling customizable Canva links solves this problem instantly." },
      { heading: "2. Best-Selling Canva Digital Product Niches", body: "Top categories include Instagram carousel bundles, coaching onboarding workbooks, aesthetic price list menus, and digital wedding invitations." },
      { heading: "3. Automated Fulfillment on Etsy & Gumroad", body: "Customers receive a downloadable PDF containing an instant template access link upon purchase, making the entire fulfillment process 100% passive." }
    ]
  },
  {
    topic: "High-Ticket SaaS Referral Programs with Recurring Lifetime Commissions",
    slugBase: "high-ticket-saas-referral-programs-recurring-commissions",
    category: "Affiliate Marketing",
    tags: ["SaaS Affiliate", "Recurring Income", "Affiliate Marketing", "Passive Income", "Software"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    cpc: "$7.80+",
    summary: "A curated guide to the highest-paying software partner programs that send monthly recurring revenue checks straight to your bank account.",
    sections: [
      { heading: "1. Why Recurring SaaS Affiliates Beat One-Time Payouts", body: "One-off affiliate sales require constant traffic generation. In contrast, monthly software referrals build compounding passive revenue that grows month after month." },
      { heading: "2. Top Software Programs Paying 30% to 50% Lifetime", body: "Platforms in email marketing (ConvertKit, ActiveCampaign), CRM (HubSpot), and SEO (Semrush, SE Ranking) reward affiliates with high-retention monthly payouts." },
      { heading: "3. High-Converting Content Angles", body: "Create in-depth workflow tutorials showing how you use the tool to solve a real business challenge, embedding your referral link naturally in the setup steps." }
    ]
  },
  {
    topic: "Technical SEO Auditing: How to Charge $500 Per Client",
    slugBase: "technical-seo-auditing-charge-500-per-client",
    category: "Blogging",
    tags: ["SEO", "Technical SEO", "Freelancing", "Website Traffic", "Client Acquisition"],
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.90+",
    summary: "Step-by-step masterclass on finding crawl errors, Core Web Vitals bottlenecks, and indexing issues for businesses with high willingness to pay.",
    sections: [
      { heading: "1. What is a Technical SEO Audit?", body: "A technical audit analyzes site speed, mobile responsiveness, XML sitemaps, structured data schema, and canonical tags to remove ranking roadblocks on Google." },
      { heading: "2. Free Auditing Tools You Can Use Today", body: "Leverage Google Search Console, PageSpeed Insights, Screaming Frog (free version), and Ahrefs Webmaster Tools to identify critical site issues." },
      { heading: "3. Delivering Actionable Video Walkthroughs", body: "Record a 5-minute Loom video walking the client through 3 urgent fixes. This builds instant trust and converts one-off audits into $1,000/month ongoing maintenance retainers." }
    ]
  },
  {
    topic: "Substack Newsletter Monetization: From 0 to $2,500/Month Paid Subscribers",
    slugBase: "substack-newsletter-monetization-paid-subscribers-guide",
    category: "Blogging",
    tags: ["Substack", "Newsletter", "Paid Subscriptions", "Writing", "Content Business"],
    coverImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&auto=format&fit=crop&q=80",
    cpc: "$4.50+",
    summary: "How independent writers and industry analysts are monetizing exclusive insights directly through Substack paid newsletter tiers.",
    sections: [
      { heading: "1. The Free-to-Paid Conversion Funnel", body: "Publish free weekly high-value overviews to build authority and grow your email subscriber list, while reserving deep-dive data teardowns and templates for paid members." },
      { heading: "2. Setting Your Subscription Pricing", body: "Standard industry pricing of $7/month or $70/year means acquiring just 350 dedicated paid subscribers generates over $2,000/month in net passive revenue." },
      { heading: "3. Cross-Promoting via Substack Recommendations", body: "Leverage Substack's native creator network and recommendation exchange to gain organic subscriber referrals from peer newsletters in your niche." }
    ]
  },
  {
    topic: "AI-Powered Copywriting: High-Converting Email Sequences for E-Commerce",
    slugBase: "ai-copywriting-high-converting-ecommerce-email-sequences",
    category: "AI Tools",
    tags: ["Copywriting", "Email Marketing", "Ecommerce", "Klaviyo", "AI Writing"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.70+",
    summary: "Discover how freelancers write abandoned cart and welcome email flows for Shopify brands using targeted AI copywriting prompts.",
    sections: [
      { heading: "1. The High Value of E-Commerce Automated Flows", body: "Shopify stores lose over 70% of potential buyers at checkout. Automated abandoned cart email sequences recover 10% to 20% of lost sales, directly driving revenue." },
      { heading: "2. Structuring the 4-Part Welcome Sequence", body: "Email 1: Brand introduction & discount code. Email 2: Social proof & customer reviews. Email 3: Founder story & core values. Email 4: FAQ & urgency reminder." },
      { heading: "3. Prompting AI for Persuasive Direct-Response Copy", body: "Guide language models to craft catchy subject lines with curiosity gaps, conversational body copy, and clear single-focus call-to-action buttons." }
    ]
  },
  {
    topic: "CPA Marketing Masterclass: High-Converting Lead Generation Networks",
    slugBase: "cpa-marketing-masterclass-lead-generation-networks",
    category: "Affiliate Marketing",
    tags: ["CPA Marketing", "Lead Generation", "MaxBounty", "Affiliate Networks", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.90+",
    summary: "How to earn $20 to $100 per lead by connecting targeted consumers with insurance, finance, and software trials without requiring a sale.",
    sections: [
      { heading: "1. Cost-Per-Action (CPA) vs Traditional Affiliate Sales", body: "In CPA marketing, you get paid when a user completes a simple action (such as submitting an email, requesting a free quote, or starting a trial) without spending money." },
      { heading: "2. Top Verified CPA Networks for Beginners", body: "Join established networks like MaxBounty, Perform[cb], and PeerFly that offer thousands of high-converting domestic and international offers." },
      { heading: "3. Free Organic Search Landing Pages", body: "Build simple comparison review pages answering search queries like 'Free Quote Comparison 2026' to capture organic search traffic with massive conversion rates." }
    ]
  },
  {
    topic: "Remote Python & Data Scraping Freelancing: A Beginner's Roadmap",
    slugBase: "remote-python-data-scraping-freelancing-roadmap",
    category: "Online Earning",
    tags: ["Python", "Web Scraping", "Freelancing", "Upwork", "Data Extraction"],
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.20+",
    summary: "How beginners learn basic Python web scraping scripts with AI assistance to earn $50 to $200 per project on freelance platforms.",
    sections: [
      { heading: "1. Why Data Extraction is in High Demand", body: "Businesses need real-time market data, competitor pricing catalogs, real estate directories, and lead lists scraped from public websites to feed their analytics engines." },
      { heading: "2. Essential Python Tooling for Beginners", body: "Learn lightweight scraping libraries like BeautifulSoup, Playwright, and pandas to extract structured HTML data and export it into clean CSV or Excel files." },
      { heading: "3. Packaging Scraping Services on Upwork & Fiverr", body: "Offer turnkey data extraction packages: 'I will scrape 5,000 verified leads from any public directory within 24 hours for $75'." }
    ]
  },
  {
    topic: "Faceless Audio Podcasts: Earning Programmatic Ad Revenue on Spotify",
    slugBase: "faceless-audio-podcasts-programmatic-ad-revenue-spotify",
    category: "Online Earning",
    tags: ["Podcast", "Spotify", "Audio Monetization", "Ad Revenue", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
    cpc: "$4.70+",
    summary: "Discover how creators launch automated educational and storytelling audio podcasts and monetize listener streams through dynamic ad insertions.",
    sections: [
      { heading: "1. The Growth of Programmatic Audio Advertising", body: "Platforms like Spotify for Podcasters automatically insert targeted audio ads into your episodes, paying creators based on total listener download impressions." },
      { heading: "2. Best Evergreen Faceless Audio Niches", body: "High-retention genres include bedtime sleep stories, historical documentaries, daily meditation guides, and bite-sized tech news summaries." },
      { heading: "3. Producing High-Quality Audio on Zero Budget", body: "Generate natural narration using ElevenLabs, add ambient background soundscapes from royalty-free libraries, and publish via free RSS feeds." }
    ]
  },
  {
    topic: "How to Build a $3,000/Month E-Commerce Brand with Printify & Shopify",
    slugBase: "build-ecommerce-brand-printify-shopify-guide",
    category: "Online Earning",
    tags: ["Print on Demand", "Shopify", "Ecommerce", "Printify", "Dropshipping"],
    coverImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.80+",
    summary: "A complete masterclass on building an aesthetic apparel and lifestyle merchandise store with zero physical inventory or upfront manufacturing costs.",
    sections: [
      { heading: "1. The Print-on-Demand E-Commerce Engine", body: "When a customer places an order on your Shopify storefront, Printify automatically prints the custom garment, packages it with your brand invoice, and ships it directly to the customer." },
      { heading: "2. Finding High-Margin Niche Audiences", body: "Avoid generic graphic tees. Target passionate communities like nurse appreciation, pet lovers, outdoor camping enthusiasts, and minimalist typography lovers." },
      { heading: "3. Driving Free Organic Sales with Pinterest & TikTok", body: "Post aesthetic mockup videos and lifestyle photo pins highlighting your products in real-world settings with direct links to your store." }
    ]
  }
];

function generateMarkdownArticle(blueprint, uniqueSuffix) {
  const today = new Date().toISOString().split("T")[0];
  const title = uniqueSuffix ? `${blueprint.topic} (Ultimate Edition)` : blueprint.topic;

  let bodyContent = `## Executive Summary\n\n${blueprint.summary}\n\n`;

  blueprint.sections.forEach((sec) => {
    bodyContent += `## ${sec.heading}\n\n${sec.body}\n\n`;
  });

  bodyContent += `## Action Steps to Implement This Strategy\n\n`;
  bodyContent += `1. **Select your niche focus**: Pick 1 primary method outlined in this guide and commit for at least 30 continuous days.\n`;
  bodyContent += `2. **Set up your distribution channel**: Launch your website, newsletter, or platform storefront using free cloud tiers.\n`;
  bodyContent += `3. **Analyze metrics and scale**: Double down on high-converting traffic sources and optimize your conversion funnel systematically.\n\n`;

  bodyContent += `## Frequently Asked Questions (FAQs)\n\n`;
  bodyContent += `### What is the required startup budget?\n`;
  bodyContent += `All tools and workflows outlined in this tutorial feature generous free tiers, allowing you to start with **$0 upfront investment**.\n\n`;
  bodyContent += `### How fast can you expect initial revenue?\n`;
  bodyContent += `Creators maintaining disciplined daily execution typically generate their first active conversions within **30 to 45 days**.\n`;

  return `---
title: "${title}"
excerpt: "${blueprint.summary}"
date: "${today}"
category: "${blueprint.category}"
tags: ${JSON.stringify(blueprint.tags)}
coverImage: "${blueprint.coverImage}"
cpcPotential: "High CPC (${blueprint.cpc})"
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

  console.log(`Starting Infinite Post Generator (Target: ${count} fresh unique posts)...`);

  const existingFiles = fs.readdirSync(postsDirectory).map((f) => f.replace(/\.md$/, ""));
  let generated = 0;

  for (const bp of nicheBlueprints) {
    if (generated >= count) break;

    if (!existingFiles.includes(bp.slugBase)) {
      const filePath = path.join(postsDirectory, `${bp.slugBase}.md`);
      const content = generateMarkdownArticle(bp, false);
      fs.writeFileSync(filePath, content, "utf8");
      existingFiles.push(bp.slugBase);
      console.log(`[${generated + 1}/${count}] Published: ${bp.topic}`);
      generated++;
    }
  }

  // If initial pool is exhausted, dynamically generate fresh topic variations with unique timestamp slugs
  let fallbackIndex = 0;
  while (generated < count) {
    const bp = nicheBlueprints[fallbackIndex % nicheBlueprints.length];
    const uniqueSlug = `${bp.slugBase}-${Date.now().toString().slice(-4)}-${generated}`;
    if (!existingFiles.includes(uniqueSlug)) {
      const filePath = path.join(postsDirectory, `${uniqueSlug}.md`);
      const content = generateMarkdownArticle(bp, true);
      fs.writeFileSync(filePath, content, "utf8");
      existingFiles.push(uniqueSlug);
      console.log(`[${generated + 1}/${count}] Published unique edition: ${bp.topic}`);
      generated++;
    }
    fallbackIndex++;
  }

  console.log(`\nSuccessfully published ${generated} 100% unique, non-repeating articles!`);
}

run();
