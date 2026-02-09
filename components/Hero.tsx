"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ hayli generate --topic 'why rust is great for cli tools' --tone developer",
    "→ Thinking about your audience...",
    "→ Generating variations...",
    "",
    "Tweet #1 (High engagement potential):",
    "┌─────────────────────────────────────────────────────┐",
    "│ Rust's borrow checker saved me 6 hours of debugging │",
    "│ this week.                                          │",
    "│                                                     │",
    "│ No more 'why did this crash at 3am' moments.       │",
    "│ It just tells you exactly what's wrong at compile  │",
    "│ time. Wild.                                         │",
    "└─────────────────────────────────────────────────────┘",
    "",
    "Tweet #2 (Curiosity hook):",
    "┌─────────────────────────────────────────────────────┐",
    "│ The real reason devs are switching to Rust isn't   │",
    "│ performance. It's sanity.                          │",
    "│                                                     │",
    "│ Let me explain the borrow checker in 30 seconds... │",
    "└─────────────────────────────────────────────────────┘",
    "",
    "Tweet #3 (Proof/Stats):",
    "┌─────────────────────────────────────────────────────┐",
    "│ Replaced 4 Go services with 1 Rust binary.         │",
    "│ 87% less memory. 3x faster. Fewer bugs.            │",
    "│                                                     │",
    "│ 2 days to rewrite. 6 months saved in infra costs.  │",
    "└─────────────────────────────────────────────────────┘",
    "",
    "→ Generating images...",
    "✓ Created: rust-cli-hero.png",
    "✓ Created: rust-performance-chart.png",
    "✓ Created: rust-memory-comparison.png",
    "",
    "→ Scheduling posts...",
    "✓ Mon 9:00 AM PT (Tweet #1)",
    "✓ Wed 8:00 AM PT (Tweet #2 + image)",
    "✓ Fri 10:00 AM PT (Tweet #3 + chart)",
    "",
    "→ Next: Pinterest pins, LinkedIn adaptation",
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
            Your Visibility Is Getting Murdered.
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
            Twitter. LinkedIn. TikTok. Instagram. Threads. Bluesky. Every platform wants different content. Different times. Different formats.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            You're supposed to be everywhere at once. That's a ball kicker.
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            But what if you didn't have to choose?
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <a 
              href="#pricing" 
              className="border border-black dark:border-white text-black dark:text-white px-8 py-4 text-sm font-bold hover:border-gray-600 dark:hover:border-gray-400 transition-colors inline-block rounded"
            >
              Let Us Own It (Zygur)
            </a>
            
            <a 
              href="#pricing" 
              className="border border-gray-400 dark:border-gray-600 px-8 py-4 text-sm text-black dark:text-white hover:border-gray-600 dark:hover:border-gray-400 transition-colors inline-block rounded"
            >
              Build It Yourself (Hayli AI)
            </a>
          </div>

          <div className="flex gap-6 text-xs text-gray-500 justify-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Copy that lands</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>All platforms covered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Automatic scheduling</span>
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
                <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">dev@terminal: ~/project</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono h-[600px] overflow-auto bg-white dark:bg-[#1e1e1e]">
              <div className="text-green-600 dark:text-[#4ec9b0] mb-2 text-sm">Hayli AI - Social Content Automation</div>
              <div className="text-gray-500 mb-4 text-sm">Type 'hayli help' for available commands</div>
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
