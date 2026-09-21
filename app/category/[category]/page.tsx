import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import { ArrowLeft, Sparkles, FolderOpen, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface CategoryMetaInfo {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  highlights: string[];
}

const categoryDetailsMap: Record<string, CategoryMetaInfo> = {
  "online-earning": {
    name: "Online Earning",
    tagline: "Actionable Blueprints & Digital Income Frameworks",
    description:
      "Explore comprehensive step-by-step tutorials, verified business models, and high-margin side hustle strategies tailored for creators, freelancers, and digital entrepreneurs.",
    longDescription:
      "Whether you are launching a high-ticket freelance service, building and flipping digital assets, negotiating recurring client retainers, or scaling zero-budget internet ventures, our deep-dive guides provide actionable execution frameworks with real-world case studies and $0 startup tool stacks.",
    highlights: [
      "Freelance Retainers",
      "Digital Asset Flipping",
      "Zero-Capital Startups",
      "Remote Income Streams",
      "High-Margin Services",
    ],
  },
  "ai-tools": {
    name: "AI Tools",
    tagline: "Cutting-Edge AI Workflows & Autonomous Automation",
    description:
      "Discover modern artificial intelligence workflows, prompt engineering systems, and automated software pipelines to multiply your daily creative and business output.",
    longDescription:
      "Master generative AI tools for automated video production, voice cloning, e-commerce copywriting, lightweight micro-SaaS extensions, and full-service AI Automation Agencies (AAA). Learn how to eliminate manual bottlenecks and scale digital operations effortlessly.",
    highlights: [
      "AI Automation Agencies",
      "Voice & Video Synthesis",
      "Prompt Engineering",
      "No-Code Workflow Bots",
      "Micro-SaaS & Extensions",
    ],
  },
  "affiliate-marketing": {
    name: "Affiliate Marketing",
    tagline: "High-Yield Commission Models & Passive Royalties",
    description:
      "Master high-ticket affiliate programs, recurring SaaS referral funnels, and organic review strategies that turn traffic into reliable monthly commissions.",
    longDescription:
      "Learn how to build high-converting product comparison hubs, capitalize on the Amazon Influencer Program for passive onsite video review royalties, negotiate direct CPA payouts, and construct automated lead generation engines with proven conversion frameworks.",
    highlights: [
      "Amazon Influencer Program",
      "High-Ticket SaaS Referrals",
      "CPA Lead Generation",
      "Review Comparison Hubs",
      "Recurring Passive Royalties",
    ],
  },
  "blogging": {
    name: "Blogging & AdSense",
    tagline: "Niche Authority Sites & Programmatic Ad Revenue",
    description:
      "In-depth masterclasses on building high-traffic blogs, securing fast Google AdSense approval, technical SEO optimization, and zero-cost cloud deployments.",
    longDescription:
      "From finding untapped high-CPC keywords and structuring semantic on-page content to optimizing Core Web Vitals on zero-cost cloud Jamstack hosts (Next.js + Vercel), discover everything required to scale organic search impressions into consistent monthly ad revenue.",
    highlights: [
      "Google AdSense Approval",
      "High-CPC Keyword Research",
      "Technical SEO Auditing",
      "Zero-Cost Cloud Hosting",
      "Core Web Vitals Tuning",
    ],
  },
  "crypto-fintech": {
    name: "Crypto & FinTech",
    tagline: "Global Digital Payments & Decentralized Finance",
    description:
      "Navigating modern fintech rails, multi-currency invoicing, cross-border payment gateways, and emerging digital asset earning opportunities securely.",
    longDescription:
      "Explore practical guides on setting up international merchant accounts, managing multi-currency cash flows, leveraging secure digital wallets, and understanding Web3 infrastructure designed specifically for remote contractors and global digital creators.",
    highlights: [
      "Global Payment Gateways",
      "Multi-Currency Invoicing",
      "Remote Banking Rails",
      "Digital Wallet Security",
      "Web3 Foundations",
    ],
  },
  "freelancing": {
    name: "Freelancing",
    tagline: "High-Income Remote Skills & Agency Growth",
    description:
      "Transform your marketable technical and creative skills into premium client retainers, high-converting Upwork/Fiverr gigs, and scalable digital agencies.",
    longDescription:
      "Discover client acquisition blueprints, value-based pricing models, high-converting proposal templates, and step-by-step systems to transition from a single freelancer trading time for money into a high-leverage digital service business.",
    highlights: [
      "High-Ticket Retainers",
      "Upwork & Fiverr Optimization",
      "Value-Based Proposals",
      "Client Outreach Systems",
      "Agency Scaling Models",
    ],
  },
};

function getCategoryInfo(slug: string): CategoryMetaInfo {
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  if (categoryDetailsMap[normalized]) {
    return categoryDetailsMap[normalized];
  }

  // Format dynamic fallback
  const categories = getAllCategories();
  const matched = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === normalized
  );

  const formattedName =
    matched ||
    normalized
      .split("-")
      .map((word) => {
        if (word === "ai") return "AI";
        if (word === "seo") return "SEO";
        if (word === "saas") return "SaaS";
        if (word === "cpa") return "CPA";
        if (word === "kdp") return "KDP";
        if (word === "vpn") return "VPN";
        if (word === "adsense") return "AdSense";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

  return {
    name: formattedName,
    tagline: `Curated Guides & High-Impact Tutorials`,
    description: `Discover comprehensive guides, proven strategies, and monetized tutorials in the ${formattedName} niche.`,
    longDescription: `Explore in-depth case studies, actionable workflows, zero-budget blueprints, and expert recommendations designed to help you master ${formattedName} and build sustainable online revenue streams.`,
    highlights: ["Step-by-Step Blueprints", "Case Studies", "Zero-Budget Tools", "Monetization Models"],
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const info = getCategoryInfo(params.category);

  return {
    title: `${info.name} - Actionable Guides & Earning Blueprints`,
    description: `${info.description} ${info.longDescription.slice(0, 120)}...`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getPostsByCategory(params.category);
  const info = getCategoryInfo(params.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all articles</span>
        </Link>
      </div>

      {/* Rich Category Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/40 p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm mb-10">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Category Archive</span>
            </div>
            <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{posts.length} In-Depth Guides</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {info.name}
          </h1>

          <p className="text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400">
            {info.tagline}
          </p>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {info.description}
          </p>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
            {info.longDescription}
          </p>

          {/* Subtopic Highlights */}
          {info.highlights && info.highlights.length > 0 && (
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 mr-1 flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Featured Topics:
              </span>
              {info.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200/80 dark:border-slate-700 shadow-xs"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Top Banner */}
      <AdBanner slot="category-top-banner" format="horizontal" />

      {/* Posts List */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800">
          <p className="text-base text-gray-600 dark:text-gray-400">
            No articles found in this category yet.
          </p>
          <Link
            href="/blog"
            className="inline-block mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
          >
            Browse all posts
          </Link>
        </div>
      )}
    </div>
  );
}
