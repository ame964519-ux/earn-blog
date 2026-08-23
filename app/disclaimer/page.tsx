import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { DollarSign, AlertTriangle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earnings & Affiliate Disclaimer",
  description: `FTC disclosure and earnings disclaimer for ${siteConfig.name}.`,
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-xs font-semibold">
          <DollarSign className="w-3.5 h-3.5" />
          <span>Transparency & Disclosure</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Earnings & Affiliate Disclaimer
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>1. Educational & Informational Purposes Only</span>
          </h2>
          <p>
            The content provided on {siteConfig.name} is for educational, informational, and entertainment purposes only. The strategies, earnings reports, case studies, and monetization methods discussed are based on our research and experience, but they do not guarantee that you will achieve the same results.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-emerald-500" />
            <span>2. No Financial Advice</span>
          </h2>
          <p>
            We are not certified financial advisors or licensed financial planners. Any financial decisions or investments you make based on content found on this site are solely your responsibility. Always conduct your own due diligence.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-indigo-500" />
            <span>3. Affiliate Links Disclosure (FTC Compliance)</span>
          </h2>
          <p>
            Some links on {siteConfig.name} are affiliate links. This means that if you click on an affiliate link and make a purchase or sign up for a service, we may receive a small commission at <strong>no extra cost to you</strong>.
          </p>
          <p>
            We only endorse products and services that we believe provide genuine value to our readers. These commissions help maintain and keep this platform 100% free for everyone.
          </p>
        </section>
      </div>
    </div>
  );
}
