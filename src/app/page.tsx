import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, Award, Zap } from "lucide-react"
import Link from "next/link"
import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Head from "next/head"

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Utah Technology Company | Design, Develop, Deploy Solutions | Zygur</title>
        <meta name="description" content="Utah's premier technology company specializing in software development, custom manufacturing, and complete solution engineering. From concept to deployment - we design, develop, and deploy innovative technology solutions." />
        <meta name="keywords" content="utah technology company, custom manufacturing utah, software development utah, solution engineering, design prototyping, system integration, welding fabrication, machining services, technology solutions utah, engineering company utah" />
        <link rel="canonical" href="https://zygur.com" />
        <meta property="og:title" content="Utah Technology Company | Design, Develop, Deploy Solutions | Zygur" />
        <meta property="og:description" content="Utah's premier technology company specializing in software development, custom manufacturing, and complete solution engineering." />
        <meta property="og:url" content="https://zygur.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zygur.com/zygur-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Utah Technology Company | Design, Develop, Deploy Solutions | Zygur" />
        <meta name="twitter:description" content="Utah's premier technology company specializing in software development, custom manufacturing, and complete solution engineering." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechnologyCompany",
              "name": "Zygur Technology Solutions",
              "description": "Utah's Premier Technology Company - Design, Develop, Deploy Complete Solutions",
              "url": "https://zygur.com",
              "logo": "https://zygur.com/zygur-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Utah",
                "addressCountry": "US"
              },
              "founder": {
                "@type": "Person",
                "name": "Aaron West",
                "jobTitle": "Chief Technology Officer"
              },
              "sameAs": [
                "https://x.com/aarongwestx",
                "https://github.com/aarongwest",
                "https://aaronwe.st"
              ],
              "serviceType": [
                "Software Development",
                "Custom Manufacturing",
                "System Integration",
                "Solution Engineering",
                "Welding and Fabrication",
                "Machining Services",
                "Technology Consulting"
              ],
              "areaServed": {
                "@type": "State",
                "name": "Utah"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Design & Prototyping",
                      "description": "Engineering blueprints, custom solution architecture, and rapid prototyping"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manufacturing & Development",
                      "description": "Software development, custom manufacturing, and system integration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Distribution & Optimization",
                      "description": "Go-to-market strategy, deployment, and performance optimization"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Head>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-10 pb-16">
          <div className="max-w-4xl">
            <div className="mb-4 -mt-20 md:-mt-20 -mt-12 max-w-4xl">
              <Image
                src="/logo.png"
                alt="Zygur Logo"
                width={480}
                height={160}
                priority
                className="w-full h-auto max-w-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Design, Develop, and Deploy your solution <span className="text-zinc-400">with a long term U.S. partner.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
              We engineer complete solutions that work in the real world - combining custom software, 
              precision manufacturing, and strategic deployment. One team, one vision, one solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/solutions/design-prototyping">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black font-medium text-base md:text-lg py-5 md:py-6 px-6 md:px-8 whitespace-nowrap">
                  Design & Prototype
                </Button>
              </Link>
              <Link href="/solutions/manufacturing-development">
                <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg py-5 md:py-6 px-6 md:px-8 whitespace-nowrap">
                  Manufacture & Code
                </Button>
              </Link>
              <Link href="/solutions/distribute-optimize">
                <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg py-5 md:py-6 px-6 md:px-8 whitespace-nowrap">
                  Distribute & Optimize
                </Button>
              </Link>
            </div>

            {/* Companies and Projects Section */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">Companies and Projects we've Personally Started or Helped Start</h2>
            <p className="text-zinc-400 mb-8">A portfolio of brands I've been directly involved in launching or scaling. Each represents a unique journey in entrepreneurship and innovation.</p>
            <div className="mb-24">
              <div className="w-full">
                <Image
                  src="/our-brands.png"
                  alt="Our client brands"
                  width={900}
                  height={180}
                  className="w-full h-auto invert brightness-200"
                  priority
                />
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <Zap className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold">Complete Solution Engineering</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  From concept to market - we handle every aspect of bringing your technology solution to life.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <h3 className="font-semibold">Integrated Capabilities</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Software development, manufacturing, and deployment expertise under one roof.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold">Proven Track Record</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Trusted by companies across industries to deliver innovative solutions that drive results.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/10 rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-2">Ready to bring your solution to life?</h2>
                  <p className="text-zinc-400">Let's discuss your technology project and explore how we can help.</p>
                </div>
                <Link href="/call">
                  <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black font-medium py-5 px-6 whitespace-nowrap">
                    <Calendar className="w-5 h-5 mr-2" /> Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
