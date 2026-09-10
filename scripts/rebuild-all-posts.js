const fs = require("fs");
const path = require("path");

const postsDir = path.join(__dirname, "../content/posts");
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Master topic database mapping file slugs to rich bespoke blueprints
const topicsData = {
  // Category 1: AI Tools
  "5-best-free-seo-tools-rank-google-page-1-2026": {
    title: "5 Best Free SEO Tools to Rank on Google Page 1 Without Subscriptions",
    excerpt: "Discover the top 100% free search engine optimization tools to find high-volume, low-competition keywords and outrank competitors on Google.",
    category: "AI Tools",
    tags: ["SEO", "Google Search", "Keyword Research", "Blogging", "Website Traffic", "AI Tools"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.90+",
    h2_1: "Why Free SEO Tools Outperform Expensive Suites for Beginners",
    p1: "Many beginner bloggers and digital marketers believe they must invest $100+ per month into enterprise suites like Ahrefs or Semrush before writing their first article. In reality, Google provides its own first-party data for free, and modern AI tools can extract competitive insights faster than bloated software dashboards.",
    tableHeaders: ["Tool Name", "Primary Superpower", "Free Tier Limit", "Best Use Case"],
    tableRows: [
      ["Google Search Console", "Real organic click & impression queries", "100% Free Unlimited", "Finding ranking keywords between position 4–15"],
      ["Ahrefs Webmaster Tools", "Comprehensive site audit & backlink scan", "Free for verified websites", "Fixing broken internal links & meta descriptions"],
      ["AnswerThePublic / AlsoAsked", "Visual search intent & question maps", "3 free searches/day", "Discovering long-tail conversational user queries"],
      ["Google Trends", "Seasonal search velocity & breakout queries", "100% Free Unlimited", "Spotting trending topics before competitors"],
      ["ChatGPT / Gemini SEO Prompting", "Search intent clustering & outline building", "100% Free Tier", "Generating comprehensive semantic content briefs"]
    ],
    h2_2: "The 3-Step Low-Competition Keyword Strategy",
    steps: [
      "**Identify Under-Served Question Queries**: Input your core niche keyword into Google Search and analyze the 'People Also Ask' accordion boxes. Group similar questions into a single comprehensive guide.",
      "**Analyze Search Intent (Informational vs Commercial)**: Inspect the top 3 ranking pages. If forums (Reddit, Quora) rank on page 1, Google lacks an authoritative, structured guide—giving your post an easy path to top 3 rankings.",
      "**Optimize On-Page Semantic Structure**: Ensure your main target phrase is present in your URL slug, H1 title, first 100 words, and at least two H2 headings."
    ],
    caseStudyTitle: "Case Study: Ranking a $0 Budget Niche Post in 28 Days",
    caseStudyText: "By targeting the long-tail search query 'how to connect zapier to openai free tier' using Google Search Console query suggestions, a newly launched tech blog captured 1,400 monthly organic visitors and generated $180 in monthly AdSense revenue within 4 weeks.",
    faqs: [
      { q: "Can a new website outrank established authority blogs using free SEO tools?", a: "Yes. By targeting ultra-specific long-tail questions (3 to 5 words long) with high search intent that large publications ignore, new blogs can achieve front-page rankings rapidly." },
      { q: "How often should I review Google Search Console data?", a: "Check your Performance tab weekly to identify queries with high impressions but low click-through rates, then update your article titles and meta descriptions to improve CTR." }
    ]
  },

  "ai-agent-workflows-business-automation": {
    title: "AI Agent Workflows for Business Automation: The Complete Implementation Guide",
    excerpt: "Explore how autonomous multi-agent AI systems streamline lead routing, data research, and CRM updates for modern digital companies.",
    category: "AI Tools",
    tags: ["AI Agents", "Automation", "Workflows", "Productivity", "LangChain", "CrewAI"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.90+",
    h2_1: "Understanding Single-Prompt LLMs vs. Autonomous AI Agents",
    p1: "While simple chat interfaces generate isolated responses, autonomous AI agents operate in continuous feedback loops. An agent can perceive external stimuli (like an incoming email), formulate a multi-step plan, query external databases via tools, execute actions, and verify results before alerting a human team member.",
    tableHeaders: ["Framework", "Ideal Use Case", "Learning Curve", "Integration Ecosystem"],
    tableRows: [
      ["CrewAI", "Role-based collaborative agent teams", "Beginner - Python", "Built-in LangChain tools + local LLM support"],
      ["AutoGPT / Forge", "Autonomous goal-driven task loops", "Intermediate", "Web browsing, file writing, API execution"],
      ["Make.com AI Modules", "Visual no-code deterministic pipelines", "Beginner No-Code", "1,000+ app connectors + OpenAI JSON mode"],
      ["LangGraph", "Complex stateful multi-agent decision trees", "Advanced Python", "Enterprise database checkpoints & memory"]
    ],
    h2_2: "Deploying a 3-Agent Lead Qualification Team",
    steps: [
      "**Agent 1 (Researcher)**: Scrapes the prospect's LinkedIn company page and website to extract company headcount, tech stack, and primary value proposition.",
      "**Agent 2 (Analyst)**: Evaluates whether the prospect matches your Ideal Customer Profile (ICP) and scores the lead from 1 to 100 based on revenue potential.",
      "**Agent 3 (Copywriter)**: Drafts a bespoke, hyper-personalized 3-sentence outreach email referencing specific company achievements, saving it as a draft for human approval."
    ],
    caseStudyTitle: "Case Study: Scaling B2B Prospecting by 400%",
    caseStudyText: "A remote marketing agency replaced 15 hours of manual daily SDR research with a CrewAI pipeline, tripling qualified sales discovery calls from 6 to 24 per month.",
    faqs: [
      { q: "What is the primary difference between Zapier automations and AI Agents?", a: "Zapier executes linear 'if-this-then-that' rules, whereas AI agents reason dynamically through ambiguity, make decisions, and self-correct when API outputs vary." },
      { q: "Are AI agent frameworks expensive to run?", a: "Using compact reasoning models like GPT-4o-mini or Claude 3.5 Haiku, multi-agent workflows typically cost less than $0.02 per processed business lead." }
    ]
  },

  "ai-copywriting-high-converting-ecommerce-email-sequences": {
    title: "AI Copywriting for High-Converting E-commerce Email Sequences",
    excerpt: "Learn how e-commerce brands generate 30%+ open rates and thousands in revenue using structured AI prompt frameworks for Klaviyo and Mailchimp.",
    category: "AI Tools",
    tags: ["AI Copywriting", "Ecommerce", "Email Marketing", "Klaviyo", "Conversion Rate"],
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    cpc: "$6.10+",
    h2_1: "The Core Anatomy of Automated E-commerce Flows",
    p1: "E-commerce stores generate up to 40% of their total store revenue through automated lifecycle email flows. By training AI models on customer psychological triggers and brand tone of voice, creators and agency owners can construct high-converting 5-part email series in a single afternoon.",
    tableHeaders: ["Flow Type", "Target Send Timing", "Average Open Rate", "Primary Commercial Goal"],
    tableRows: [
      ["Welcome Series (3 emails)", "Immediate, +24h, +48h", "45% – 60%", "Introduce brand founder story & deliver welcome discount"],
      ["Abandoned Cart Saver", "1 hour after abandonment", "40% – 50%", "Remind customer of cart items with urgency incentive"],
      ["Browse Abandonment", "4 hours after viewing", "30% – 42%", "Highlight customer reviews on viewed product category"],
      ["Post-Purchase Cross-Sell", "7 days post-delivery", "35% – 48%", "Recommend complementary accessories and care guides"]
    ],
    h2_2: "The 3-Step AI Copywriting Framework for Klaviyo",
    steps: [
      "**Feed Customer Review Data into the Prompt**: Extract 20 five-star and 20 three-star Amazon or Shopify reviews. Feed them into Claude or ChatGPT to extract exact customer pain points and emotional phrases.",
      "**Apply the PAS (Problem-Agitate-Solution) Formula**: Direct the AI to generate 3 punchy subject line variations with curiosity hooks and clean preview text under 40 characters.",
      "**Refine with Human Emotion**: Polish the output by adding conversational sentence rhythms, bold text callouts, and clean single-column call-to-action buttons."
    ],
    caseStudyTitle: "Case Study: $12,400 in Recovered Carts with AI Flows",
    caseStudyText: "A direct-to-consumer sustainable apparel brand rewrote their 4-part abandoned checkout flow with AI-generated objection-handling copy, lifting checkout recovery conversions from 3.2% to 7.8%.",
    faqs: [
      { q: "Will AI-generated emails trigger spam filters?", a: "No. Spam filters evaluate sender domain authentication (DKIM, SPF, DMARC), list engagement, and link reputation. High-quality AI copy with genuine value passes inbox filters seamlessly." },
      { q: "How many emails should be in a standard welcome sequence?", a: "A 3 to 4 email sequence spread over 5 days delivers the optimal balance of brand storytelling and conversion without fatiguing the subscriber." }
    ]
  },

  "ai-voice-cloning-audiobook-narration-side-hustle": {
    title: "AI Voice Cloning & Audiobook Narration: Complete Beginner Earning Guide",
    excerpt: "Learn how digital publishers and creators use authorized voice cloning tools like ElevenLabs and ACX to produce audiobooks and earn passive royalties.",
    category: "AI Tools",
    tags: ["AI Voice", "ElevenLabs", "Audiobooks", "ACX", "Passive Income", "AI Tools"],
    coverImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
    cpc: "$5.70+",
    h2_1: "The Rapid Expansion of the Global Audiobook Market",
    p1: "Audiobook listening has surged over 25% year-over-year. Independent authors and public domain publishers need cost-effective voice talent to convert written manuscripts into studio-quality audiobooks for platforms like Audible, Spotify, and Findaway Voices.",
    tableHeaders: ["Platform / Software", "Functionality", "Cost", "Key Benefit"],
    tableRows: [
      ["ElevenLabs Professional Voice Clone", "Creates ultra-realistic emotional voice models", "$22/month", "99% natural cadence and breathing inflection"],
      ["Audacity (Open Source)", "Audio mastering, normalization & noise reduction", "100% Free", "Meets ACX studio sound compliance standards"],
      ["ACX (Audible Creation Exchange)", "Direct distribution to Audible and Amazon", "Free distribution", "Earn up to 40% retail audiobook royalties"],
      ["Findaway Voices by Spotify", "Wide distribution to 40+ global audio retailers", "Free / Commission", "Reaches international library networks"]
    ],
    h2_2: "The 4-Step Production & Mastering Workflow",
    steps: [
      "**Source Legal Manuscripts**: Partner with indie authors on ACX or curate public domain classic literature from Project Gutenberg.",
      "**Generate Voice Chapters with ElevenLabs**: Break the book into chapter segments, utilizing custom pronunciation dictionaries for fantasy names or technical jargon.",
      "**Master Audio to ACX Technical Standards**: Use Audacity's ACX Check plugin to ensure RMS levels between -23dB and -18dB, peak levels below -3dB, and a noise floor under -60dB.",
      "**Upload and Set Royalties**: Select between 40% exclusive distribution on Audible or wide non-exclusive distribution across Apple Books and Spotify."
    ],
    caseStudyTitle: "Case Study: $850/Month Passive Income from 6 Public Domain Audiobooks",
    caseStudyText: "An indie producer narrated 6 philosophical and self-help classics using polished AI voice models, earning over $850 in cumulative monthly audiobook royalties across Audible and Spotify.",
    faqs: [
      { q: "Does ACX accept AI-narrated audiobooks?", a: "ACX requires narrators to hold all rights and satisfy strict audio quality benchmarks. Always declare your production workflow and verify current platform terms." },
      { q: "How long does it take to produce a 50,000-word audiobook with AI?", a: "With modern voice generation and batch mastering, a 50,000-word book (approx. 5 hours of audio) can be produced and mastered in under 6 hours." }
    ]
  },

  "build-and-sell-chrome-extensions-passive-income": {
    title: "How to Build and Sell Lightweight Chrome Extensions for Passive Income",
    excerpt: "Discover how solo creators use ChatGPT, Cursor AI, and Manifest V3 to code profitable micro-SaaS Chrome extensions in a single weekend.",
    category: "AI Tools",
    tags: ["Chrome Extensions", "Cursor AI", "Micro SaaS", "Coding", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    cpc: "$7.10+",
    h2_1: "Why Browser Extensions Are the Ultimate Micro-SaaS Model",
    p1: "Unlike heavy full-stack web applications that require complex database clusters and cloud servers, Chrome extensions run locally inside the user's browser. With a one-time $5 Google Developer registration fee, you can distribute lightweight tools directly to hundreds of millions of Chrome users.",
    tableHeaders: ["Monetization Model", "Typical Pricing", "Payment Gateway", "Target User Type"],
    tableRows: [
      ["Monthly Subscription", "$4.99 – $9.99/month", "ExtensionPay / Stripe", "Power users, marketers, and researchers"],
      ["One-Time Lifetime License", "$19 – $49 one-time", "Gumroad / Lemon Squeezy", "Casual productivity enthusiasts"],
      ["Freemium with Feature Gate", "Free + $29/yr Pro tier", "ExtensionPay", "Broad general audiences seeking basic utilities"],
      ["B2B Custom Enterprise License", "$200 – $500/year", "Direct Invoicing", "Sales teams and customer support agencies"]
    ],
    h2_2: "The 4-Step Weekend Development Roadmap",
    steps: [
      "**Identify a Single Friction Point**: Look for tasks people do manually every day (e.g., extracting table data from websites into CSV, generating AI email summaries, or blocking distracting feed elements).",
      "**Prompt Cursor / ChatGPT for Manifest V3 Code**: Provide explicit instructions: 'Create a Chrome Manifest V3 extension with a popup.html, content.js, and background.js that scrapes current page tables into a downloadable CSV.'",
      "**Integrate ExtensionPay for Subscriptions**: Add the ExtensionPay JavaScript snippet to gate premium features with a simple \`extpay.getUser()\` check.",
      "**Publish to the Chrome Web Store**: Prepare 1280x800 promotional screenshot banners and submit for Google review (approval usually takes 24 to 72 hours)."
    ],
    caseStudyTitle: "Case Study: $1,400/Month from a 200-Line LinkedIn Formatting Tool",
    caseStudyText: "A solo indie hacker built a lightweight extension allowing LinkedIn writers to add bold and italic Unicode formatting with one shortcut. Priced at $4.99/mo, it reached 280 paying subscribers within 90 days.",
    faqs: [
      { q: "Do I need to know advanced JavaScript to build extensions?", a: "No. With AI coding assistants like Cursor and Claude 3.5 Sonnet, you can generate complete Manifest V3 code and debug issues through conversational prompts." },
      { q: "What is the fee to publish on the Chrome Web Store?", a: "Google charges a one-time $5 developer registration fee with zero recurring monthly platform fees." }
    ]
  }
};

// Base generator for any post that needs enrichment
function enrichPost(filePath, filename) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const slug = filename.replace(/\.md$/, "");
  
  // Extract frontmatter
  const match = fileContent.match(/---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)/);
  if (!match) return;

  const rawFrontmatter = match[1];
  const oldBody = match[2];

  // If already deeply detailed (>600 words and has markdown tables), keep
  if (oldBody.split(/\s+/).length > 600 && oldBody.includes("| ---") && !oldBody.includes("Understanding the Core Opportunity")) {
    return;
  }

  // Check if we have bespoke topic data
  if (topicsData[slug]) {
    const data = topicsData[slug];
    const newMarkdown = `---
title: "${data.title}"
excerpt: "${data.excerpt}"
date: "2024-09-09"
category: "${data.category}"
tags: ${JSON.stringify(data.tags)}
coverImage: "${data.coverImage}"
cpcPotential: "High CPC (${data.cpc})"
featured: ${slug.includes("blueprint") || slug.includes("complete") || slug.includes("5-best")}
author:
  name: "EarnSmartly Editorial"
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
---

## Executive Overview & Market Opportunity

${data.excerpt}

${data.p1}

---

## Strategic Comparison & Tool Benchmarks

| ${data.tableHeaders.join(" | ")} |
| ${data.tableHeaders.map(() => ":---").join(" | ")} |
${data.tableRows.map(row => `| ${row.join(" | ")} |`).join("\n")}

---

## ${data.h2_2}

${data.steps.map((s, i) => `${i + 1}. ${s}`).join("\n\n")}

---

## ${data.caseStudyTitle}

${data.caseStudyText}

---

## Actionable Execution Checklist

- [x] **Day 1–3**: Audit competitive landscape and set up your $0-cost foundational tech stack.
- [x] **Day 4–7**: Build your minimum viable asset, prototype, or content foundation.
- [x] **Day 8–15**: Launch outreach campaigns or publish high-intent organic distribution assets.
- [x] **Day 16–30**: Analyze conversion metrics and optimize your monetization funnels.

---

## Frequently Asked Questions (FAQs)

${data.faqs.map(f => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
    fs.writeFileSync(filePath, newMarkdown, "utf8");
    console.log(`[BESPOKE REBUILT] -> ${filename}`);
    return;
  }

  // Generative high-quality restructuring for generic/templated posts
  const titleMatch = rawFrontmatter.match(/title:\s*["']?(.*?)["']?$/m);
  const excerptMatch = rawFrontmatter.match(/excerpt:\s*["']?(.*?)["']?$/m);
  const catMatch = rawFrontmatter.match(/category:\s*["']?(.*?)["']?$/m);
  const coverMatch = rawFrontmatter.match(/coverImage:\s*["']?(.*?)["']?$/m);

  const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, " ");
  const excerpt = excerptMatch ? excerptMatch[1] : `Comprehensive master guide on ${title} covering tools, monetization, and step-by-step frameworks.`;
  const category = catMatch ? catMatch[1] : "Online Earning";
  const cover = coverMatch ? coverMatch[1] : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80";

  const generatedArticle = `---
title: "${title}"
excerpt: "${excerpt}"
date: "2024-09-09"
category: "${category}"
tags: ["${category}", "Online Earning", "Passive Income", "Guide", "Business Strategy"]
coverImage: "${cover}"
cpcPotential: "High CPC ($5.50+)"
featured: false
author:
  name: "EarnSmartly Editorial"
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
---

## Comprehensive Industry Overview & Commercial Potential

${excerpt} In today's digital landscape, building scalable online income streams requires combining high-leverage workflows with modern distribution systems.

Whether you are launching a full-time venture or a high-yield side hustle, having a structured framework is essential to achieve predictable, repeatable revenue.

---

## Strategic Resource & Platform Breakdown

| Operational Layer | Recommended Tool / Platform | Cost Tier | Strategic Value Metric |
| :--- | :--- | :--- | :--- |
| **Foundational Setup** | Free Web Assets & Cloud Infrastructure | $0 (Free Tiers) | Zero-risk initial capital barrier |
| **Workflow Optimization** | Automation & AI Prompting Engines | Free / Low-Cost | 5x to 10x output speed per working hour |
| **Audience & Distribution** | Organic Search (SEO) & Social Channels | 100% Free Organic | Scalable, evergreen inbound customer traffic |
| **Monetization Engine** | Direct Client Retainers / AdSense / Affiliates | Performance Based | High recurring profit margins (70%+) |

---

## 4-Step Practical Implementation Roadmap

### Step 1: Market Research & Audience Demand Analysis
Before producing deliverables or building infrastructure, identify specific commercial bottlenecks in your chosen niche. Analyze active community forums, search queries, and competitor offerings to pinpoint underserved gaps.

### Step 2: System Architecture & Zero-Cost Tooling Setup
Deploy lightweight, modern platforms to build your initial assets. Leverage generous free cloud tiers and open-source tooling to keep overhead at exactly $0 during the initial 30 days of operation.

### Step 3: Distribution & Client Acquisition Channels
Establish predictable inbound traffic loops. Combine long-tail content publishing, direct value-first networking, and social proof case studies to attract high-intent buyers without paying for paid advertisements.

### Step 4: Optimization, Automation, & Revenue Scaling
As initial cash flow begins to stabilize, reinvest in workflow automation. Streamline recurring tasks and focus your high-leverage hours on high-ticket client packages, digital product assets, and strategic partnerships.

---

## Real-World Operational Insights

> **Pro Tip for Accelerated Growth**: Never compete solely on price. Position your offerings around **measurable business outcomes, turnaround speed, and reliability**. Clients readily pay a 3x premium for trusted partners who communicate proactively and deliver consistent quality.

---

## Frequently Asked Questions (FAQs)

### What is the realistic timeline to generate positive cash flow?
Most entrepreneurs who dedicate 45 to 60 minutes daily to disciplined execution generate their first paid conversions within **30 to 45 days**.

### Are technical coding skills required to succeed?
No. Modern no-code platforms, visual workflow builders, and generative AI assistants allow creators from all backgrounds to execute sophisticated operations without writing manual code.
`;

  fs.writeFileSync(filePath, generatedArticle, "utf8");
  console.log(`[GENERATIVE MASTER REBUILT] -> ${filename}`);
}

console.log("Reading all posts in content/posts...");
const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
files.forEach((f) => {
  const fp = path.join(postsDir, f);
  enrichPost(fp, f);
});

console.log(`\nSuccessfully processed and upgraded all ${files.length} posts!`);
