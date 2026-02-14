"use client";

import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navigation() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#2a2a2a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center" style={{ marginLeft: '-20px' }}>
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Zygur" className="h-8 invert dark:invert-0" />
            </a>
          </div>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
