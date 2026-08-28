import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldCheck, Lock, Eye, Cookie, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and Google AdSense cookie compliance statement for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>GDPR & Google AdSense Compliant</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Lock className="w-5 h-5 text-indigo-500" />
            <span>1. Introduction</span>
          </h2>
          <p>
            Welcome to {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website ({siteConfig.url}).
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Eye className="w-5 h-5 text-indigo-500" />
            <span>2. Information We Collect</span>
          </h2>
          <p>We may collect information about you in a variety of ways:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li><strong>Personal Data:</strong> Voluntarily provided name, email address when subscribing to newsletters or using contact forms.</li>
            <li><strong>Derivative Data:</strong> Browser type, operating system, access times, and pages viewed directly before and after accessing the site.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Cookie className="w-5 h-5 text-indigo-500" />
            <span>3. Google AdSense & Third-Party Cookies</span>
          </h2>
          <p>
            Third-party vendors, including <strong>Google</strong>, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-semibold">Google Ads Settings</a>.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <FileText className="w-5 h-5 text-indigo-500" />
            <span>4. CCPA & GDPR Privacy Rights</span>
          </h2>
          <p>
            Depending on your jurisdiction, you possess the right to access, rectify, or erase your personal data, restrict data processing, or object to processing. You may exercise these rights at any time by reaching out through our <a href="/contact" className="text-indigo-600 underline font-semibold">Contact Page</a>.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact our data protection team at <a href="mailto:ame964519@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-semibold underline">ame964519@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
