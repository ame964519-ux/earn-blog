"use client";

import React from "react";
import { ListOrdered } from "lucide-react";

interface TOCProps {
  toc: { id: string; text: string; level: number }[];
}

export default function TableOfContents({ toc }: TOCProps) {
  if (!toc || toc.length === 0) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 mb-10 shadow-sm">
      <div className="flex items-center space-x-2.5 font-extrabold text-gray-900 dark:text-white text-lg sm:text-xl mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        <ListOrdered className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
        <span>Table of Contents</span>
      </div>
      <nav className="space-y-2 text-base sm:text-lg">
        {toc.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className={`block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1.5 leading-snug ${
              item.level === 3 ? "pl-6 text-sm sm:text-base text-gray-500 font-medium" : "font-semibold"
            }`}
          >
            • {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
