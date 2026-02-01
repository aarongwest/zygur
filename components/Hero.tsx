"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ safeharbor check patient_export.csv",
    "✓ Scanning for 18 HIPAA identifiers...",
    "✓ Found: 0 identifiers (Safe Harbor compliant)",
    "✓ Safe to send to ML team",
    "",
    "$ evidence collect --start=2025-01-01 --type=access-control",
    "→ Scraping Git history...",
    "→ Collecting Jira tickets...",
    "→ Pulling Slack logs...",
    "✓ Generated: SOC2_evidence_2025.pdf (47 pages)",
    "→ Saved 40 hours of manual work",
    "",
    "$ piigrep ./src --format=sarif",
    "→ Scanning source code for hardcoded PII...",
    "✓ No sensitive data found",
    "→ Safe to commit",
    "",
    "$ auditdiff dump_0301.sql dump_0401.sql --table=patients",
    "→ Comparing database states...",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Changes to patients table:",
    "├─ Rows modified: 3",
    "├─ Rows deleted: 0",
    "├─ Rows added: 1",
    "└─ Last change by: audit_service (2025-03-01 14:22:00 UTC)",
    "",
    "$ baacheck --vendor stripe.com",
    "✓ Stripe is on HIPAA BAA whitelist",
    "✓ Current as of 2025-02-01",
    "",
    "$ retention apply --db=postgres://prod --policy=7years --dry-run",
    "→ Would delete records older than 2018-01-31",
    "→ Affected rows: 2,847",
    "→ Data removed: 156 MB",
    "→ Compliance: GDPR/CCPA compliant",
    "→ Run with --execute to apply",
    "",
    "$ git commit -m 'Added patient data'",
    "✗ BLOCKED: Commit contains PHI keywords",
    "✗ Use --force to override (not recommended)",
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
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-white" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
            Compliance Tools for Regulated Developers
          </h1>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            CLI tools for healthcare, fintech, legal, and government teams. One-time pricing. Local-first. No sales calls. Buy at 2am with a corporate card.
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <a 
              href="https://github.com/zygur" 
              className="border border-black dark:border-white text-black dark:text-white px-6 py-3 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block"
            >
              Browse Tools
            </a>
            
            <a 
              href="#products" 
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm text-black dark:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors inline-block"
            >
              See All Products
            </a>
          </div>

          <div className="flex gap-6 text-xs text-gray-500 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>HIPAA, SOC2, GDPR</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Local-First</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>No Subscriptions</span>
            </div>
          </div>
        </div>

        {/* Centered, larger terminal - Mac style */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-transparent">
            {/* Terminal header - Mac style */}
            <div className="bg-gray-100 dark:bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-transparent">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#ff5f56] rounded-full hover:bg-[#ff5f56]/80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#27c93f] rounded-full hover:bg-[#27c93f]/80 cursor-pointer"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">zygur@terminal: ~</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono h-[600px] overflow-auto bg-white dark:bg-[#1e1e1e]">
              <div className="text-green-600 dark:text-[#4ec9b0] mb-2 text-sm">Zygur CLI - Compliance Tools</div>
              <div className="text-gray-500 mb-4 text-sm">Type 'zygur help' for available tools</div>
              <div className="text-gray-800 dark:text-[#d4d4d4] whitespace-pre-wrap text-sm leading-relaxed">{terminalText}</div>
              {isTyping && (
                <motion.div
                  className="inline-block w-2 h-4 bg-green-600 dark:bg-[#4ec9b0] ml-1"
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
