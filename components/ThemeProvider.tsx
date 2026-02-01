"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect } from "react";

function MountainTimeThemeScript() {
  useEffect(() => {
    // Get current time in Mountain Time
    const getMountainTimeHour = () => {
      const now = new Date();
      const mtTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' }));
      return mtTime.getHours();
    };

    // Determine theme based on Mountain Time (6 AM - 6 PM = light, otherwise = dark)
    const setThemeBasedOnTime = () => {
      const hour = getMountainTimeHour();
      const theme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
      
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme') || localStorage.getItem('theme');
      
      // Only update if theme is set to 'system'
      if (currentTheme === 'system' || !currentTheme) {
        html.classList.remove('light', 'dark');
        html.classList.add(theme);
        html.style.colorScheme = theme;
      }
    };

    // Set theme on mount
    setThemeBasedOnTime();

    // Check every minute if the hour changes
    const interval = setInterval(setThemeBasedOnTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MountainTimeThemeScript />
      {children}
    </NextThemesProvider>
  );
}
