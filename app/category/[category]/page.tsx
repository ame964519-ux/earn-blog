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
    tagline: "Real & Proven Ways to Make Money Online from Home",
    description:
      "Looking for genuine, practical ways to make money on the internet? Here you will find clear, step-by-step guides on legitimate online earning methods — created for absolute beginners as well as experienced earners.",
    longDescription:
      "Whether you want to earn extra money in your free time, start a zero-investment side hustle, work on remote freelance projects, or build long-term passive income, our guides explain exactly how each method works. We cover realistic earning estimates, required skills, common scams to avoid, and safe payment methods to withdraw your money directly to your bank account or local wallet.",
    highlights: [
      "Work From Home",
      "Beginner Side Hustles",
      "YouTube Automation",
      "Selling Digital Products",
      "Passive Income Ideas",
      "Remote Online Jobs",
      "Zero Investment Methods",
      "Mobile Earning Apps",
    ],
  },
  "ai-tools": {
    name: "AI Tools",
    tagline: "Smart AI Tools to Save Time & Multiply Your Income",
    description:
      "Discover the best free and paid AI tools to automate everyday tasks, generate content faster, and build profitable online projects without needing technical skills.",
    longDescription:
      "We test and review top artificial intelligence software for automated video editing, realistic voiceovers, content writing, graphic design, and customer support bots. Learn how to use these smart tools to finish hours of work in minutes and unlock brand new earning opportunities.",
    highlights: [
      "ChatGPT & Smart Prompts",
      "AI Video & Voice Generators",
      "Content Automation",
      "No-Code AI Apps",
      "AI Side Businesses",
      "Free Productivity Tools",
    ],
  },
  "affiliate-marketing": {
    name: "Affiliate Marketing",
    tagline: "Earn Steady Commissions by Recommending Products",
    description:
      "Learn how to earn reliable monthly income by recommending products and services you trust — without having to create products, hold inventory, or handle customer support.",
    longDescription:
      "From joining beginner-friendly affiliate networks (like Amazon Associates, ClickBank, and high-paying SaaS programs) to creating honest product reviews and social media content, our guides walk you through every step to generate recurring commissions.",
    highlights: [
      "Amazon Associates",
      "High-Paying SaaS Affiliates",
      "Product Review Guides",
      "Social Media Affiliate Links",
      "Recurring Monthly Payouts",
      "Beginner Affiliate Networks",
    ],
  },
  "blogging": {
    name: "Blogging & AdSense",
    tagline: "Start a Profitable Blog & Earn with Google AdSense",
    description:
      "Everything you need to know about starting a successful website, writing articles that rank high on Google search, and getting approved for Google AdSense.",
    longDescription:
      "Learn how to choose profitable blog niches, find low-competition keywords, write engaging posts that bring real visitors, get quick AdSense approval, and set up fast, free website hosting. Turn your writing and passions into steady advertising income.",
    highlights: [
      "Google AdSense Approval",
      "Low-Competition Keywords",
      "Beginner SEO Tips",
      "Free Fast Hosting",
      "Blog Traffic Strategies",
      "High-CPC Niches",
    ],
  },
  "crypto-fintech": {
    name: "Crypto & FinTech",
    tagline: "Online Payments, Digital Wallets & Global Transfers",
    description:
      "Simple, beginner-friendly guides on setting up international digital wallets, receiving global client payments, and managing your online earnings safely.",
    longDescription:
      "Understand how to receive foreign currency payments from overseas clients, use trusted payment platforms (such as PayPal, Payoneer, Wise, and Binance), minimize exchange fees, and keep your online funds protected with proper security practices.",
    highlights: [
      "International Payment Wallets",
      "Freelance Payout Methods",
      "Low-Fee Currency Exchange",
      "Digital Wallet Security",
      "Safe Crypto Basics",
      "Global Bank Transfers",
    ],
  },
  "freelancing": {
    name: "Freelancing",
    tagline: "Turn Your Skills into High-Paying Remote Work",
    description:
      "Master the art of finding freelance clients, winning high-paying gigs on Upwork & Fiverr, and building a rewarding remote career from anywhere.",
    longDescription:
      "Get practical advice on creating a standout portfolio, writing proposals that clients actually read, pricing your services with confidence, and building long-term client relationships. Learn in-demand skills like web design, copywriting, video editing, and digital marketing.",
    highlights: [
      "Upwork & Fiverr Tips",
      "Winning Proposal Templates",
      "High-Demand Remote Skills",
      "Client Outreach & Retention",
      "Setting Freelance Rates",
      "Portfolio Building Guides",
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
    tagline: `Beginner Guides & Step-by-Step Tutorials`,
    description: `Discover easy-to-follow, practical guides and real-world tips to help you get started in ${formattedName}.`,
    longDescription: `Learn how ${formattedName} works, how to get started step-by-step with zero upfront cost, and the best practices to grow your income and skills.`,
    highlights: ["Step-by-Step Guides", "Beginner Tips", "Free Tools", "Real Earning Methods"],
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
