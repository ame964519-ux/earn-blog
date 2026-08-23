import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import AdBanner from "@/components/AdBanner";
import ArticleCard from "@/components/ArticleCard";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  CheckCircle,
  TrendingUp,
  Bookmark,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  const fullUrl = `${siteConfig.url}/blog/${post.slug}`;

  // Article Structured Data Schema for Google
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
  };

  return (
    <div className="min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Back link */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link
            href="/blog"
            className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
          <span>/</span>
          <Link
            href={`/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-indigo-600 dark:text-indigo-400"
          >
            {post.category}
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto text-center space-y-4 mb-8">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            {post.cpcPotential && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center space-x-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>High CPC Niche</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.2]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Date metadata */}
          <div className="flex items-center justify-center space-x-6 pt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border border-indigo-200 dark:border-indigo-900"
              />
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {post.author.name}
              </span>
            </div>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-gray-400" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-gray-400" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] mb-10 border border-gray-100 dark:border-slate-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Ad Unit */}
        <div className="max-w-4xl mx-auto mb-8">
          <AdBanner slot="article-top" format="horizontal" />
        </div>

        {/* Main Content Layout (Article + Sidebar) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left / Center Article Body */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900/70 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-slate-800/80 shadow-sm">
            {/* Table of Contents for Mobile / Quick jump */}
            <TableOfContents toc={post.tableOfContents} />

            {/* Markdown rendered HTML Content */}
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* In-Article Ad Slot */}
            <div className="my-8">
              <AdBanner slot="in-article-banner" format="auto" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-100 dark:border-slate-800">
              <span className="text-xs font-semibold text-gray-500 flex items-center mr-1">
                <Tag className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social Share Buttons */}
            <ShareButtons title={post.title} url={fullUrl} />

            {/* Author Box */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-indigo-500"
              />
              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">
                    Written by {post.author.name}
                  </h4>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {siteConfig.author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Sidebar TOC */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-3">
                  Quick Navigation
                </h3>
                <nav className="space-y-1.5 text-xs max-h-72 overflow-y-auto">
                  {post.tableOfContents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className={`block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 ${
                        item.level === 3 ? "pl-4 text-gray-500" : "font-semibold"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Ad Unit */}
              <AdBanner slot="sidebar-ad-slot" format="rectangle" />

              {/* Key Takeaway Box */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-indigo-950/40 rounded-2xl p-5 border border-indigo-100 dark:border-indigo-900/50">
                <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Bookmark className="w-4 h-4" />
                  <span>Pro Earning Tip</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Combine Google AdSense ads with high-ticket affiliate programs on this topic to multiply your revenue by 3x to 5x.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-800">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
              Recommended Next Reads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <ArticleCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
