import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import { ArrowLeft, Sparkles, FolderOpen } from "lucide-react";
import type { Metadata } from "next";

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
  const decoded = decodeURIComponent(params.category).replace(/-/g, " ");
  const formattedCategory =
    decoded.charAt(0).toUpperCase() + decoded.slice(1);

  return {
    title: `${formattedCategory} Articles & Earning Guides`,
    description: `Discover top tutorials, case studies, and income blueprints on ${formattedCategory}.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getPostsByCategory(params.category);
  const decoded = decodeURIComponent(params.category).replace(/-/g, " ");
  const formattedCategory =
    decoded.charAt(0).toUpperCase() + decoded.slice(1);

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

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <FolderOpen className="w-3.5 h-3.5" />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white capitalize">
          {formattedCategory}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Explore curated guides and monetized tutorials in the {formattedCategory} niche.
        </p>
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
