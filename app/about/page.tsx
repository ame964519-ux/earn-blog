import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Sparkles, Target, Users, ShieldCheck, Award, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, editorial standards, and digital publishing team behind EarnSmartly.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Vision & Story</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          About {siteConfig.name}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empowering individuals worldwide to achieve financial freedom through digital skills, automated workflows, and high-impact blogging.
        </p>
      </div>

      {/* Main Content Box */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Target className="w-6 h-6 text-indigo-600" />
            <span>Our Mission</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            At {siteConfig.name}, our objective is simple: provide clear, transparent, and tested strategies for creating recurring income online. The digital landscape evolves rapidly, and having up-to-date, step-by-step guidance on AI tools, content monetization, Google AdSense, and affiliate marketing makes all the difference between struggling and succeeding.
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-100 dark:border-slate-800 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <span>Our Editorial Standards</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Every tutorial, review, and case study published on this platform is thoroughly vetted. We prioritize reader trust above everything else. We only recommend platforms, tools, and methodologies that adhere to strict ethical guidelines, genuine value delivery, and Google Search Quality Evaluator Guidelines (E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness).
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-100 dark:border-slate-800 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Users className="w-6 h-6 text-indigo-600" />
            <span>Who We Serve</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Beginners</h4>
              <p className="text-xs text-gray-500 mt-1">Looking to start their first blog or freelance journey with \$0 startup cost.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Content Creators</h4>
              <p className="text-xs text-gray-500 mt-1">Seeking AI automation tools to scale content production 10x faster.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Affiliate Marketers</h4>
              <p className="text-xs text-gray-500 mt-1">Wanting high-converting strategies to maximize earnings per click.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base">Have Questions or Feedback?</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">We would love to hear from you and assist you on your journey.</p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center space-x-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
