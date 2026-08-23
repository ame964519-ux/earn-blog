"use client";

import React from "react";
import { ListOrdered } from "lucide-react";

interface TOCProps {
  toc: { id: string; text: string; level: number }[];
}

export default function TableOfContents({ toc }: TOCProps) {
  if (!toc || toc.length === 0) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 mb-8">
      <div className="flex items-center space-x-2 font-bold text-gray-900 dark:text-white text-base mb-3 border-b border-slate-200 dark:border-slate-800 pb-2.5">
        <ListOrdered className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <span>Table of Contents</span>
      </div>
      <nav className="space-y-1.5 text-sm">
        {toc.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className={`block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 ${
              item.level === 3 ? "pl-5 text-xs text-gray-500" : "font-medium"
            }`}
          >
            • {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
