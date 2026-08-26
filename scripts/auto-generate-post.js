const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Master pool of high-CPC topics across AI, Earning, Affiliate, Tech, and Freelancing
const topicQueue = [
  {
    title: "10 Best Free AI Tools to Make Money Online in 2026",
    slug: "best-free-ai-tools-make-money-online-2026",
    category: "AI Tools",
    tags: ["AI Tools", "Passive Income", "Make Money Online", "ChatGPT", "Productivity"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($3.50+)",
    summary: "Discover the most powerful free artificial intelligence tools you can use right now to generate passive income streams with zero upfront investment.",
    sections: [
      {
        heading: "1. AI Content Creation & Copywriting Engines",
        body: "Artificial intelligence has democratized digital content production. Tools like ChatGPT, Claude, and Gemini allow freelancers and marketers to craft long-form blog posts, email sequences, and ad copy in minutes."
      },
      {
        heading: "2. Generative Image & Graphic Design Monetization",
        body: "With generative models like Midjourney, Flux, and Ideogram, anyone can create print-on-demand designs, stock imagery, wall art, and custom YouTube thumbnails."
      }
    ]
  },
  {
    title: "How to Build a $500/Month Niche Blog with Zero Budget",
    slug: "how-to-build-500-month-niche-blog-zero-budget",
    category: "Blogging",
    tags: ["Blogging", "Google AdSense", "SEO", "Passive Income", "Website"],
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.20+)",
    summary: "A complete step-by-step master guide to launching, ranking, and monetizing a niche blog in 2026 without spending a single dollar on hosting or software.",
    sections: [
      {
        heading: "1. Finding Ultra Low-Competition Long-Tail Keywords",
        body: "The secret to ranking a brand new blog fast is targeting long-tail informational queries with zero to low competition."
      },
      {
        heading: "2. Free Cloud Hosting on Global Edge Networks",
        body: "Modern static websites cost $0.00 to host on Vercel and load in under 200 milliseconds, securing 100/100 Google Lighthouse speed scores."
      }
    ]
  },
  {
    title: "Top 7 High-Paying Affiliate Programs for Beginners in 2026",
    slug: "top-high-paying-affiliate-programs-beginners-2026",
    category: "Affiliate Marketing",
    tags: ["Affiliate Marketing", "Passive Income", "SaaS", "Commission", "Digital Marketing"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($6.00+)",
    summary: "Discover the most lucrative affiliate marketing programs offering recurring commissions, high payouts, and long cookie durations for beginners.",
    sections: [
      {
        heading: "1. SaaS & Software Subscription Affiliates",
        body: "SaaS products offer monthly recurring lifetime revenue. Platforms in email marketing and AI writing pay between 20% and 40% every single month."
      },
      {
        heading: "2. Web Hosting & Developer Tool Networks",
        body: "Web hosts and cloud infrastructure providers offer massive upfront CPA payouts ranging from $50 to $150 per verified signup."
      }
    ]
  },
  {
    title: "Step-by-Step Guide to Getting Instant Google AdSense Approval",
    slug: "step-by-step-guide-instant-google-adsense-approval",
    category: "Blogging",
    tags: ["Google AdSense", "Blogging", "Website Monetization", "SEO Guide", "Earn Money"],
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($5.50+)",
    summary: "Everything you need to know to pass the Google AdSense review process seamlessly without policy rejection or low value content warnings.",
    sections: [
      {
        heading: "1. The 5 Mandatory Compliance Pages",
        body: "Google AdSense policy strictly requires webmasters to establish clear identity with About Us, Contact Us, Privacy Policy, Terms, and Disclaimer."
      },
      {
        heading: "2. Content Depth and Originality",
        body: "Publish well-structured articles with subheadings, bullet points, actionable takeaways, and a minimum of 800 to 1,500 words."
      }
    ]
  },
  {
    title: "The Ultimate Guide to YouTube Automation and Faceless Channels",
    slug: "ultimate-guide-youtube-automation-faceless-channels",
    category: "Online Earning",
    tags: ["YouTube", "AI Video", "Passive Income", "Video Monetization", "Online Business"],
    coverImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.00+)",
    summary: "How digital creators are scaling 6-figure automated YouTube channels using AI scriptwriting, realistic voiceovers, and stock footage.",
    sections: [
      {
        heading: "1. High-CPM Evergreen Niches",
        body: "Niches like Personal Finance, Tech Reviews, and Business Case Studies command the highest CPMs ($10 to $30 per 1,000 views)."
      },
      {
        heading: "2. Automated AI Production Pipeline",
        body: "Use AI models for viral hook scripting, ElevenLabs for studio-grade narration, and automated editing tools like CapCut."
      }
    ]
  },
  {
    title: "How to Make $100 a Day with Prompt Engineering & AI Freelancing",
    slug: "how-to-make-100-a-day-prompt-engineering-ai-freelancing",
    category: "AI Tools",
    tags: ["Prompt Engineering", "Freelancing", "Upwork", "Fiverr", "AI Skills"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($5.10+)",
    summary: "Discover how freelancers are turning advanced prompt engineering techniques into high-paying remote consulting gigs.",
    sections: [
      {
        heading: "1. What is Prompt Engineering?",
        body: "Prompt engineering is the art and science of structuring inputs for large language models to produce deterministic, accurate outputs."
      },
      {
        heading: "2. High-Demand Freelance Services",
        body: "Services in highest demand include custom AI system prompt design, automated customer support script templates, and marketing workflows."
      }
    ]
  },
  {
    title: "Top 8 AI Video Generators for Content Creators in 2026",
    slug: "top-8-ai-video-generators-content-creators-2026",
    category: "AI Tools",
    tags: ["AI Video", "Content Creation", "Video Marketing", "Runway", "Sora"],
    coverImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.80+)",
    summary: "Explore the most realistic and powerful generative video platforms that turn text scripts into cinematic 4K video clips.",
    sections: [
      {
        heading: "1. Text-to-Video Breakthroughs",
        body: "Generative video technology now allows users to describe visual camera angles, lighting conditions, and hyper-realistic physics."
      },
      {
        heading: "2. Monetizing AI Video Assets",
        body: "Creators can produce viral social media shorts, commercial video ads for e-commerce, and background stock video footage."
      }
    ]
  },
  {
    title: "How to Start an Automated Drop Servicing Agency in 2026",
    slug: "how-to-start-automated-drop-servicing-agency-2026",
    category: "Online Earning",
    tags: ["Drop Servicing", "Online Business", "Agency", "Freelancing", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($6.50+)",
    summary: "A step-by-step master blueprint on selling high-ticket digital services by connecting premium clients with specialized freelance talent.",
    sections: [
      {
        heading: "1. Understanding the Drop Servicing Model",
        body: "Drop servicing involves acting as a digital project manager. You sell a service for $1,000 to a business client and outsource the fulfillment to an expert for $400, keeping $600 profit."
      },
      {
        heading: "2. High-Margin Service Verticals",
        body: "Focus on services with high perceived value like technical SEO audits, custom Shopify development, and video animation."
      }
    ]
  },
  {
    title: "5 Best Free SEO Tools to Rank on Google Page 1 in 2026",
    slug: "5-best-free-seo-tools-rank-google-page-1-2026",
    category: "Blogging",
    tags: ["SEO", "Google Search", "Keyword Research", "Blogging", "Website Traffic"],
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($5.90+)",
    summary: "Rank your articles faster on Google using these 100% free search engine optimization tools without expensive subscriptions.",
    sections: [
      {
        heading: "1. Google Search Console & Keyword Planner",
        body: "Direct search data from Google reveals exact search query impressions, average ranking positions, and click-through rates."
      },
      {
        heading: "2. Free On-Page & Technical SEO Analyzers",
        body: "Audit broken links, schema markup, and mobile responsiveness using free tools like PageSpeed Insights and Ubersuggest."
      }
    ]
  },
  {
    title: "How to Build a High-Converting Affiliate Comparison Website",
    slug: "how-to-build-high-converting-affiliate-comparison-website",
    category: "Affiliate Marketing",
    tags: ["Affiliate Marketing", "Product Reviews", "Comparison Site", "Passive Income", "Monetization"],
    coverImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($6.80+)",
    summary: "Learn how 'Versus' and 'Top 10' comparison tables drive the highest buyer-intent conversions in modern digital affiliate marketing.",
    sections: [
      {
        heading: "1. Why Comparison Keywords Convert Best",
        body: "When users search 'Tool A vs Tool B', they already have their credit card in hand. An objective breakdown with clear pros and cons captures high conversion rates."
      },
      {
        heading: "2. Designing Visual Feature Matrix Tables",
        body: "Clean responsive tables with highlighted top picks, rating stars, and instant CTA buttons double your affiliate click-through rate."
      }
    ]
  },
  {
    title: "The Ultimate Guide to ChatGPT Prompts for Fast Content Writing",
    slug: "ultimate-guide-chatgpt-prompts-fast-content-writing",
    category: "AI Tools",
    tags: ["ChatGPT", "Prompts", "Content Writing", "Copywriting", "Productivity"],
    coverImage: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.50+)",
    summary: "Copy-paste prompt chains that allow content creators to write comprehensive, human-like, SEO-optimized articles in record time.",
    sections: [
      {
        heading: "1. Overcoming the Robotic AI Tone",
        body: "Instruct large language models to use conversational transitions, concrete examples, varied sentence lengths, and active voice."
      },
      {
        heading: "2. The 3-Stage Prompting Framework",
        body: "Stage 1: Outline extraction. Stage 2: Section-by-section drafting with research constraints. Stage 3: Editorial polish and FAQ generation."
      }
    ]
  },
  {
    title: "How to Make Passive Income with Digital Planners and Notion Templates",
    slug: "make-passive-income-digital-planners-notion-templates",
    category: "Online Earning",
    tags: ["Notion", "Digital Products", "Templates", "Passive Income", "Etsy"],
    coverImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.30+)",
    summary: "Turn productivity workflows into recurring digital downloads on Gumroad and Etsy with 99% profit margins and zero shipping costs.",
    sections: [
      {
        heading: "1. Top In-Demand Template Categories",
        body: "Focus on student planners, personal finance and budget trackers, project management dashboards, and habit builders."
      },
      {
        heading: "2. Automated Customer Delivery Pipeline",
        body: "Platforms like Gumroad automatically deliver duplicate template links to customers upon payment, providing 100% passive fulfillment."
      }
    ]
  }
];

function generateMarkdownArticle(topic) {
  const today = new Date().toISOString().split("T")[0];

  let bodyContent = `## Executive Summary\n\n${topic.summary}\n\n`;

  topic.sections.forEach((sec) => {
    bodyContent += `## ${sec.heading}\n\n${sec.body}\n\n`;
  });

  bodyContent += `## Key Action Steps to Get Started\n\n`;
  bodyContent += `1. **Pick your focus area**: Choose 1 specific method outlined above and stick with it for at least 30 days.\n`;
  bodyContent += `2. **Set up daily consistency**: Dedicate 45 minutes every single day to content creation or system optimization.\n`;
  bodyContent += `3. **Track and optimize**: Monitor your Google Analytics and Search Console data to double down on what works.\n\n`;

  bodyContent += `## Frequently Asked Questions (FAQs)\n\n`;
  bodyContent += `### Is any financial investment required to start?\n`;
  bodyContent += `No. All tools, hosting strategies, and platforms highlighted in this guide feature robust free tiers that allow you to start with **$0 capital**.\n\n`;
  bodyContent += `### How long before seeing the first earnings?\n`;
  bodyContent += `With consistent daily publishing and proper keyword targeting, most digital creators start seeing traffic and ad revenue within **30 to 60 days**.\n`;

  return `---
title: "${topic.title}"
excerpt: "${topic.summary}"
date: "${today}"
category: "${topic.category}"
tags: ${JSON.stringify(topic.tags)}
coverImage: "${topic.coverImage}"
cpcPotential: "${topic.cpcPotential}"
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

  console.log(`Starting Automated Daily Post Generator (Target: ${count} posts)...`);

  const existingFiles = fs.readdirSync(postsDirectory).map((f) => f.replace(/\.md$/, ""));
  let generated = 0;

  for (const topic of topicQueue) {
    if (generated >= count) break;

    if (!existingFiles.includes(topic.slug)) {
      const filePath = path.join(postsDirectory, `${topic.slug}.md`);
      const content = generateMarkdownArticle(topic);
      fs.writeFileSync(filePath, content, "utf8");
      existingFiles.push(topic.slug);
      console.log(`[${generated + 1}/${count}] Generated new post: ${topic.slug}`);
      generated++;
    }
  }

  // If we still need more posts, generate variations with unique timestamp slugs
  while (generated < count) {
    const randomTopic = topicQueue[Math.floor(Math.random() * topicQueue.length)];
    const uniqueSlug = `${randomTopic.slug}-${Date.now().toString().slice(-4)}-${generated}`;
    const newTopic = {
      ...randomTopic,
      slug: uniqueSlug,
      title: `${randomTopic.title} (2026 Edition)`,
    };
    const filePath = path.join(postsDirectory, `${newTopic.slug}.md`);
    const content = generateMarkdownArticle(newTopic);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`[${generated + 1}/${count}] Generated unique post: ${newTopic.slug}`);
    generated++;
  }

  console.log(`\nSuccessfully generated ${generated} fresh articles!`);
}

run();
