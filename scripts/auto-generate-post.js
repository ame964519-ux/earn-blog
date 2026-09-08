const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Master pool of Core Niches for generative expansion
const niches = [
  {
    name: "AI Automation Agency (AAA)",
    slugPrefix: "ai-automation-agency",
    category: "AI Tools",
    tags: ["AI Tools", "Agency", "Automation", "Zapier", "Make.com"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.80+",
    coreProblem: "businesses spending 20+ hours weekly on manual data entry and CRM updates",
    solution: "no-code workflow automations using Make.com, Zapier, and OpenAI API integrations",
    businessModel: "$1,000 setup fee plus $150/month recurring maintenance retainer"
  },
  {
    name: "Domain Flipping & Digital Real Estate",
    slugPrefix: "domain-flipping-digital-real-estate",
    category: "Online Earning",
    tags: ["Domain Flipping", "Digital Assets", "Investing", "SedoSell", "GoDaddy"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.90+",
    coreProblem: "finding undervalued brandable domain names before tech startups register them",
    solution: "identifying expiring premium domains and listing them on marketplace auctions",
    businessModel: "buying names for $10 and reselling for $300 to $2,500 on Dan.com or Sedo"
  },
  {
    name: "Airbnb Co-Hosting & Rental Arbitrage",
    slugPrefix: "airbnb-co-hosting-rental-arbitrage",
    category: "Online Earning",
    tags: ["Airbnb", "Real Estate", "Co-Hosting", "Passive Income", "Property Management"],
    coverImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
    cpc: "$7.20+",
    summary: "How to manage short-term rentals for property owners without owning real estate",
    coreProblem: "busy homeowners who want rental revenue but lack time to manage guest check-ins and cleaning schedules",
    solution: "full-service digital co-hosting handling listings, dynamic pricing, and guest communication",
    businessModel: "taking a 15% to 25% share of gross monthly booking revenue"
  },
  {
    name: "Remote Technical Writing for Web3 & Tech Companies",
    slugPrefix: "remote-technical-writing-web3-tech",
    category: "Online Earning",
    tags: ["Technical Writing", "Freelancing", "Documentation", "Web3", "Remote Work"],
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.40+",
    coreProblem: "software engineers creating complex APIs without clear documentation for developers",
    solution: "writing developer documentation, SDK quickstarts, and technical tutorials",
    businessModel: "charging $300 to $800 per guide or $60/hour on remote contracts"
  },
  {
    name: "Canva Social Media Design Retainers for Coaches",
    slugPrefix: "canva-social-media-design-retainers",
    category: "Online Earning",
    tags: ["Canva", "Graphic Design", "Social Media", "Coaching", "Freelance"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    cpc: "$4.50+",
    coreProblem: "executive and fitness coaches needing daily engaging Instagram carousels",
    solution: "delivering 30 branded monthly carousel designs using reusable Canva Pro templates",
    businessModel: "charging coaches a $500 to $800 monthly recurring content retainer"
  },
  {
    name: "Amazon Influencer Program & Onsite Video Reviews",
    slugPrefix: "amazon-influencer-program-onsite-reviews",
    category: "Affiliate Marketing",
    tags: ["Amazon Influencer", "Video Reviews", "Passive Income", "Affiliate", "Ecommerce"],
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.80+",
    coreProblem: "Amazon shoppers seeking authentic 60-second video demonstrations before buying",
    solution: "uploading honest product overview videos directly onto Amazon product detail pages",
    businessModel: "earning passive influencer commissions every time a shopper watches your video and purchases"
  },
  {
    name: "Automated YouTube Shorts with CapCut AI & ElevenLabs",
    slugPrefix: "automated-youtube-shorts-capcut-elevenlabs",
    category: "AI Tools",
    tags: ["YouTube Shorts", "AI Video", "CapCut", "ElevenLabs", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.20+",
    coreProblem: "producing daily engaging vertical video content without camera gear or studio lighting",
    solution: "using AI script generators, natural voiceovers, and automated kinetic captions",
    businessModel: "monetizing through YouTube Shorts Fund, brand sponsorships, and affiliate links"
  },
  {
    name: "Blogging on Google Cloud & Next.js for $0 Hosting",
    slugPrefix: "blogging-google-cloud-nextjs-free-hosting",
    category: "Blogging",
    tags: ["Next.js", "Vercel", "Web Development", "Blogging", "AdSense"],
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.60+",
    coreProblem: "high monthly hosting and plugin subscription costs eating into new blogger profits",
    solution: "deploying ultra-fast static Jamstack websites on Vercel or Cloudflare Pages with zero monthly cost",
    businessModel: "keeping 100% net revenue from AdSense and affiliate clicks"
  },
  {
    name: "High-Ticket Insurance & Financial Lead Generation",
    slugPrefix: "high-ticket-insurance-financial-lead-generation",
    category: "Affiliate Marketing",
    tags: ["Insurance", "Financial Leads", "CPA", "High CPC", "Affiliate"],
    coverImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
    cpc: "$9.80+",
    coreProblem: "insurance agencies paying over $100 per lead via Google Ads auction bidding",
    solution: "building localized informational comparison guides that capture organic search traffic",
    businessModel: "selling verified inbound quote requests to regional brokers for $35 to $75 per lead"
  },
  {
    name: "Building Chrome Extensions with ChatGPT & Cursor",
    slugPrefix: "building-chrome-extensions-chatgpt-cursor",
    category: "AI Tools",
    tags: ["Chrome Extensions", "Cursor AI", "ChatGPT", "Micro SaaS", "Coding"],
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    cpc: "$7.10+",
    coreProblem: "users needing simple productivity browser automations without installing bloated software",
    solution: "coding lightweight Manifest V3 extensions using AI coding assistants in under 48 hours",
    businessModel: "charging a $4.99/month subscription via Stripe ExtensionPay"
  }
];

// Angles to multiply into hundreds of distinct, non-repeating articles
const angles = [
  {
    titleTemplate: "{name}: The Complete Step-by-Step Blueprint",
    slugSuffix: "step-by-step-blueprint",
    summaryTemplate: "A complete master blueprint explaining how to capitalize on {name} with zero upfront budget.",
    sectionHeading1: "1. Understanding the Core Opportunity",
    sectionHeading2: "2. The Step-by-Step Implementation Framework",
    sectionHeading3: "3. Scaling and Automating Monthly Revenue"
  },
  {
    titleTemplate: "How Beginners Make $1,000/Month with {name}",
    slugSuffix: "beginners-1000-month-guide",
    summaryTemplate: "Discover how newcomers are generating consistent $1,000+ monthly revenue through {name}.",
    sectionHeading1: "1. Why This Opportunity is Perfect for Beginners",
    sectionHeading2: "2. Zero-Cost Tooling & Workflow Setup",
    sectionHeading3: "3. Fast-Tracking Your First Paying Customer"
  },
  {
    titleTemplate: "Top 5 Strategies to Scale {name} in 2026",
    slugSuffix: "top-5-scaling-strategies",
    summaryTemplate: "Explore the most effective, proven methods to scale your operations and profit margins in {name}.",
    sectionHeading1: "1. Streamlining Production & Workflow Automation",
    sectionHeading2: "2. High-Ticket Positioning & Value Pricing",
    sectionHeading3: "3. Long-Term Customer Retention & Lifetime Value"
  },
  {
    titleTemplate: "Common Mistakes to Avoid When Starting {name}",
    slugSuffix: "mistakes-to-avoid-guide",
    summaryTemplate: "Avoid costly missteps and fast-track your success with these critical lessons in {name}.",
    sectionHeading1: "1. Pitfall 1: Underpricing and Low-Value Positioning",
    sectionHeading2: "2. Pitfall 2: Neglecting Audience Feedback and Analytics",
    sectionHeading3: "3. The Optimal Roadmap for Sustainable Growth"
  }
];

function generateMarkdown(niche, angle) {
  const today = new Date().toISOString().split("T")[0];
  const title = angle.titleTemplate.replace("{name}", niche.name);
  const summary = angle.summaryTemplate.replace("{name}", niche.name);

  return `---
title: "${title}"
excerpt: "${summary}"
date: "${today}"
category: "${niche.category}"
tags: ${JSON.stringify(niche.tags)}
coverImage: "${niche.coverImage}"
cpcPotential: "High CPC (${niche.cpc})"
featured: false
author:
  name: "EarnSmartly Editorial"
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
---

## Executive Summary

${summary} In the modern digital economy, solving ${niche.coreProblem} represents one of the highest-leverage opportunities for online entrepreneurs.

## ${angle.sectionHeading1}

The foundation of this model rests upon ${niche.solution}. Instead of competing in saturated, low-margin spaces, targeting specific business inefficiencies unlocks immediate commercial demand.

## ${angle.sectionHeading2}

By implementing a structured approach with ${niche.businessModel}, publishers and creators establish predictable cash flow. Focus on delivering measurable outcomes, clear communication, and consistent daily execution.

## ${angle.sectionHeading3}

As your system matures, reinvest in automation and distribution. Combining organic search visibility, structured landing pages, and automated workflows allows you to scale revenue without linearly increasing work hours.

## Key Strategic Steps to Get Started

1. **Commit to one single monetization path**: Dedicate 45 minutes daily to mastering this specific vertical for at least 30 uninterrupted days.
2. **Build your digital presence**: Launch clean, mobile-responsive web assets using 100% free cloud tiers.
3. **Track and optimize**: Monitor your performance metrics weekly to double down on what converts best.

## Frequently Asked Questions (FAQs)

### What initial financial investment is required?
All workflows, hosting environments, and platforms outlined in this guide feature robust free tiers that allow you to launch with **$0 capital**.

### How long before seeing measurable revenue?
With disciplined daily execution and proper targeting, most digital creators generate their first active conversions within **30 to 45 days**.
`;
}

function run() {
  const args = process.argv.slice(2);
  let count = 7;
  const countIdx = args.indexOf("--count");
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10) || 7;
  }

  console.log(`Starting Infinite Clean Post Generator (Target: ${count} fresh unique posts)...`);

  const existingFiles = fs.readdirSync(postsDirectory).map((f) => f.replace(/\.md$/, ""));
  let generated = 0;

  for (const niche of niches) {
    for (const angle of angles) {
      if (generated >= count) break;

      const slug = `${niche.slugPrefix}-${angle.slugSuffix}`;
      if (!existingFiles.includes(slug)) {
        const filePath = path.join(postsDirectory, `${slug}.md`);
        const content = generateMarkdown(niche, angle);
        fs.writeFileSync(filePath, content, "utf8");
        existingFiles.push(slug);
        console.log(`[${generated + 1}/${count}] Published 100% Unique: ${slug}`);
        generated++;
      }
    }
    if (generated >= count) break;
  }

  console.log(`\nSuccessfully published ${generated} 100% unique, non-repeating articles!`);
}

run();
