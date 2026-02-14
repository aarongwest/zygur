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
          <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Compliance CLI Tools for Regulated Developers
          </h1>

          <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Built by AI agents. Shipped monthly. HIPAA, SOC2, GDPR, CCPA. One-time pricing. No subscriptions. Buy at 2am with a corporate card.
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <a
              href="#products"
              className="border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 px-8 py-4 text-sm font-bold hover:opacity-80 transition-opacity inline-block rounded"
            >
              Browse Tools
            </a>

            <a
              href="https://github.com/zygur"
              className="border border-gray-900 dark:border-gray-100 px-8 py-4 text-sm text-gray-900 dark:text-gray-100 hover:opacity-80 transition-opacity inline-block rounded"
            >
              GitHub
            </a>
          </div>

          <div className="flex gap-6 text-xs text-gray-900 dark:text-gray-100 justify-center mt-8">
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
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            {/* Terminal header - Mac style */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#ff5f56] rounded-full hover:bg-[#ff5f56]/80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#27c93f] rounded-full hover:bg-[#27c93f]/80 cursor-pointer"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-medium text-gray-300">dev@terminal: ~/project</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono h-[600px] overflow-auto bg-gray-950">
              <div className="mb-2 text-sm text-gray-300">Zygur CLI - Compliance Tools</div>
              <div className="text-gray-500 mb-4 text-sm">Type 'zygur help' for available tools</div>
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-300">{terminalText}</div>
              {isTyping && (
                <motion.div
                  className="inline-block w-2 h-4 ml-1 bg-gray-300"
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
