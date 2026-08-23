"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
  label?: string;
}

export default function AdBanner({
  slot = "1234567890",
  format = "auto",
  responsive = true,
  className = "",
  label = "Sponsored Advertisement",
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && siteConfig.adsense.enabled) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense Error:", err);
    }
  }, []);

  const isConfigured =
    siteConfig.adsense.publisherId &&
    !siteConfig.adsense.publisherId.includes("XXXX");

  return (
    <div
      className={`my-6 mx-auto w-full max-w-4xl text-center overflow-hidden transition-all ${className}`}
    >
      <div className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
        {label}
      </div>

      {isConfigured ? (
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={siteConfig.adsense.publisherId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      ) : (
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-2xl p-4 sm:p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-amber-300 uppercase tracking-wide">
              Featured Deal
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-white">
              Launch Your High-Income Blog & AI Business Today
            </h4>
            <p className="text-xs text-indigo-200/90 max-w-xl leading-relaxed">
              Get 75% off ultra-fast cloud hosting + Free Domain & SSL certificate to scale your online income.
            </p>
          </div>
          <a
            href="https://hostinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105"
          >
            Claim 75% Discount →
          </a>
        </div>
      )}
    </div>
  );
}
