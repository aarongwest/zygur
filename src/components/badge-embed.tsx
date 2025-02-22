'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, X } from "lucide-react";

interface BadgeEmbedProps {
  country: 'us' | 'ca' | 'au' | 'eu' | 'uk';
  children: React.ReactNode;
}

export function BadgeEmbed({ country, children }: BadgeEmbedProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowCode(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowCode(false);
      }
    };

    if (showCode) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showCode]);

  const embedCode = `<a href="https://ehs.inc/register?verify=true" target="_blank" rel="noopener noreferrer">
  <img src="https://ehs.inc/badges/${country}.png" alt="EHS Certified" width="40" height="40" style="filter: invert(1); opacity: 0.5;" />
</a>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setShowCode(!showCode)}>
      {children}
      {showCode && (
        <div ref={popupRef} className="absolute bottom-full mb-2 right-[-140px] w-[320px] bg-[#1c1c1c] rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-zinc-300">Add this badge to your website</h3>
              <button
                onClick={() => setShowCode(false)}
                className="text-zinc-500 hover:text-zinc-400"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <pre className="text-xs bg-[#2a2a2a] p-3 rounded mb-4 overflow-x-auto">
              <code className="text-zinc-300">{embedCode}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="w-full bg-[#2a2a2a] text-zinc-300 hover:bg-[#333333] py-3 rounded flex items-center justify-center gap-2 transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
            <p className="text-xs text-zinc-500 mt-4">
              This badge will link to our verification system.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
