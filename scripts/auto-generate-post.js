const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

// Ensure directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Curated high-CPC niche topics for automated publishing queue
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
        body: "Artificial intelligence has democratized digital content production. Tools like ChatGPT, Claude, and Gemini allow freelancers and marketers to craft long-form blog posts, email sequences, and ad copy in minutes. By offering copywriting services on Upwork, Fiverr, or directly to local businesses, digital creators can earn between $30 and $100 per article."
      },
      {
        heading: "2. Generative Image & Graphic Design Monetization",
        body: "With generative models like Midjourney, Flux, and Ideogram, anyone can create print-on-demand designs, stock imagery, wall art, and custom YouTube thumbnails. Platforms like Etsy and Redbubble allow you to upload designs once and earn automated royalty payouts each time a product sells."
      },
      {
        heading: "3. Automated Video Editing and Faceless Channels",
        body: "Faceless YouTube and TikTok channels are generating thousands of dollars per month through programmatic ad revenue and sponsorships. Using AI video generators like CapCut AI, InVideo, and ElevenLabs for voiceovers, you can produce daily short-form videos with zero video production equipment."
      },
      {
        heading: "4. Building Custom AI Chatbots for Local Businesses",
        body: "Local businesses (such as real estate agencies, dentists, and restaurants) lose thousands of leads due to slow customer support. By configuring no-code AI customer service assistants using tools like Chatbase or Voiceflow, you can charge businesses a $300 setup fee plus $50/month recurring maintenance retainer."
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
        body: "The secret to ranking a brand new blog fast is targeting long-tail informational queries with zero to low competition. Instead of targeting 'make money online', target specific search queries like 'best free ai prompt generators for real estate agents'. These queries have clear buyer intent and allow you to rank on Google Page 1 within weeks."
      },
      {
        heading: "2. Setting Up 100% Free Cloud Hosting on Vercel or Netlify",
        body: "Modern static websites built with Next.js or Astro cost $0.00 to host. Unlike traditional shared hosting that slows down and costs $10/month, static sites hosted on global edge CDNs load in under 200 milliseconds, securing 100/100 Google Lighthouse speed scores which directly improves SEO rankings."
      },
      {
        heading: "3. Fast-Tracking Google AdSense Approval in 14 Days",
        body: "To get approved on your first submission: ensure you have at least 10 high-quality articles (1000+ words each), clear navigation, and essential trust pages (About Us, Contact Us, Privacy Policy, Terms, and Disclaimer). Avoid copyright images and ensure clean mobile responsiveness."
      },
      {
        heading: "4. Layering Affiliate Offers for 5x Revenue",
        body: "Do not rely on AdSense alone. By joining high-paying affiliate networks like Amazon Associates, Impact, and ShareASale, you can recommend tools you discuss in your guides and earn recurring 20% to 50% commission checks."
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
        body: "Software-as-a-service (SaaS) products are the holy grail of affiliate marketing because they offer monthly recurring lifetime revenue. Platforms in email marketing, CRM, and AI writing pay between 20% and 40% every single month for as long as your referral remains subscribed."
      },
      {
        heading: "2. Web Hosting & Developer Tool Networks",
        body: "Web hosts and cloud infrastructure providers offer massive upfront CPA (cost per acquisition) payouts ranging from $50 to $150 per verified signup. Writing comparison guides like 'Host A vs Host B' is one of the highest-converting formats online."
      },
      {
        heading: "3. Digital Education and Online Courses",
        body: "Educational platforms and skill-building bootcamps often share 30% to 50% of tuition fees with affiliates. Recommending verified learning resources for high-income skills like coding, prompt engineering, and UI/UX design yields great conversions."
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
        body: "Google AdSense policy strictly requires webmasters to establish clear identity and transparency. You must have: About Us (explaining who runs the site), Contact Us (with email or interactive form), Privacy Policy (mentioning Google Cookie and AdSense disclosure), Terms of Service, and Disclaimer."
      },
      {
        heading: "2. Content Depth and Originality Requirements",
        body: "Google rejects sites with 'Low Value Content' or scraped articles. Each article should be well-structured with H2/H3 subheadings, bullet points, actionable takeaways, and a minimum of 800 to 1,500 words of original, comprehensive information."
      },
      {
        heading: "3. Clean Site Architecture & Fast Loading Speeds",
        body: "Your site must have an intuitive navigation bar, category pages, and zero broken links. Sites that load under 2 seconds on mobile devices experience significantly higher approval rates."
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
        heading: "1. Choosing Profitable Evergreen Niches",
        body: "Niches like Personal Finance, Tech Reviews, Luxury Lifestyle, and Business Case Studies command the highest CPMs ($10 to $30 per 1,000 views) compared to generic gaming or comedy clips ($1 to $2 CPM)."
      },
      {
        heading: "2. Automated AI Production Pipeline",
        body: "Use AI models for viral hook scripting, ElevenLabs for studio-grade narration, and automated B-roll assembly tools like CapCut or Premiere templates to produce 3 to 5 videos per week efficiently."
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
        body: "Prompt engineering is the art and science of structuring inputs for large language models to produce deterministic, accurate, and production-ready outputs for business applications."
      },
      {
        heading: "2. High-Demand Freelance Services",
        body: "Services in highest demand include: custom AI system prompt design, automated customer support script templates, AI SEO content prompt chains, and automated marketing copy workflows."
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

  const fileContent = `---
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

  return fileContent;
}

function run() {
  console.log("Starting Automated Daily Post Generator...");

  // Find a topic that doesn't exist yet
  const existingFiles = fs.readdirSync(postsDirectory).map(f => f.replace(/\.md$/, ""));
  
  let selectedTopic = topicQueue.find(t => !existingFiles.includes(t.slug));

  if (!selectedTopic) {
    // Generate a fresh dynamic topic with timestamp if all queue items exist
    const randomTopic = topicQueue[Math.floor(Math.random() * topicQueue.length)];
    const uniqueSlug = `${randomTopic.slug}-${Date.now().toString().slice(-4)}`;
    selectedTopic = {
      ...randomTopic,
      slug: uniqueSlug,
      title: `${randomTopic.title} (Updated Edition)`,
    };
  }

  const filePath = path.join(postsDirectory, `${selectedTopic.slug}.md`);
  const content = generateMarkdownArticle(selectedTopic);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Successfully generated new daily post: ${filePath}`);
}

run();
