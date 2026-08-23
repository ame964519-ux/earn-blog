import React from "react";
import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { Clock, Calendar, ArrowRight, TrendingUp } from "lucide-react";

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden aspect-[16/9]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Category Pill */}
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-indigo-600 dark:text-indigo-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {post.category}
        </span>

        {/* CPC badge */}
        {post.cpcPotential && (
          <span className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center space-x-1 backdrop-blur-sm">
            <TrendingUp className="w-3 h-3" />
            <span>{post.cpcPotential} Value</span>
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-gray-400" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2.5 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-5 mt-5 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-indigo-200 dark:border-indigo-900"
            />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
