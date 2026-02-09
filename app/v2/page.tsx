"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

// Navigation for v2
function NavigationV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "The Tool", href: "#tool" },
    { name: "Proof", href: "#proof" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <a href="/v2" className="flex items-center">
              <img src="/logo.png" alt="Zygur" className="h-8 invert dark:invert-0" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#pricing"
              className="bg-[#DCFF00] text-black px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity rounded-md"
            >
              GET KASEY
            </a>
            <ThemeSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-900 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section - Pain-focused, edgy copy
function HeroV2() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ kasey generate --platform linkedin",
    "→ Analyzing your product positioning...",
    "→ Crafting pain-focused hook...",
    "→ Generating scroll-stopping image...",
    "✓ Created: linkedin_ad_v1.png (1200x627)",
    "✓ Copy: \"Your competitors are stealing your leads...\"",
    "✓ Intrigue score: 9.2/10",
    "✓ Reading level: Grade 4 ✓",
    "",
    "$ kasey batch campaigns.yaml --variants 5",
    "→ Generating for: LinkedIn, X, TikTok, Reddit, FB, IG",
    "→ 30 ad variants created in 47 seconds",
    "✓ Saved to ./kasey-output/",
    "",
    "$ kasey analyze competitor-ad.png",
    "→ Benefit buried in paragraph 3 ⚠️",
    "→ Jargon score: HIGH (grade 11 reading level)",
    "→ No proof elements detected",
    "→ Your version will destroy this.",
  ];

  useEffect(() => {
    if (!isTyping) return;
    const fullText = commands.slice(0, currentCommandIndex + 1).join("\n");
    
    if (terminalText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullText.slice(0, terminalText.length + 1));
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        if (currentCommandIndex < commands.length - 1) {
          setCurrentCommandIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
        }
      }, 150);
    }
  }, [terminalText, currentCommandIndex, isTyping]);

  useEffect(() => {
    if (!isTyping && currentCommandIndex === commands.length - 1) {
      const resetTimeout = setTimeout(() => {
        setTerminalText("");
        setCurrentCommandIndex(0);
        setIsTyping(true);
      }, 4000);
      return () => clearTimeout(resetTimeout);
    }
  }, [isTyping, currentCommandIndex, commands.length]);

  return (
    <section className="w-full py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* The Hook - Pattern Interrupt */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold text-[#DCFF00] mb-4 tracking-widest flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              WARNING: THIS TOOL MIGHT MAKE YOUR COMPETITORS CRY
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-black dark:text-white leading-none"
          >
            Stop Creating Posts<br />
            <span className="text-gray-700 dark:text-gray-300">That Nobody Clicks</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              You've tried Canva. You've tried ChatGPT prompts. You've hired freelancers who delivered garbage.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              <strong className="text-black dark:text-white">Your ads still get 0.3% CTR while your competitor's ads go viral.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
              What if you could generate 30 high-converting ad variants in 47 seconds?
            </p>
          </motion.div>
        </div>

        {/* Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">kasey-ai</span>
            </div>
            <div className="p-6 font-mono text-sm text-green-400 h-80 overflow-y-auto">
              <pre className="whitespace-pre-wrap">{terminalText}<span className="animate-pulse">▊</span></pre>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#pricing"
            className="bg-[#DCFF00] text-black px-8 py-4 text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2 rounded-md"
          >
            GET KASEY NOW
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="#proof"
            className="border-2 border-[#DCFF00] text-[#DCFF00] px-8 py-4 text-sm font-bold hover:bg-[#DCFF00] hover:text-black transition-all rounded-md"
          >
            SHOW ME THE PROOF
          </a>
        </motion.div>

        {/* Social Proof Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-600">
            Used by developers at companies shipping to <strong>2.4M+ users</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Pain Section - Dimensionalize the problem
function PainSection() {
  const pains = [
    {
      pain: "You spend 3 hours making one ad",
      reality: "Then it gets 12 impressions and zero clicks. Your time is worth more than this.",
    },
    {
      pain: "AI tools give you generic slop",
      reality: "\"Unlock your potential with our innovative solution.\" That's not copy. That's corporate diarrhea.",
    },
    {
      pain: "Agencies want $5K/month retainers",
      reality: "For what? A 22-year-old with a Canva Pro account? You could build a feature in that time.",
    },
    {
      pain: "Your ads look like ads",
      reality: "People scroll past ads at lightning speed. Native content gets 10x the engagement.",
    },
    {
      pain: "You don't know what's working",
      reality: "Is it the headline? The image? The copy? You're guessing. And guessing is expensive.",
    },
    {
      pain: "Marketing feels like a foreign language",
      reality: "You're a developer. You ship products. Why should you need a marketing degree to promote them?",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6">
            Let's Be Honest.<br />
            <span className="text-gray-700 dark:text-gray-300">Marketing Sucks.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            You built something amazing. But nobody knows it exists because your marketing looks like it was made by a robot having a stroke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-6"
            >
              <p className="text-lg font-bold text-[#DCFF00] mb-3">
                "{item.pain}"
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.reality}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-bold text-black dark:text-white">
            Sound familiar? Good. Keep reading.
          </p>
        </div>
      </div>
    </section>
  );
}

// Solution Section - Introduce Kasey
function SolutionSection() {
  return (
    <section id="tool" className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[#DCFF00] mb-4 tracking-widest">
            INTRODUCING
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6">
            Kasey AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            A terminal-based marketing weapon that generates high-converting ad creatives for LinkedIn, X, TikTok, Reddit, Facebook, and Instagram.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Built for developers. Runs in your terminal. Uses your own LLM keys. No monthly fees. No bloated dashboards.
          </p>
        </div>

        {/* Philosophy Callout */}
        <div className="bg-black text-white p-8 md:p-12 mb-16 max-w-4xl mx-auto border border-[#DCFF00]">
          <h3 className="text-2xl font-black mb-6 text-center">
            THE SECRET SAUCE
          </h3>
          <p className="text-lg mb-6 leading-relaxed">
            Kasey isn't another AI slop generator. It's built on battle-tested marketing principles that have generated <strong>$7.8 billion</strong> in sales:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border-l-4 border-[#DCFF00] pl-4">
              <p className="font-bold mb-2">Pattern Interrupt + Burning Intrigue + Big Benefit</p>
              <p className="opacity-80">Every ad stops the scroll, sparks curiosity, and promises a specific outcome.</p>
            </div>
            <div className="border-l-4 border-[#DCFF00] pl-4">
              <p className="font-bold mb-2">Fifth-Grade Reading Level</p>
              <p className="opacity-80">No jargon. No buzzwords. Copy so simple your grandma would understand it.</p>
            </div>
            <div className="border-l-4 border-[#DCFF00] pl-4">
              <p className="font-bold mb-2">Pain Over Product</p>
              <p className="opacity-80">We focus on what hurts, not what you're selling. The best marketing kicks the bruised knee.</p>
            </div>
            <div className="border-l-4 border-[#DCFF00] pl-4">
              <p className="font-bold mb-2">Proof Louder Than Claims</p>
              <p className="opacity-80">Every claim is backed. Every benefit is demonstrated. Skeptics become buyers.</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "30 Variants in 47 Seconds",
              description: "Generate ad creative batches across all platforms. Test fast. Find winners faster.",
            },
            {
              icon: (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
              ),
              title: "Platform-Optimized",
              description: "Correct dimensions, copy length, and style for LinkedIn, X, TikTok, Reddit, FB, and IG.",
            },
            {
              icon: (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              ),
              title: "Bring Your Own LLMs",
              description: "Use Grok for images, Claude for copy. Or whatever combo works for you. Your keys, your control.",
            },
            {
              icon: (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Built-In Analysis",
              description: "Score your ads against proven frameworks. Reading level, benefit clarity, intrigue factor.",
            },
            {
              icon: (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17h20" />
                </svg>
              ),
              title: "Terminal Native",
              description: "Pipes, scripts, CI/CD. Automate your marketing like you automate your deploys.",
            },
            {
              icon: (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "No Monthly Fees",
              description: "Pay once. Own forever. Your only ongoing cost is LLM API usage (pennies per ad).",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-colors"
            >
              <div className="w-6 h-6 mb-4 text-gray-400 dark:text-gray-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#DCFF00] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Proof Section
function ProofSection() {
  const results = [
    { metric: "3.2%", label: "Average CTR", comparison: "vs 0.9% industry average" },
    { metric: "47s", label: "Time to generate 30 variants", comparison: "vs 3+ hours manually" },
    { metric: "$0.02", label: "Cost per ad creative", comparison: "vs $50+ from agencies" },
    { metric: "Grade 4", label: "Average reading level", comparison: "Optimized for consumption" },
  ];

  return (
    <section id="proof" className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6">
            Marketers Lie.<br />
            <span className="text-[#DCFF00]">Numbers Don't.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're not here to convince you. We're here to show you the receipts.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2">
                {result.metric}
              </p>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                {result.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {result.comparison}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Example Output */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Real Output. Real Results.
          </h3>
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-red-600 dark:text-red-500 mb-2">❌ BEFORE (Generic AI Slop)</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-4 text-sm text-gray-600 dark:text-gray-400 italic">
                  "Unlock your business potential with our innovative SaaS solution. We leverage cutting-edge technology to deliver seamless experiences. Contact us today to learn more about how we can help you succeed."
                </div>
                <p className="text-xs text-gray-500 mt-2">Reading level: Grade 12 | CTR: 0.2%</p>
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 dark:text-green-500 mb-2">✓ AFTER (Kasey Output)</p>
                <div className="bg-gray-100 dark:bg-gray-900 p-4 text-sm text-gray-700 dark:text-gray-300">
                  "Your leads are going to your competitor.<br /><br />
                  Not because their product is better.<br /><br />
                  Because their ads don't look like a robot wrote them.<br /><br />
                  47 seconds to fix that. Link in bio."
                </div>
                <p className="text-xs text-gray-500 mt-2">Reading level: Grade 3 | CTR: 3.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Choose Your Path Section
function ChoosePathSection() {
  return (
    <section id="pricing" className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Want to do it yourself? Get the tool. Want us to handle everything? We'll run Kasey for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DIY Option */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-2 border-gray-200 dark:border-gray-800 p-8 hover:border-black dark:hover:border-white transition-colors"
          >
            <div className="mb-6">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-500 mb-2">FOR DEVELOPERS</p>
              <h3 className="text-3xl font-black text-black dark:text-white mb-2">Do It Yourself</h3>
              <p className="text-gray-600 dark:text-gray-400">Get Kasey AI and run it from your terminal. Full control. No dependencies.</p>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-black text-black dark:text-white">$199</p>
              <p className="text-sm text-gray-500">One-time. Forever yours.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Full Kasey AI CLI tool",
                "All 6 platforms supported",
                "Bring your own LLM keys",
                "Batch generation",
                "A/B variant testing",
                "Built-in copy analysis",
                "Lifetime updates",
                "Discord community access",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#DCFF00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://github.com/zygur/kasey-ai"
              className="block w-full bg-[#DCFF00] text-black py-4 text-center font-bold hover:opacity-90 transition-opacity rounded-md"
            >
              GET KASEY NOW
            </a>
            <p className="text-xs text-center text-gray-500 mt-3">Instant download. No sales calls.</p>
          </motion.div>

          {/* Done For You Option */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-2 border-black dark:border-white p-8 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 text-xs font-bold">
              MOST POPULAR
            </div>

            <div className="mb-6">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-500 mb-2">FOR BUSY FOUNDERS</p>
              <h3 className="text-3xl font-black text-black dark:text-white mb-2">We Do It For You</h3>
              <p className="text-gray-600 dark:text-gray-400">Our team runs Kasey for you. Fresh ad creatives delivered to your inbox weekly.</p>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-black text-black dark:text-white">$499<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-500">Cancel anytime. No contracts.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in DIY, plus:",
                "50 fresh ad variants per week",
                "All 6 platforms covered",
                "Custom brand guidelines",
                "Performance tracking",
                "Monthly strategy calls",
                "Priority support",
                "A/B testing recommendations",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[#DCFF00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="mailto:hello@zygur.com?subject=Kasey AI Done For You"
              className="block w-full bg-[#DCFF00] text-black py-4 text-center font-bold hover:opacity-90 transition-opacity rounded-md"
            >
              BOOK A CALL
            </a>
            <p className="text-xs text-center text-gray-500 mt-3">15-min call. No bullshit. Just results.</p>
          </motion.div>
        </div>

        {/* Guarantee */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-black border border-[#DCFF00] p-6">
            <h3 className="text-xl font-bold text-[#DCFF00] mb-2 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              The "This Actually Works" Guarantee
            </h3>
            <p className="text-sm text-[#DCFF00]">
              If you don't see a measurable improvement in your ad performance within 30 days, we'll refund every penny. No questions. No hoops. We're that confident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      q: "I'm a developer, not a marketer. Will this work for me?",
      a: "That's exactly who we built this for. Kasey handles the marketing psychology. You just run the commands. If you can use a CLI, you can generate high-converting ads.",
    },
    {
      q: "What LLMs does it support?",
      a: "Grok for images (best quality for ad creatives), Claude for copy (best for persuasive writing), plus OpenAI, Gemini, and local models via Ollama. Mix and match however you want.",
    },
    {
      q: "How is this different from just using ChatGPT?",
      a: "ChatGPT gives you generic copy. Kasey is built on proven marketing frameworks—pattern interrupts, burning intrigue, fifth-grade readability, pain-focused messaging. It also handles platform-specific dimensions and generates actual images.",
    },
    {
      q: "What's the ongoing cost?",
      a: "Zero for the tool itself (one-time purchase). Your only ongoing cost is LLM API usage—typically $0.01-0.05 per ad variant. Generate 100 ads for less than a coffee.",
    },
    {
      q: "Can I use this for client work?",
      a: "Absolutely. One license, unlimited use. Generate ads for yourself, your clients, your cat's Instagram. We don't care.",
    },
    {
      q: "What if I need help?",
      a: "DIY customers get Discord community support. Done-for-you customers get priority email and monthly strategy calls. Either way, you're covered.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-black dark:text-white mb-4">
            Questions? We've Got Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-bold text-black dark:text-white pr-4">{faq.q}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="w-full py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Your Competitors Are Already Doing This.
        </h2>
        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
          Every day you wait is another day they're stealing your leads with better ads. Stop guessing. Start converting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing"
            className="bg-[#DCFF00] text-black px-8 py-4 text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 rounded-md"
          >
            GET KASEY NOW
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        <p className="text-sm opacity-60 mt-6">
          30-day money-back guarantee. No risk. Just results.
        </p>
      </div>
    </section>
  );
}

// Footer
function FooterV2() {
  return (
    <footer className="w-full py-12 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/logo.png" alt="Zygur" className="h-8 invert dark:invert-0" />
          
          <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-600">
            <a href="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
            <a href="mailto:hello@zygur.com" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/zygur" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-900 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Zygur. All rights reserved. Built with 🔥 for developers who refuse to suck at marketing.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomeV2() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <NavigationV2 />
      <HeroV2 />
      <PainSection />
      <SolutionSection />
      <ProofSection />
      <ChoosePathSection />
      <FAQSection />
      <FinalCTASection />
      <FooterV2 />
    </main>
  );
}
