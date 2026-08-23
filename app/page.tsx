import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import NewsletterBox from "@/components/NewsletterBox";
import {
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  Award,
} from "lucide-react";

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0];
  const recentPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug);

  const categories = [
    { name: "AI Tools", count: "12 Guides", href: "/category/ai-tools", icon: Zap, color: "from-blue-500 to-indigo-600" },
    { name: "Online Earning", count: "15 Methods", href: "/category/online-earning", icon: TrendingUp, color: "from-emerald-500 to-teal-600" },
    { name: "Blogging & AdSense", count: "9 Tutorials", href: "/category/blogging", icon: Target, color: "from-purple-500 to-pink-600" },
    { name: "Affiliate Marketing", count: "10 Reviews", href: "/category/affiliate-marketing", icon: BarChart3, color: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-950 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>Step-by-Step Blueprint to \$1,000+/Month Passive Income</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Master Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Blogging & AI</span> for Real Earnings
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Zero to monetized blog in record time. Discover proven high-CPC niches, automated publishing workflows, and Google AdSense approval strategies.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                href="/blog"
                className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore All Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/category/online-earning"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 font-semibold text-sm transition-all"
              >
                Top Earning Methods
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% AdSense Compliant</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-indigo-500" />
                <span>Tested High-CPC Niches</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>24/7 Cloud Automated Posts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Google AdSense Unit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AdBanner slot="top-home-banner" format="horizontal" />
      </div>

      {/* Category Quick Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Browse by High-CPC Niches
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Select a category to discover targeted earning strategies
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {cat.count}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Story & Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {featuredPost && (
          <div className="mb-14">
            <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Featured Master Guide</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800/80 shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="lg:col-span-7 overflow-hidden rounded-2xl aspect-[16/10] relative group">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {featuredPost.category}
                </span>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-4 leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[10px] text-gray-500">Lead Editor</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 transition-all flex items-center space-x-1.5"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Latest Articles Grid */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Latest High-Traffic Articles
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Fresh tutorials updated for maximum search visibility
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Mid-Page Ad Unit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <AdBanner slot="mid-home-feed" format="auto" />
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </div>
    </div>
  );
}
