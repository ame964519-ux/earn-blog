import React from "react";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";

export default function BlogListingPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const query = searchParams?.q?.toLowerCase() || "";

  const filteredPosts = query
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    : allPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Knowledge Base & Tutorials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          All Guides & Case Studies
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Discover comprehensive strategies to build, grow, and monetize your digital assets.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <Link
            href="/blog"
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              !query
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            All Categories ({allPosts.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Top Banner */}
      <AdBanner slot="blog-listing-top" format="horizontal" />

      {/* Articles Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 max-w-lg mx-auto">
          <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
            No articles found matching &quot;{query}&quot;
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Try searching for other keywords like &quot;AI&quot;, &quot;AdSense&quot;, or &quot;Affiliate&quot;.
          </p>
          <Link
            href="/blog"
            className="inline-block mt-4 px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
          >
            Clear Search
          </Link>
        </div>
      )}

      {/* Bottom Ad Unit */}
      <div className="mt-14">
        <AdBanner slot="blog-listing-bottom" format="auto" />
      </div>
    </div>
  );
}
