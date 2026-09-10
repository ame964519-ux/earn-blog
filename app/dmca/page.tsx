import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldAlert, Mail, FileCheck, Scale, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA & Copyright Policy",
  description: `DMCA takedown and copyright compliance policy for ${siteConfig.name}.`,
};

export default function DmcaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-semibold">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>DMCA & Intellectual Property Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          DMCA & Copyright Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: September 9, 2024
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Scale className="w-5 h-5 text-indigo-500" />
            <span>1. Commitment to Copyright & IP Protection</span>
          </h2>
          <p>
            {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects the intellectual property rights of creators, authors, artists, and software developers. In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512) and international intellectual property laws, we will respond expeditiously to valid notices of alleged copyright infringement.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Mail className="w-5 h-5 text-indigo-500" />
            <span>2. Designated Copyright Agent Contact</span>
          </h2>
          <p>
            If you believe your copyrighted material is appearing on {siteConfig.url} without authorization, please submit a formal written notification to our Designated Copyright Agent:
          </p>
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 space-y-1 font-mono text-xs text-gray-800 dark:text-gray-200">
            <p><strong>Designated Agent:</strong> EarnSmartly Copyright & Legal Operations</p>
            <p><strong>Direct Email:</strong> <a href="mailto:ame964519@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-bold underline">ame964519@gmail.com</a></p>
            <p><strong>Subject Line:</strong> DMCA Copyright Infringement Notice - [Content Title]</p>
            <p><strong>Turnaround Time:</strong> 24 to 48 business hours</p>
          </div>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <FileCheck className="w-5 h-5 text-indigo-500" />
            <span>3. Required Information for a Valid DMCA Notice</span>
          </h2>
          <p>
            To ensure rapid processing, your infringement notice must include all of the following elements:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Physical or electronic signature</strong> of the copyright owner or authorized representative.</li>
            <li><strong>Identification of the copyrighted work</strong> claimed to have been infringed (e.g., original publication URL or registration number).</li>
            <li><strong>Identification of the infringing material</strong> on our website, including the exact URL(s) so our team can locate and inspect the material.</li>
            <li><strong>Your contact information</strong>, including your full legal name, physical mailing address, telephone number, and active email address.</li>
            <li><strong>Good Faith Statement:</strong> &quot;I have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.&quot;</li>
            <li><strong>Accuracy Statement under Penalty of Perjury:</strong> &quot;The information in this notification is accurate, and under penalty of perjury, I am the owner, or an agent authorized to act on behalf of the owner, of an exclusive right that is allegedly infringed.&quot;</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-indigo-500" />
            <span>4. Counter-Notification & Resolution</span>
          </h2>
          <p>
            If content you posted on {siteConfig.name} was removed due to a mistaken or misidentified DMCA notice, you may file a formal counter-notification containing your signature, identification of the removed content, a statement under penalty of perjury agreeing to local jurisdiction, and your contact details.
          </p>
          <p>
            Upon receipt of a valid counter-notification, we will forward it to the original complaining party. If no court action is filed within 10-14 business days, we may restore the removed material.
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Repeat Infringer Policy</h2>
          <p>
            In compliance with 17 U.S.C. § 512(i), {siteConfig.name} maintains a strict policy to terminate, in appropriate circumstances, user accounts or contributor privileges for repeat copyright infringers.
          </p>
        </section>
      </div>
    </div>
  );
}
