import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ehsinc.com'),
  title: "EHS, Inc. | Environmental Health & Safety Solutions",
  description: "Leading provider of Environmental Health & Safety (EHS) solutions. Offering Safety & Health software, consulting, training, and compliance services for businesses.",
  keywords: "EHS software, safety management, health and safety, environmental compliance, EHS consulting, safety training, workplace safety, OSHA compliance, safety solutions, EHS services, safety & health",
  openGraph: {
    title: "EHS, Inc. | Environmental Health & Safety Solutions",
    description: "Leading provider of Environmental Health & Safety (EHS) solutions. Offering Safety & Health software, consulting, training, and compliance services for businesses.",
    url: 'https://ehsinc.com',
    siteName: 'EHS, Inc.',
    images: [
      {
        url: '/ehs-logo.png',
        width: 800,
        height: 600,
        alt: 'EHS, Inc. Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EHS, Inc. | Environmental Health & Safety Solutions",
    description: "Leading provider of Environmental Health & Safety (EHS) solutions. Offering Safety & Health software, consulting, training, and compliance services for businesses.",
    images: ['/ehs-logo.png'],
  },
  icons: {
    icon: '/ico.png'
  },
  alternates: {
    canonical: 'https://ehsinc.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-0847GBRXR6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0847GBRXR6');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-black text-zinc-100">
        {children}
        {/* LinkedIn Tracking */}
        <Script id="linkedin-tracking" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "6044980";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script 
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js" 
          strategy="afterInteractive"
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            alt="" 
            src="https://px.ads.linkedin.com/collect/?pid=6044980&fmt=gif" 
          />
        </noscript>

        {/* HubSpot */}
        <Script 
          src="//js-na1.hs-scripts.com/46520416.js"
          strategy="afterInteractive"
          id="hs-script-loader"
        />

        {/* Klaviyo */}
        <Script 
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=W5JYsF"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
