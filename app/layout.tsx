import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zygur.com"),
  title: {
    default: "Zygur | An AI-Powered Digital Agency",
    template: "%s | Zygur",
  },
  description:
    "An AI-powered digital agency. Hire us for execution or rent our digital factory to launch and grow products faster.",
  keywords: [
    "AI-powered digital agency",
    "digital factory",
    "product strategy",
    "software development",
    "marketing automation",
    "developer tools",
    "Zygur",
    "SciCo.ai",
  ],
  openGraph: {
    title: "Zygur | An AI-Powered Digital Agency",
    description:
      "Hire us for execution or rent our digital factory to launch and grow products faster.",
    url: "https://zygur.com",
    siteName: "Zygur",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zygur | An AI-Powered Digital Agency",
    description:
      "Hire us for execution or rent our digital factory to launch and grow products faster.",
    site: "@zygurx",
    creator: "@zygurx",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
