"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ zed identify-opportunity --vertical saas",
    "→ Analyzing market trends...",
    "→ Scanning competitor landscape...",
    "✓ Opportunity found: API monitoring for indie hackers",
    "✓ TAM: 50K potential customers",
    "✓ Validation score: 8.5/10",
    "",
    "$ hayli validate --idea 'API monitoring for indie hackers'",
    "→ Running customer interviews (simulated)...",
    "→ Checking willingness to pay...",
    "✓ Pain score: 9/10 (High urgency)",
    "✓ Pricing sweet spot: $29-49/month",
    "→ Recommendation: BUILD IT",
    "",
    "$ knucks generate --platform twitter --product 'API Monitor'",
    "→ Generating ad creative with Grok...",
    "→ Writing copy with Claude...",
    "✓ Created 3 variants for Twitter",
    "✓ Scheduled posts for next 7 days",
    "→ Expected reach: 50K impressions",
    "",
    "$ kasey onboard --customer customer_abc123",
    "→ Sending welcome email...",
    "→ Setting up product walkthrough...",
    "✓ Customer onboarded successfully",
    "→ Next touchpoint: Day 3 check-in",
    "",
    "$ khristyn analyze-revenue --period month",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "February 2026 Revenue:",
    "├─ MRR: $18,450 (+12% vs last month)",
    "├─ New customers: 47",
    "├─ Churn: 2.1%",
    "└─ Runway: 18 months",
    "",
    "$ gerty check-compliance --product api-monitor",
    "→ Scanning for security vulnerabilities...",
    "→ Checking data privacy policies...",
    "✓ No compliance issues found",
    "✓ SOC2 requirements met",
  ];


  useEffect(() => {
    if (!isTyping) return;

    const fullText = commands.slice(0, currentCommandIndex + 1).join("\n");
    
    if (terminalText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullText.slice(0, terminalText.length + 1));
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        if (currentCommandIndex < commands.length - 1) {
          setCurrentCommandIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
        }
      }, 100);
    }
  }, [terminalText, currentCommandIndex, isTyping]);

  useEffect(() => {
    if (!isTyping && currentCommandIndex === commands.length - 1) {
      const resetTimeout = setTimeout(() => {
        setTerminalText("");
        setCurrentCommandIndex(0);
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [isTyping, currentCommandIndex, commands.length]);

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered heading and description */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            An AI-Powered Digital Agency
          </h1>

          <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Hire us or rent our digital factory to grow and/or manage your business.
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <a
              href="#services"
              className="border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 px-8 py-4 text-sm font-bold hover:opacity-80 transition-opacity inline-block rounded"
            >
              Done for You
            </a>

            <a
              href="#scico"
              className="border border-gray-900 dark:border-gray-100 px-8 py-4 text-sm text-gray-900 dark:text-gray-100 hover:opacity-80 transition-opacity inline-block rounded"
            >
              Do it Yourself
            </a>
          </div>

          <div className="flex gap-6 text-xs text-gray-900 dark:text-gray-100 justify-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Ship Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Solo Operation</span>
            </div>
          </div>
        </div>

        {/* Centered, larger terminal - Mac style */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl border border-[#c0c0c0] dark:border-[#404040]">
            {/* Terminal header - Mac style */}
            <div className="bg-white dark:bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#c0c0c0] dark:border-[#404040]">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#ff5f56] rounded-full hover:bg-[#ff5f56]/80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#27c93f] rounded-full hover:bg-[#27c93f]/80 cursor-pointer"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">dev@terminal: ~/project</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono h-[600px] overflow-auto bg-white dark:bg-[#1a1a1a]">
              <div className="mb-2 text-sm text-gray-700 dark:text-gray-300">SciCo.ai - AI-Powered Digital Factory</div>
              <div className="text-gray-500 mb-4 text-sm">Type 'scico help' to see all agents</div>
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 dark:text-gray-300">{terminalText}</div>
              {isTyping && (
                <motion.div
                  className="inline-block w-2 h-4 ml-1 bg-gray-700 dark:bg-gray-300"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
