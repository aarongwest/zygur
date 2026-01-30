"use client";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center" style={{ marginLeft: '-20px' }}>
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Zygur" className="h-8 invert dark:invert-0" />
            </a>
          </div>

          {/* Desktop Navigation */}
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
            <ThemeSwitcher />
            <a 
              href="mailto:sales@zygur.com" 
              className="border border-black dark:border-white text-black dark:text-white px-3 py-1.5 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block"
            >
              Contact Sales
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-900 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="mailto:sales@zygur.com" 
                className="border border-black dark:border-white text-black dark:text-white px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
