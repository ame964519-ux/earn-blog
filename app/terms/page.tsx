import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldCheck, BookOpen, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and Conditions of use for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>User Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using {siteConfig.name} ({siteConfig.url}), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us and are protected by copyright and trademark laws.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that you will not use the Site for any illegal or unauthorized purpose, nor will you violate any applicable laws or regulations.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. Limitation of Liability</h2>
          <p>
            In no event will {siteConfig.name} or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.
          </p>
        </section>
      </div>
    </div>
  );
}
