const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

const uniqueImageLibrary = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"
];

const niches = [
  {
    name: "AI Automation Agency (AAA)",
    slugPrefix: "ai-automation-agency",
    category: "AI Tools",
    tags: ["AI Tools", "Agency", "Automation", "Zapier", "Make.com"],
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
    cpc: "$7.20+",
    coreProblem: "busy homeowners who want rental revenue but lack time to manage guest check-ins and cleaning schedules",
    solution: "full-service digital co-hosting handling listings, dynamic pricing, and guest communication",
    businessModel: "taking a 15% to 25% share of gross monthly booking revenue"
  },
  {
    name: "Remote Technical Writing for Web3 & Tech Companies",
    slugPrefix: "remote-technical-writing-web3-tech",
    category: "Online Earning",
    tags: ["Technical Writing", "Freelancing", "Documentation", "Web3", "Remote Work"],
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
    cpc: "$5.20+",
    coreProblem: "producing daily engaging vertical video content without camera gear or studio lighting",
    solution: "using AI script generators, natural voiceovers, and automated kinetic captions",
    businessModel: "monetizing through YouTube Shorts Fund, brand sponsorships, and affiliate links"
  }
];

const angles = [
  {
    titleTemplate: "{name}: The Master Operational Blueprint",
    slugSuffix: "step-by-step-blueprint",
    summaryTemplate: "A complete master blueprint explaining how to capitalize on {name} with zero upfront budget.",
    h2_1: "Foundational Economics & Market Demand",
    h2_2: "The End-to-End Implementation Framework",
    h2_3: "Scaling & Workflow Automation Mechanics"
  },
  {
    titleTemplate: "How Beginners Land $1,000/Month with {name}",
    slugSuffix: "beginners-1000-month-guide",
    summaryTemplate: "Discover how newcomers are generating consistent $1,000+ monthly revenue through {name}.",
    h2_1: "Why This Model is Uniquely Tailored for Newcomers",
    h2_2: "Zero-Cost Tooling & Infrastructure Setup",
    h2_3: "Fast-Tracking Your First Paying Client"
  },
  {
    titleTemplate: "Top 5 Strategies to Scale {name} Effectively",
    slugSuffix: "top-5-scaling-strategies",
    summaryTemplate: "Explore the most effective, proven methods to scale your operations and profit margins in {name}.",
    h2_1: "Streamlining Delivery & Capacity Optimization",
    h2_2: "High-Ticket Packaging & Value Pricing",
    h2_3: "Maximizing Long-Term Customer Lifetime Value"
  },
  {
    titleTemplate: "Common Pitfalls to Avoid When Launching {name}",
    slugSuffix: "mistakes-to-avoid-guide",
    summaryTemplate: "Avoid costly missteps and fast-track your success with these critical operational lessons in {name}.",
    h2_1: "Pitfall 1: Underpricing and Low-Margin Positioning",
    h2_2: "Pitfall 2: Neglecting Quality Control & Client Communication",
    h2_3: "The Sustainable Growth Checklist"
  }
];

function generateMarkdown(niche, angle, imageIndex) {
  const dateStr = "2024-09-09";
  const title = angle.titleTemplate.replace("{name}", niche.name);
  const summary = angle.summaryTemplate.replace("{name}", niche.name);
  const selectedImage = uniqueImageLibrary[imageIndex % uniqueImageLibrary.length];

  return `---
title: "${title}"
excerpt: "${summary}"
date: "${dateStr}"
category: "${niche.category}"
tags: ${JSON.stringify(niche.tags)}
coverImage: "${selectedImage}"
cpcPotential: "High CPC (${niche.cpc})"
featured: false
author:
  name: "EarnSmartly Editorial"
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
---

## Executive Overview & Commercial Opportunity

${summary} In the modern digital economy, solving ${niche.coreProblem} represents one of the highest-leverage opportunities for online entrepreneurs.

By positioning yourself as an expert problem-solver rather than a commoditized service provider, you unlock substantial commercial demand.

---

## Strategic Resource & Platform Breakdown

| Operational Layer | Recommended Solution | Cost Tier | Strategic Value Metric |
| :--- | :--- | :--- | :--- |
| **Core Delivery Engine** | ${niche.solution} | $0 (Free Tiers) | Rapid zero-capital execution |
| **Workflow Efficiency** | Automation & AI Orchestration | Free / Low-Cost | 5x to 10x output speed per working hour |
| **Client Acquisition** | Organic Discovery & Value-First Outreach | 100% Free | Predictable pipeline of high-intent buyers |
| **Revenue Model** | ${niche.businessModel} | High-Margin | Consistent monthly recurring cash flow |

---

## ${angle.h2_1}

The foundation of this model rests upon ${niche.solution}. Instead of competing in saturated, low-margin spaces, targeting specific business inefficiencies unlocks immediate commercial demand.

By implementing systematic workflows and establishing clear client communication, creators build sustainable competitive moats.

---

## ${angle.h2_2}

By implementing a structured approach with ${niche.businessModel}, publishers and creators establish predictable cash flow:
1. **Define Core Deliverables**: Outline exact service boundaries and measurable performance benchmarks.
2. **Deploy Free Tooling**: Leverage cloud tiers and open-source utilities to maintain 100% net profit margins.
3. **Execute Structured Delivery**: Provide clear progress updates and rapid turnarounds to secure recurring client retainers.

---

## ${angle.h2_3}

As your system matures, reinvest in automation and distribution. Combining organic search visibility, structured landing pages, and automated workflows allows you to scale revenue without linearly increasing work hours.

---

## Actionable Execution Checklist

- [x] **Week 1**: Master the foundational tool stack and assemble 3 practical demonstration assets.
- [x] **Week 2**: Initiate targeted outreach or publish high-intent content across organic channels.
- [x] **Week 3**: Onboard initial test clients and gather verified performance case studies.
- [x] **Week 4**: Reinvest cash flow into automated distribution and recurring client retainers.

---

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
        const content = generateMarkdown(niche, angle, existingFiles.length + generated);
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
