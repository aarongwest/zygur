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
        <title>Branding and Marketing Manager | AI-Enhanced Services | Zygur</title>
        <meta name="description" content="Elevate your business with a branding and marketing manager. Expert strategy, consistent messaging, and powerful results without the full-time cost. Schedule a call." />
        <meta name="keywords" content="marketing manager, brand management, marketing strategy, ai marketing, brand development" />
        <link rel="canonical" href="https://zygur.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Zygur Branding and Marketing Services",
              "description": "AI-Enhanced Branding and Marketing Manager",
              "url": "https://zygur.com",
              "logo": "https://zygur.com/zygur-logo.png",
              "priceRange": "$2,000-$7,000/month",
              "founder": {
                "@type": "Person",
                "name": "Aaron West",
                "jobTitle": "Marketing Strategist"
              },
              "sameAs": [
                "https://x.com/aarongwestx",
                "https://github.com/aarongwest",
                "https://aaronwe.st"
              ]
            }
          `}
        </script>
      </Head>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-10 pb-16">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                AI-Powered | Only 7 Clients Per Year
              </span>
            </div>
            <div className="flex items-center mb-6">
              <Link href="/about" aria-label="View Aaron's Profile">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent-orange/20 hover:border-accent-orange/50 transition-colors cursor-pointer">
                <Image 
                  src="/fcmo.jpeg" 
                  alt="Aaron West" 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
              <div className="flex flex-col ml-4">
                <p className="text-sm font-medium text-white">Aaron West</p>
                <p className="text-xs text-zinc-400">Brand and Marketing</p>
                <p className="text-xs text-zinc-400">Strategist</p>
              </div>
            </div>
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
              Your Branding and Marketing Manager
              <br />
              <span className="text-zinc-400">Expertise without the full-time cost</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-2xl">
              Elevate your brand with comprehensive management that delivers consistent messaging, 
              engaging experiences, and measurable results. Leveraging AI to accomplish more in less time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-white font-medium text-base md:text-lg py-5 md:py-6 px-6 md:px-8">
                  Schedule a Call
                </Button>
              </Link>
              <Link href="/services/brand-management">
                <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg py-5 md:py-6 px-6 md:px-8">
                  Brand Development / Management
                </Button>
              </Link>
              <Link href="/services/ai-enhanced-marketing">
                <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg py-5 md:py-6 px-6 md:px-8">
                  Marketing / Advertising
                </Button>
              </Link>
            </div>

            {/* Companies and Projects Section */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">Companies and Projects I've Personally Started or Helped Start</h2>
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
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <Zap className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold">Strategic Brand Development</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Comprehensive brand strategy aligned with your business goals and target audience.
                </p>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <h3 className="font-semibold">Consistent Messaging</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Unified brand voice and visual identity across all platforms and customer touchpoints.
                </p>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold">Personalized Service</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Tailored approach that addresses your specific business needs with attentive, hands-on management.
                </p>
              </div>
            </div>

            {/* Why Me Section */}
            <div className="bg-gradient-to-b from-dark-green/50 to-dark-green/70 rounded-lg p-6 md:p-8 mb-16">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why a Branding and Marketing Manager?</h2>
              <p className="text-zinc-400 mb-6">
                Growing businesses need brand leadership but often can't justify a full-time hire. 
                I provide expert brand development and marketing strategy at a fraction of the cost, delivering 
                consistent messaging and impactful campaigns that drive measurable growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Strategic expertise without the full-time salary</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">AI-enhanced content creation and analytics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Consistent brand experience across all touchpoints</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Flexible engagement model that scales with your needs</p>
                </div>
              </div>
              <Link href="/services/brand-management" className="inline-flex items-center text-accent-orange hover:text-accent-orange/80">
                Learn more about brand management services <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service Options */}
            <h2 className="text-2xl font-bold mb-6">Service Options</h2>
            <p className="text-zinc-400 mb-6">All service plans include a <span className="text-accent-orange font-semibold">free $5,000 value website</span> and a <span className="text-accent-yellow font-semibold">$2,000 value branding package</span>. 1-year minimum agreement required.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-gradient-to-b from-accent-orange/20 to-dark-green/60 rounded-lg p-6 hover:bg-dark-green/80 hover:from-accent-orange/30 transition-colors relative">
                <div className="absolute top-3 right-3 bg-accent-orange text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  Popular
                </div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-bold text-accent-orange">1</span>
                  </span>
                  Brand Development and Management
                </h3>
                <p className="text-accent-orange font-semibold text-sm mb-3">Starting at $500 per mo</p>
                <p className="text-sm text-zinc-400 mb-4">
                  Comprehensive brand strategy and management for growing businesses.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Brand identity development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Messaging and voice guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Brand consistency management</span>
                  </li>
                </ul>
                <Link href="/services/brand-management">
                  <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white font-medium">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-6 hover:bg-dark-green/80 transition-colors">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </span>
                  Marketing and Advertising
                </h3>
                <p className="text-accent-yellow font-semibold text-sm mb-3">Starting at $2k per mo</p>
                <p className="text-sm text-zinc-400 mb-4">
                  Strategic marketing leadership for businesses targeting accelerated growth.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Comprehensive marketing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Marketing team leadership</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">AI-enhanced performance optimization</span>
                  </li>
                </ul>
                <Link href="/services/fractional-cmo">
                  <Button className="w-full bg-accent-yellow hover:bg-accent-yellow/80 text-black font-medium">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Services Overview */}
            <h2 className="text-2xl font-bold mb-6">How I Can Help</h2>
            <div className="space-y-6 mb-16">
              <Link
                href="/services/brand-management"
                className="block p-6 bg-dark-green/60 rounded-lg hover:bg-dark-green/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-orange"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Brand Strategy</h3>
                      <p className="text-sm text-zinc-400">Comprehensive brand development aligned with your business goals</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/services/execution"
                className="block p-6 bg-dark-green/60 rounded-lg hover:bg-dark-green/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-orange"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Marketing Execution</h3>
                      <p className="text-sm text-zinc-400">Implementation of campaigns and content with AI-enhanced efficiency</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/services/fractional-cmo"
                className="block p-6 bg-dark-green/60 rounded-lg hover:bg-dark-green/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-yellow"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Marketing and Advertising</h3>
                      <p className="text-sm text-zinc-400">Strategic marketing leadership for accelerated business growth</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            </div>

            {/* FAQ Section - Added for SEO */}
            <div className="bg-gradient-to-b from-dark-green/60 to-dark-green/80 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What is a branding and marketing manager?</h3>
                  <p className="text-zinc-400">
                    A branding and marketing manager provides expert strategy and execution on a flexible basis, 
                    delivering consistent brand messaging and effective marketing campaigns without the cost of a full-time hire. 
                    You get enterprise-level expertise while only paying for the time your business actually needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How much does brand management cost?</h3>
                  <p className="text-zinc-400">
                    My brand development and management services start at $500/month, with pricing based on the scope of work and your specific 
                    business needs. This represents significant cost savings compared to hiring full-time talent while providing 
                    access to senior-level expertise.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How does AI enhance your branding and marketing services?</h3>
                  <p className="text-zinc-400">
                    I leverage AI technologies to analyze market trends, optimize content creation, and provide real-time performance 
                    analytics more efficiently. This allows me to deliver data-driven insights and high-quality work at a fraction of 
                    the traditional cost and time.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/10 rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-2">Ready to elevate your brand?</h2>
                  <p className="text-zinc-400">Limited availability - only 7 client spots per year.</p>
                </div>
                <Link href="/call">
                  <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-white font-medium py-5 px-6">
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
