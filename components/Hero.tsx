"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ zygur init --mode=hipaa",
    "✓ Workflow engine initialized",
    "✓ Compliance mode: HIPAA",
    "✓ Audit chain: Merkle tree (tamper-proof)",
    "✓ State storage: SQLite → Postgres ready",
    "✓ Encryption: AES-256 (at rest + in transit)",
    "",
    "$ zygur workflow create patient-monitoring.yaml",
    "→ Parsing workflow definition...",
    "→ Compiling to temporal state graph...",
    "→ Validating DAG structure...",
    "✓ Workflow compiled: patient_monitoring_v1",
    "→ Steps: 5 (image_capture → ai_analysis → alert → log → archive)",
    "→ Schedule: Every 4 hours",
    "→ Retry policy: Exponential backoff (3 attempts)",
    "→ Checkpointing: Enabled (resume from failure point)",
    "",
    "$ zygur workflow deploy patient_monitoring_v1",
    "→ Deploying to Zygur runtime...",
    "→ Allocating warm pool (Replicate API)...",
    "→ Preloading model: yolov8-medical-v1.2",
    "→ Setting up event sourcing...",
    "✓ Workflow deployed and scheduled",
    "→ First execution: 2024-01-15 14:00:00 UTC",
    "→ Audit trail: Active",
    "",
    "$ zygur workflow status patient_monitoring_v1",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Workflow: patient_monitoring_v1",
    "Status: RUNNING",
    "Last execution: 2024-01-15 14:00:01 UTC",
    "Next execution: 2024-01-15 18:00:00 UTC",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "Execution History (Last 3):",
    "┌────────────┬──────────────────────┬──────────┬──────────┐",
    "│ Exec ID    │ Timestamp            │ Duration │ Status   │",
    "├────────────┼──────────────────────┼──────────┼──────────┤",
    "│ exec_2847  │ 2024-01-15 14:00:01  │ 2m 34s   │ SUCCESS  │",
    "│ exec_2846  │ 2024-01-15 10:00:02  │ 2m 41s   │ SUCCESS  │",
    "│ exec_2845  │ 2024-01-15 06:00:01  │ 2m 38s   │ SUCCESS  │",
    "└────────────┴──────────────────────┴──────────┴──────────┘",
    "",
    "State Graph (Merkle Tree):",
    "→ Root hash: 7a3f9c2e8b1d4a6f...",
    "→ Chain length: 2,847 executions",
    "→ Integrity: VERIFIED ✓",
    "→ Tamper-proof: YES",
    "",
    "$ zygur audit export --workflow=patient_monitoring_v1 --format=soc2",
    "→ Generating SOC2 compliance report...",
    "→ Collecting execution events (2,847 records)...",
    "→ Verifying cryptographic signatures...",
    "→ Building audit chain...",
    "→ Including: Timestamps, input/output hashes, model versions",
    "→ Merkle proof: VALID ✓",
    "✓ Report generated: audit_patient_monitoring_soc2.pdf",
    "→ Size: 3.2 MB",
    "→ Signed: ECDSA signature included",
    "→ Storage: s3://zygur-audits/2024/01/patient_monitoring.pdf",
    "",
    "$ zygur stats --period=30d",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Zygur Runtime Statistics (Last 30 Days)",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "→ Total workflows: 12",
    "→ Total executions: 8,640",
    "→ Success rate: 99.97%",
    "→ Average duration: 2m 41s",
    "→ Total compute cost: $147.23",
    "→ Audit events stored: 43,200",
    "→ State graph integrity: VERIFIED ✓",
    "→ Compliance status: COMPLIANT",
    "→ Uptime: 99.99%"
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
            Terminal-Native Tools for Developers
          </h1>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Zygur is a studio of small, sharp developer tools built in Go. No bloat. No dashboards. Just useful tools that respect your time and your terminal.
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <a 
              href="https://github.com" 
              className="border border-black dark:border-white text-black dark:text-white px-6 py-3 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block"
            >
              View on GitHub
            </a>
            
            <a 
              href="#tools" 
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm text-black dark:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors inline-block"
            >
              Current Tools
            </a>
          </div>

          <div className="flex gap-6 text-xs text-gray-500 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Go</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Self-Serve</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Open Source</span>
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
