import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zygur Technologies Corp.",
  description: "Future-proof solutions for a complex world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-black`}>
      <body className="font-sans antialiased bg-transparent">{children}</body>
    </html>
  );
}
