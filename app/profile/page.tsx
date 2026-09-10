"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
import { User, Bookmark, LogOut, Sparkles, BookOpen, Calendar, ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, logout, bookmarks, toggleBookmark } = useAuth();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse text-indigo-600 font-bold">Loading Member Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Profile Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-slate-800 shadow-xl mb-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 via-primary-600 to-accent-500 p-1 shadow-lg shadow-indigo-500/20 shrink-0">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover rounded-[22px]"
            />
          </div>
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Member</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              {user.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {user.email}
            </p>
            <div className="flex items-center space-x-4 pt-1 text-xs text-gray-400">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                Member Since: {user.joinedDate}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="px-5 py-2.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-xs font-bold transition-all flex items-center space-x-2 shrink-0 border border-rose-200/60 dark:border-rose-900/40"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Grid: Bookmarked Articles & Pro Perks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Saved Reading List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div className="flex items-center space-x-2.5">
                <Bookmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                  My Bookmarked Guides ({bookmarks.length})
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center space-x-1"
              >
                <span>Explore More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {bookmarks.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 mx-auto flex items-center justify-center">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  No Saved Guides Yet
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                  Browse our 66+ high-paying earning guides and click the bookmark button to save them to your personal reading list!
                </p>
                <Link
                  href="/blog"
                  className="inline-block mt-3 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20"
                >
                  Browse High-CPC Guides
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {bookmarks.map((slug) => (
                  <div
                    key={slug}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/60 hover:bg-indigo-50/50 dark:hover:bg-slate-800 border border-gray-200/70 dark:border-slate-700/60 flex items-center justify-between transition-all"
                  >
                    <Link
                      href={`/blog/${slug}`}
                      className="font-bold text-sm text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 line-clamp-1 flex-1 pr-4"
                    >
                      {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                    <div className="flex items-center space-x-2 shrink-0">
                      <Link
                        href={`/blog/${slug}`}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700"
                      >
                        Read
                      </Link>
                      <button
                        onClick={() => toggleBookmark(slug)}
                        className="p-1.5 text-gray-400 hover:text-rose-500 text-xs font-medium"
                        title="Remove bookmark"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Quick Tools */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 via-primary-600 to-indigo-800 text-white rounded-3xl p-7 shadow-xl shadow-indigo-500/20 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold">Member Pro Blueprint</h3>
            <p className="text-xs text-indigo-100 leading-relaxed">
              You are unlocked for all premium online monetization roadmaps, case studies, and zero-cost cloud automation scripts.
            </p>
            <div className="pt-2">
              <Link
                href="/category/ai-tools"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 text-xs font-bold text-center block transition-all shadow-md"
              >
                Explore Top AI Tools 2026
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
