"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ zygur config set-mode hipaa",
    "✓ Compliance mode set to HIPAA",
    "✓ Encryption enabled (AES-256)",
    "✓ Audit logging enabled (7-year retention)",
    "✓ Data residency: US-EAST-1",
    "",
    "$ zygur providers list",
    "→ Fetching available GPU providers...",
    "",
    "┌─────────────┬──────────┬───────────┬────────────┐",
    "│ Provider    │ GPU      │ Price/hr  │ Status     │",
    "├─────────────┼──────────┼───────────┼────────────┤",
    "│ Lambda Labs │ A100 80G │ $2.10     │ Available  │",
    "│ Vast.ai     │ A100 80G │ $2.35     │ Available  │",
    "│ CoreWeave   │ A100 80G │ $2.50     │ Available  │",
    "│ Replicate   │ A100 80G │ $2.80     │ Available  │",
    "│ AWS         │ A100 80G │ $4.10     │ Available  │",
    "└─────────────┴──────────┴───────────┴────────────┘",
    "",
    "$ zygur run --provider=auto --gpu=a100 --file=train_model.py",
    "→ Analyzing workload requirements...",
    "→ Estimated runtime: 45-60 minutes",
    "→ Selecting optimal provider...",
    "→ Lambda Labs selected (preferred + compliant)",
    "",
    "→ Job ID: zyg_2847_medical_imaging",
    "→ Compliance: HIPAA ✓",
    "→ Audit logging: ENABLED",
    "→ Data encryption: AES-256 ✓",
    "→ Backup: Enabled (S3)",
    "",
    "⚡ Training started at 2024-01-15 14:23:01 UTC",
    "→ Epoch 1/10 - Loss: 0.234 - Acc: 0.876",
    "→ Epoch 2/10 - Loss: 0.187 - Acc: 0.912",
    "→ Epoch 3/10 - Loss: 0.145 - Acc: 0.934",
    "→ Epoch 4/10 - Loss: 0.112 - Acc: 0.951",
    "→ Epoch 5/10 - Loss: 0.089 - Acc: 0.967",
    "→ Epoch 6/10 - Loss: 0.067 - Acc: 0.978",
    "→ Epoch 7/10 - Loss: 0.051 - Acc: 0.985",
    "→ Epoch 8/10 - Loss: 0.038 - Acc: 0.991",
    "→ Epoch 9/10 - Loss: 0.024 - Acc: 0.995",
    "→ Epoch 10/10 - Loss: 0.012 - Acc: 0.998",
    "",
    "✓ Training complete at 2024-01-15 15:10:23 UTC",
    "→ Duration: 47 minutes 22 seconds",
    "→ Cost: $1.64 (saved $2.46 vs. AWS)",
    "→ Model saved: s3://zygur-models/zyg_2847.pt",
    "→ Audit trail: Saved to compliance database",
    "→ Backup: Completed",
    "",
    "$ zygur audit-export --job=zyg_2847_medical_imaging --format=pdf",
    "→ Generating compliance report...",
    "→ Collecting job metadata...",
    "→ Verifying audit trail integrity...",
    "→ Including: Job metadata, timestamps, data lineage",
    "→ Framework: HIPAA",
    "→ Signatures: Digital + Tamper-proof seal",
    "✓ Report generated: audit-zyg_2847.pdf (2.3 MB)",
    "✓ Signed with tamper-proof seal",
    "✓ Uploaded to: s3://zygur-audits/2024/01/",
    "",
    "$ zygur status",
    "✓ All systems operational",
    "→ Active jobs: 0",
    "→ Completed today: 3",
    "→ Total cost today: $4.87",
    "→ Compliance status: COMPLIANT",
    "→ Last audit: 3 days ago",
    "→ Next audit: 89 days",
    "→ Storage used: 47.2 GB / 100 GB"
  ];


  useEffect(() => {
    if (!isTyping) return;

    const fullText = commands.slice(0, currentCommandIndex + 1).join("\n");
    const currentCommand = commands[currentCommandIndex];
    
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
  }, [terminalText, currentCommandIndex, isTyping, commands]);

  useEffect(() => {
    if (!isTyping && currentCommandIndex === commands.length - 1) {
      const resetTimeout = setTimeout(() => {
        setTerminalText("");
        setCurrentCommandIndex(0);
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [isTyping, currentCommandIndex]);

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered heading and description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-black dark:text-white" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
            The Compliance Layer for Cloud GPUs
          </h1>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Zygur routes your GPU workloads to your provider of choice while automatically 
            generating the audit logs your security team needs. One CLI. Zero compliance headaches.
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <a 
              href="mailto:sales@zygur.com" 
              className="border border-black dark:border-white text-black dark:text-white px-6 py-3 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block"
            >
              Contact Sales
            </a>
            
            <a 
              href="/#docs" 
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm text-black dark:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors inline-block"
            >
              View Documentation
            </a>
          </div>

          <div className="flex gap-6 text-xs text-gray-500 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>SOC2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>HIPAA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>GDPR</span>
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
                <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">zygur@compliance: ~</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono h-[600px] overflow-auto bg-white dark:bg-[#1e1e1e]">
              <div className="text-green-600 dark:text-[#4ec9b0] mb-2 text-sm">Zygur CLI v0.1.0</div>
              <div className="text-gray-500 mb-4 text-sm">Type 'help' for available commands</div>
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
