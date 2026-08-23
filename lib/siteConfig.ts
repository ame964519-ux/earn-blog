export const siteConfig = {
  name: "EarnSmartly",
  description: "Your ultimate guide to online earning, AI productivity tools, blogging strategies, and passive income streams.",
  url: "https://earn-blog-k8lknaup8-earn-smartly1.vercel.app", // Live Production URL
  author: {
    name: "EarnSmartly Editorial Team",
    bio: "Digital entrepreneur and tech enthusiast passionate about helping people build sustainable online income streams.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  social: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  // Google AdSense settings:
  // Jab aapko AdSense account mil jaye, sirf yahan apni ID paste karein (e.g. ca-pub-1234567890123456)
  adsense: {
    publisherId: "ca-pub-XXXXXXXXXXXXXXXX", // Replace with your real AdSense ID
    enabled: true, // Turn false to hide ads, true to show
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "All Articles", href: "/blog" },
    { name: "AI Tools", href: "/category/ai-tools" },
    { name: "Online Earning", href: "/category/online-earning" },
    { name: "Blogging Guides", href: "/category/blogging" },
    { name: "Affiliate Marketing", href: "/category/affiliate-marketing" },
  ],
  legal: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]
};
