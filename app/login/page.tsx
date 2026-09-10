"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
import { Lock, Mail, ArrowRight, Sparkles, AlertCircle, CheckCircle2, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  // If already logged in, redirect to profile
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setIsLoading(true);
    setError("");

    const res = await login(email, password);
    setIsLoading(false);

    if (res.success) {
      router.push("/profile");
    } else {
      setError(res.error || "Invalid login credentials. Please try again.");
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (resetEmail) {
      setResetSuccess(true);
      setTimeout(() => {
        setForgotModalOpen(false);
        setResetSuccess(false);
        setResetEmail("");
      }, 2500);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl">
        {/* Top Branding */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-primary-600 to-accent-500 mx-auto flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sign in to access bookmarked guides, earning tools, and member perks.
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-center space-x-3 text-rose-700 dark:text-rose-300 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-4" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{isLoading ? "Signing In..." : "Sign In to Account"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer link to Register */}
        <p className="text-center text-xs text-gray-600 dark:text-gray-400 pt-2">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/signup"
            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Create Free Account
          </Link>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-6 border border-gray-100 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Reset Your Password
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Enter your email address and we will send you a password recovery link.
            </p>

            {resetSuccess ? (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-2xl text-emerald-600 dark:text-emerald-400 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Reset link dispatched to your email!</span>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-3">
                <input
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-xs text-gray-900 dark:text-white"
                />
                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
