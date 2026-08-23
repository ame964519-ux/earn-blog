"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-12 shadow-2xl my-12">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-indigo-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Exclusive Weekly Earning Blueprints</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Get High-CPC Niche Ideas & Earning Guides Directly in Your Inbox
        </h3>

        <p className="text-sm text-indigo-100/80 max-w-lg mx-auto leading-relaxed">
          Join 15,000+ digital creators receiving our weekly hand-picked AI tools, blogging tips, and monetized case studies.
        </p>

        {subscribed ? (
          <div className="p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl flex items-center justify-center space-x-2 text-emerald-200 text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Shukriya! Aapka subscription activate ho chuka hai.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2"
          >
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 transition-all"
              />
              <Mail className="w-4 h-4 text-indigo-300 absolute left-3.5 top-3.5" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Subscribe Free
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
