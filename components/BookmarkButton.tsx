"use client";

import React from "react";
import { useAuth } from "@/lib/authContext";
import { Bookmark, Check } from "lucide-react";

export default function BookmarkButton({ slug }: { slug: string }) {
  const { toggleBookmark, isBookmarked, isAuthenticated } = useAuth();
  const bookmarked = isBookmarked(slug);

  return (
    <button
      onClick={() => toggleBookmark(slug)}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-sm ${
        bookmarked
          ? "bg-indigo-600 text-white shadow-indigo-500/20"
          : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
      }`}
      title={bookmarked ? "Saved to your Reading List" : "Save to Reading List"}
    >
      {bookmarked ? (
        <>
          <Check className="w-3.5 h-3.5 text-white" />
          <span>Saved to Profile</span>
        </>
      ) : (
        <>
          <Bookmark className="w-3.5 h-3.5 text-indigo-500" />
          <span>Save Guide</span>
        </>
      )}
    </button>
  );
}
