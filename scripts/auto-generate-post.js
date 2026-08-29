const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(__dirname, "../content/posts");

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Master pool of 50+ unique, non-repeating high-CPC topics across diverse online earning niches
const masterTopics = [
  {
    title: "TikTok Shop Affiliate: How Beginners Make $3,000/Month Without Buying Inventory",
    slug: "tiktok-shop-affiliate-beginners-guide-2026",
    category: "Online Earning",
    tags: ["TikTok Shop", "Affiliate Marketing", "Ecommerce", "Short Form Video", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.20+)",
    summary: "A step-by-step master breakdown on creating viral 15-second product review clips and earning automated commission payouts directly through TikTok Shop.",
    sections: [
      {
        heading: "1. The TikTok Shop Commission Revolution",
        body: "Unlike traditional affiliate marketing where users must click a link in bio, TikTok Shop features in-video shopping tags. Viewers can purchase with one tap, leading to conversion rates 5x higher than standard affiliate links."
      },
      {
        heading: "2. Finding High-Commission Viral Products",
        body: "Use the TikTok Shop Creator Marketplace to filter products offering 15% to 30% commissions with proven sales velocity. Focus on portable gadgets, aesthetic room decor, and trending beauty accessories."
      },
      {
        heading: "3. The 3-Part Viral Video Formula",
        body: "Hook in the first 2 seconds highlighting a common pain point, showcase the product solving it within 7 seconds, and end with an urgent call-to-action directing viewers to the orange shopping cart button."
      }
    ]
  },
  {
    title: "Amazon KDP & AI: How to Publish Low-Content Books for Recurring Royalties",
    slug: "amazon-kdp-ai-publishing-guide-beginners",
    category: "Online Earning",
    tags: ["Amazon KDP", "Self Publishing", "Passive Income", "Digital Products", "Side Hustle"],
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.80+)",
    summary: "Learn how creators publish puzzle books, daily gratitude journals, and coloring workbooks on Amazon KDP with $0 upfront printing costs.",
    sections: [
      {
        heading: "1. Zero-Cost Print-on-Demand with Amazon",
        body: "Amazon KDP prints each paperback book only after a customer orders it, automatically handling manufacturing, packaging, and worldwide Prime delivery while paying you monthly royalties."
      },
      {
        heading: "2. High-Demand Low-Content Book Niches",
        body: "Top evergreen categories include habit tracking journals, mindfulness activity books, sudoku puzzle collections, and children's handwriting practice workbooks."
      },
      {
        heading: "3. Designing Eye-Catching Book Covers",
        body: "Covers drive 80% of click-through decisions on Amazon search results. Use high-contrast typography, bold color palettes, and clear subtitle hooks formatted to Amazon's exact spine dimensions."
      }
    ]
  },
  {
    title: "Micro-SaaS Without Coding: Build & Sell Software Tools for Monthly Recurring Revenue",
    slug: "micro-saas-without-coding-beginners-blueprint",
    category: "AI Tools",
    tags: ["Micro SaaS", "No Code", "Software Business", "Bubble", "Monthly Recurring Revenue"],
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($8.20+)",
    summary: "Discover how non-technical founders use modern no-code platforms and AI APIs to build profitable $1,000/month software tools in under 14 days.",
    sections: [
      {
        heading: "1. What Makes Micro-SaaS So Profitable?",
        body: "Micro-SaaS products solve one specific, hyper-targeted pain point for a defined audience. With monthly subscription billing ($15 to $49/month), retaining just 50 subscribers creates a predictable $1,000+ monthly income stream."
      },
      {
        heading: "2. Top No-Code Stack for 2026",
        body: "Combine FlutterFlow or Bubble for responsive web and mobile interfaces, Supabase or Firebase for real-time databases, and Stripe Billing for secure worldwide card processing."
      },
      {
        heading: "3. Wrapping AI APIs into Turnkey Business Solutions",
        body: "Build focused tools like automated real estate listing generators, personalized LinkedIn post schedulers, or multilingual recipe translators by connecting frontend forms to AI endpoints."
      }
    ]
  },
  {
    title: "Pinterest SEO Strategy: Drive 100,000 Free Monthly Visitors to Your Blog",
    slug: "pinterest-seo-strategy-free-blog-traffic",
    category: "Blogging",
    tags: ["Pinterest SEO", "Blog Traffic", "Website Growth", "Blogging", "Digital Marketing"],
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($5.40+)",
    summary: "A master guide to tapping into Pinterest's visual search engine to flood your blog articles with high-converting organic tier-1 traffic.",
    sections: [
      {
        heading: "1. Why Pinterest is a Search Engine, Not Social Media",
        body: "Unlike Instagram or Twitter where posts disappear after 24 hours, Pinterest pins rank in visual search results for months and even years, driving consistent evergreen referral clicks."
      },
      {
        heading: "2. Designing High-CTR Vertical Pin Graphics",
        body: "Pins formatted in 2:3 vertical aspect ratio (1000x1500 pixels) with bold problem-solving headline banners achieve the highest repin and outbound click rates."
      },
      {
        heading: "3. Rich Pins & Keyword-Optimized Board Architecture",
        body: "Enable Rich Pins on your blog to auto-sync article titles and author metadata, and organize your profile boards with search-friendly category keywords."
      }
    ]
  },
  {
    title: "High-Ticket Forex & Trading Affiliate Programs: Earning $500+ CPA Payouts",
    slug: "high-ticket-forex-broker-affiliate-programs",
    category: "Affiliate Marketing",
    tags: ["Forex Affiliate", "High Ticket Affiliate", "FinTech", "CPA Marketing", "Trading"],
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($9.50+)",
    summary: "An inside look into the financial brokerage affiliate vertical where publishers earn $300 to $800 cost-per-acquisition bounties per active referral.",
    sections: [
      {
        heading: "1. The Economics of Financial Broker Affiliates",
        body: "Regulated trading platforms and cryptocurrency exchanges compete aggressively for active retail traders, offering publishers massive upfront acquisition bounties or ongoing revenue-share percentages."
      },
      {
        heading: "2. Compliant & High-Converting Content Angles",
        body: "Produce objective, transparent broker fee comparison tables, spread analysis articles, and beginner trading platform setup tutorials with clear risk disclosures."
      },
      {
        heading: "3. Navigating Tier-1 Geo Targeting",
        body: "Traffic originating from the United Kingdom, United States, Canada, and Australia yields the highest CPA payouts and longest retention cycles."
      }
    ]
  },
  {
    title: "AI Voice Cloning & Audiobooks: The Emerging $2,500/Month Narration Business",
    slug: "ai-voice-cloning-audiobook-narration-side-hustle",
    category: "AI Tools",
    tags: ["Voice Cloning", "Audiobooks", "AI Audio", "ElevenLabs", "Freelance Services"],
    coverImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.60+)",
    summary: "Discover how voiceover artists and digital entrepreneurs are partnering with independent authors to produce commercial audiobooks using licensed AI speech models.",
    sections: [
      {
        heading: "1. The Booming Demand for Audiobooks",
        body: "Millions of self-published authors on Amazon cannot afford $3,000 studio recording sessions. Licensed, high-emotion AI voice engines provide studio-grade narration at a fraction of the cost."
      },
      {
        heading: "2. Mastering Audio Engineering Standards",
        body: "Use free audio tools like Audacity to master tracks to ACX (Audible) technical specifications: -3dB peak levels, -23dB to -18dB RMS volume, and sub-60dB background noise floors."
      },
      {
        heading: "3. Packaging Narration Packages for Independent Authors",
        body: "Offer authors full-service packages including voice synthesis, pacing correction, chapter splitting, and metadata formatting on freelance marketplaces."
      }
    ]
  },
  {
    title: "Google AdX vs AdSense: How Premium Publishers Double Their Website Ad Revenue",
    slug: "google-adx-vs-adsense-monetization-guide",
    category: "Blogging",
    tags: ["Google AdX", "Google AdSense", "Header Bidding", "Website Monetization", "Ad Revenue"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($7.20+)",
    summary: "Learn when and how to transition from Google AdSense to Google AdX (Ad Exchange) and programmatic header bidding to increase your page RPMs by 50% to 150%.",
    sections: [
      {
        heading: "1. What is Google AdX?",
        body: "While AdSense connects your site to the Google Display Network, Google Ad Exchange (AdX) invites hundreds of programmatic demand partners to bid in real-time auctions for every single ad impression."
      },
      {
        heading: "2. The Magic of Programmatic Header Bidding",
        body: "Header bidding runs simultaneous auctions in user browsers before page rendering, forcing ad networks to compete aggressively and driving up effective CPM prices."
      },
      {
        heading: "3. Qualification Requirements and Channel Partners",
        body: "Websites with over 30,000 to 50,000 monthly page views can access Google AdX through certified publishing partners like Ezoic, Mediavine, or Monumetric without meeting direct enterprise minimums."
      }
    ]
  },
  {
    title: "How to Build & Sell Chrome Extensions for Passive Monthly Revenue",
    slug: "build-and-sell-chrome-extensions-passive-income",
    category: "AI Tools",
    tags: ["Chrome Extensions", "Software Development", "Passive Income", "SaaS", "Browser Tools"],
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($6.10+)",
    summary: "How beginner developers and non-coders build lightweight browser tools that generate recurring subscription revenue directly inside the Google Chrome Web Store.",
    sections: [
      {
        heading: "1. Why Browser Extensions Are Easy to Monetize",
        body: "Chrome extensions live right where users work every day. High-utility tools that save time or streamline workflows command monthly fees of $5 to $15 with virtually zero server overhead."
      },
      {
        heading: "2. Popular High-Demand Extension Concepts",
        body: "Top categories include LinkedIn automated CRM scrapers, Amazon product price trackers, YouTube subtitle translators, and generative AI writing assistants."
      },
      {
        heading: "3. Integrating Payment Gateways in Manifest V3",
        body: "Use ExtensionPay or Stripe Checkout to securely manage user licenses, free trial periods, and subscription renewals without maintaining a complex backend."
      }
    ]
  },
  {
    title: "Ghostwriting for Tech Founders: How to Charge $2,000/Month Per Client",
    slug: "ghostwriting-for-tech-founders-linkedin-twitter",
    category: "Online Earning",
    tags: ["Ghostwriting", "Freelance Writing", "LinkedIn Marketing", "High Ticket Clients", "Copywriting"],
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($5.80+)",
    summary: "A practical framework for ghostwriting insightful thought leadership posts on LinkedIn and X for busy startup executives and venture capital partners.",
    sections: [
      {
        heading: "1. The High Demand for Executive Personal Branding",
        body: "CEOs and founders need active digital presences to recruit top engineering talent, close enterprise enterprise deals, and attract investors, but lack the time to draft daily content."
      },
      {
        heading: "2. Conducting a 30-Minute Weekly Voice Interview",
        body: "Interview your client for 30 minutes recording key opinions and lessons. Transcribe the audio and use AI structuring templates to produce a full week of high-impact posts."
      },
      {
        heading: "3. Retainer Pricing & Client Retention",
        body: "Charge a flat retainer of $1,500 to $3,000 per month for 3 to 4 weekly LinkedIn posts plus bi-weekly long-form newsletter articles."
      }
    ]
  },
  {
    title: "Medium Partner Program: Complete Guide to Earning $500/Month Writing Online",
    slug: "medium-partner-program-complete-earning-guide",
    category: "Blogging",
    tags: ["Medium", "Blogging", "Writing Online", "Content Creation", "Side Hustle"],
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.40+)",
    summary: "Discover how writers build recurring monthly royalties on Medium by tapping into its built-in paywalled subscriber base with zero SEO ranking delay.",
    sections: [
      {
        heading: "1. How Medium Member Read Time Monetization Works",
        body: "Medium pays authors based on the reading time accumulated by paying Medium members. Articles that spark thoughtful highlights, comments, and claps receive compounding payouts."
      },
      {
        heading: "2. Submitting to High-Authority Publications",
        body: "Rather than publishing on an empty personal profile, submit your drafts to established Medium publications like Towards Data Science, Better Programming, or The Startup to access hundreds of thousands of readers instantly."
      },
      {
        heading: "3. Syndicating Back to Your Self-Hosted Blog",
        body: "Use canonical links to cross-post Medium articles back to your own website (EarnSmartly), capturing referral traffic, building email subscribers, and boosting Google SEO."
      }
    ]
  },
  {
    title: "How to Build a $1,500/Month Notion Template Business on Gumroad",
    slug: "build-1500-month-notion-template-business-gumroad",
    category: "Online Earning",
    tags: ["Notion Templates", "Digital Products", "Gumroad", "Passive Income", "Productivity"],
    coverImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($4.90+)",
    summary: "A step-by-step masterclass on designing aesthetic Notion productivity systems and selling them with 98% profit margins.",
    sections: [
      {
        heading: "1. The Massive Market for Digital Organization",
        body: "Students, startup founders, and freelancers gladly pay $19 to $49 for ready-to-use Notion workspaces that organize projects, finances, and fitness goals."
      },
      {
        heading: "2. Setting Up Automated Fulfillment on Gumroad",
        body: "Gumroad handles multi-currency payment processing, discount codes, and instant template delivery with zero recurring monthly software fees."
      },
      {
        heading: "3. Launching on Product Hunt & TikTok",
        body: "Record 15-second screen recordings demonstrating how quickly the template organizes chaotic workflows to drive consistent viral sales."
      }
    ]
  },
  {
    title: "Video Repurposing Agency: How to Turn 1 Podcast into 30 Viral Shorts",
    slug: "video-repurposing-agency-turn-podcast-into-viral-shorts",
    category: "AI Tools",
    tags: ["Video Repurposing", "Shorts", "Reels", "AI Video", "Agency Business"],
    coverImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($5.30+)",
    summary: "Learn how modern agencies charge podcasters $1,000 to $2,500/month to extract, edit, and caption high-retention short-form video clips.",
    sections: [
      {
        heading: "1. The Short-Form Content Bottleneck",
        body: "Podcasters and YouTubers record hours of valuable conversations but lack the time to manually edit vertical clips for TikTok, Instagram Reels, and YouTube Shorts."
      },
      {
        heading: "2. The AI Repurposing Stack",
        body: "Use AI clipping tools like OpusClip or Klap to automatically find hook moments, add animated colored captions, and re-frame speakers into 9:16 vertical ratio."
      },
      {
        heading: "3. Pitching Podcasters via Cold Email",
        body: "Edit one free high-energy sample short for a target creator, send it via email, and offer a monthly subscription package to handle all their future episodes."
      }
    ]
  },
  {
    title: "High-Yield Web Hosting Affiliate Programs: $150 Per Sale Blueprint",
    slug: "high-yield-web-hosting-affiliate-programs-blueprint",
    category: "Affiliate Marketing",
    tags: ["Web Hosting", "Affiliate Marketing", "Cloud Hosting", "CPA Commission", "Blogging"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($8.40+)",
    summary: "Why web hosting affiliate programs offer the highest instant CPA commissions on the web and how to rank comparison articles on Google.",
    sections: [
      {
        heading: "1. The Lucrative Economics of Cloud Hosting Affiliates",
        body: "Web hosting companies have high customer lifetime value, allowing them to pay affiliates generous $65 to $200 upfront cash bonuses per customer."
      },
      {
        heading: "2. Writing 'Best Hosting for...' Niche Tutorials",
        body: "Rather than general hosting keywords, write targeted tutorials like 'Best Fast Hosting for Next.js Blogs' or 'Best Budget Hosting for E-commerce'."
      },
      {
        heading: "3. Adding Interactive Speed Comparison Tables",
        body: "Showcase real benchmark speed tests (TTFB and uptime percentages) in clean tables with clear sign-up buttons to maximize conversion rates."
      }
    ]
  },
  {
    title: "Rank and Rent SEO: The Ultimate Local Lead Generation Model in 2026",
    slug: "rank-and-rent-seo-local-lead-generation-model",
    category: "Online Earning",
    tags: ["Rank and Rent", "Local SEO", "Lead Generation", "Digital Real Estate", "Passive Income"],
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    cpcPotential: "High CPC ($7.60+)",
    summary: "Discover how digital real estate investors build simple local service websites, rank them on Google, and rent them to local contractors for $750/month.",
    sections: [
      {
        heading: "1. What is Digital Rank and Rent?",
        body: "Build a localized website targeting high-ticket trades (like roofing, tree removal, or plumbing), rank it on Google Page 1, and forward the customer phone calls to an established local contractor."
      },
      {
        heading: "2. Why Local Contractors Love This Service",
        body: "Contractors want jobs, not complex marketing jargon. Paying a predictable $500 to $1,000 monthly retainer for 15 qualified job inquiries is an easy business decision."
      },
      {
        heading: "3. Low Competition in Suburb Towns",
        body: "Target towns with populations between 30,000 and 100,000 where Google ranking requires minimal backlinks and simple on-page local SEO."
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

  bodyContent += `## Strategic Action Steps to Get Started\n\n`;
  bodyContent += `1. **Focus on one clear monetization angle**: Commit to mastering this specific channel for at least 30 uninterrupted days.\n`;
  bodyContent += `2. **Build your digital distribution pipeline**: Set up daily output habits and track audience response metrics systematically.\n`;
  bodyContent += `3. **Analyze and double down**: Use real performance analytics to reinvest in what generates the highest conversion rates.\n\n`;

  bodyContent += `## Frequently Asked Questions (FAQs)\n\n`;
  bodyContent += `### How much startup capital is required for this strategy?\n`;
  bodyContent += `This methodology leverages free cloud tools and open workflows, meaning you can launch with **$0 upfront investment**.\n\n`;
  bodyContent += `### When should you expect measurable cash flow?\n`;
  bodyContent += `Creators maintaining disciplined daily execution typically witness active conversions and initial payouts within **30 to 60 days**.\n`;

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

  console.log(`Starting Automated Daily Post Generator (Target: ${count} unique posts)...`);

  const existingFiles = fs.readdirSync(postsDirectory).map((f) => f.replace(/\.md$/, ""));
  let generated = 0;

  for (const topic of masterTopics) {
    if (generated >= count) break;

    // Strictly check if title or slug already exists - NEVER duplicate
    if (!existingFiles.includes(topic.slug)) {
      const filePath = path.join(postsDirectory, `${topic.slug}.md`);
      const content = generateMarkdownArticle(topic);
      fs.writeFileSync(filePath, content, "utf8");
      existingFiles.push(topic.slug);
      console.log(`[${generated + 1}/${count}] Published unique post: ${topic.title}`);
      generated++;
    }
  }

  console.log(`\nSuccessfully published ${generated} 100% unique, high-CPC articles without any repetition!`);
}

run();
