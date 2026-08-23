"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

export default function ShareButtons({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;

  const shareWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - ${url}`
  )}`;

  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="flex flex-wrap items-center gap-2.5 my-6 py-4 border-y border-gray-100 dark:border-slate-800">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center mr-2">
        <Share2 className="w-4 h-4 mr-1 text-indigo-500" /> Share:
      </span>

      <a
        href={shareTwitter}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white text-xs font-semibold transition-colors"
      >
        Twitter / X
      </a>

      <a
        href={shareWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-semibold transition-colors"
      >
        WhatsApp
      </a>

      <a
        href={shareFacebook}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white text-xs font-semibold transition-colors"
      >
        Facebook
      </a>

      <button
        onClick={handleCopy}
        className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 text-xs font-semibold transition-colors flex items-center space-x-1"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
