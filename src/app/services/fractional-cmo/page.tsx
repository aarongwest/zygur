import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, Award, Zap } from "lucide-react"
import Link from "next/link"
import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Head from "next/head"

export const dynamic = 'force-dynamic'

export default function FractionalCMOPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional CMO Services | AI-Enhanced Marketing for $1M-$15M Companies | Zygur</title>
        <meta name="description" content="Hire a Fractional CMO to drive growth for your $1M-$15M business. AI-enhanced marketing delivers twice the results at half the cost with personalized strategy. Schedule a call." />
        <meta name="keywords" content="fractional cmo, fractional chief marketing officer, hire a fractional cmo, ai marketing, marketing leadership" />
        <link rel="canonical" href="https://zygur.com/services/fractional-cmo" />
      </Head>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
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
                <p className="text-xs text-zinc-400">Fractional CMO for</p>
                <p className="text-xs text-zinc-400">$1M-$15M businesses</p>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Your Fractional CMO for AI-Enhanced Growth
              <br />
              <span className="text-zinc-400">Results that matter for $1M-$15M businesses.</span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
              As your <Link href="/resources/what-is-a-fractional-cmo" className="text-accent-orange hover:underline">fractional CMO</Link>, I help $1M-$15M businesses achieve enterprise-level marketing without the enterprise-level cost. 
              Leveraging AI to deliver twice the work at half the price.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black font-medium text-lg py-6 px-8">
                  Hire a Fractional CMO
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto text-lg py-6 px-8">
                  Fractional CMO Services
                </Button>
              </Link>
            </div>

            {/* Companies and Projects Section */}
            <h2 className="text-2xl font-bold mb-4 mt-16">Companies and Projects I've Personally Started or Helped Start</h2>
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
                  <h3 className="font-semibold">AI-Enhanced Results</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  I leverage cutting-edge AI to accomplish twice the work in half the time, passing those savings to you.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <h3 className="font-semibold">Premium Quality</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Unlike large agencies with mediocre output, I deliver forward-thinking, high-quality marketing solutions.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold">Exclusive Service</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  I only work with 7 clients per year to ensure personalized attention and exceptional results.
                </p>
              </div>
            </div>

            {/* Why Me Section */}
            <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold mb-6">Why a Fractional CMO?</h2>
              <p className="text-zinc-400 mb-6">
                Growing businesses need strategic marketing leadership but often can't justify a full-time executive. 
                As your fractional CMO, I bring C-suite expertise at a fraction of the cost, implementing proven 
                strategies that drive measurable growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Strategic leadership without the full-time salary</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Access to AI-enhanced marketing systems</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Implementation of proven growth strategies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">Flexibility to scale services as you grow</p>
                </div>
              </div>
              <Link href="/pricing/fractional-cmo-cost" className="inline-flex items-center text-accent-orange hover:text-accent-orange/80">
                Explore fractional CMO cost & pricing <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Engagement Models */}
            <h2 className="text-2xl font-bold mb-6">Engagement Models</h2>
            <p className="text-zinc-400 mb-6">All service plans include a <span className="text-accent-orange font-semibold">free $5,000 value website</span> and a <span className="text-accent-yellow font-semibold">$2,000 value branding package</span>. 1-year minimum agreement required.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-gradient-to-b from-accent-orange/20 to-zinc-900/60 rounded-lg p-6 hover:bg-zinc-900/80/70 hover:from-accent-orange/30 transition-colors relative">
                <div className="absolute top-3 right-3 bg-accent-orange text-black px-2 py-0.5 rounded-full text-xs font-medium">
                  Popular
                </div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-bold text-accent-orange">1</span>
                  </span>
                  Local Mgmt
                </h3>
                <p className="text-accent-orange font-semibold text-sm mb-3">Starting at $2k per mo</p>
                <p className="text-sm text-zinc-400 mb-4">
                  Complete optimization for businesses targeting local customers.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Onsite optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Local citation building</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Monthly performance reports</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6 hover:bg-zinc-900/80/70 transition-colors">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </span>
                  National Mgmt
                </h3>
                <p className="text-accent-yellow font-semibold text-sm mb-3">Starting at $7k per mo</p>
                <p className="text-sm text-zinc-400 mb-4">
                  Advanced strategy for businesses targeting nationwide audiences.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Advanced onsite SEO</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Content optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Comprehensive monthly reports</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6 hover:bg-zinc-900/80/70 transition-colors">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-sm font-bold">+</span>
                  </span>
                  Add-on Services
                </h3>
                <p className="text-accent-orange font-semibold text-sm mb-3">$1k per mo</p>
                <p className="text-sm text-zinc-400 mb-4">
                  Optional services to enhance your digital marketing strategy.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">PPC campaign management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Social media content creation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Consolidated reporting dashboard</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Overview */}
            <h2 className="text-2xl font-bold mb-6">How I Can Help</h2>
            <div className="space-y-6 mb-16">
              <Link
                href="/services/strategy"
                className="block p-6 bg-zinc-900/60 rounded-lg hover:bg-zinc-900/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-orange"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Marketing Strategy</h3>
                      <p className="text-sm text-zinc-400">Comprehensive planning aligned with your business goals</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/services/execution"
                className="block p-6 bg-zinc-900/60 rounded-lg hover:bg-zinc-900/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-orange"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">AI-Powered Execution</h3>
                      <p className="text-sm text-zinc-400">Marketing implementation with AI-enhanced efficiency</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/services/optimization"
                className="block p-6 bg-zinc-900/60 rounded-lg hover:bg-zinc-900/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-yellow"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Growth Optimization</h3>
                      <p className="text-sm text-zinc-400">Data-driven refinement for maximum ROI</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            </div>

            {/* FAQ Section - Added for SEO */}
            <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What is a fractional CMO?</h3>
                  <p className="text-zinc-400">
                    A fractional CMO is a Chief Marketing Officer who works with your business on a part-time or contract basis, 
                    providing strategic marketing leadership without the full-time executive cost. As your 
                    <Link href="/resources/what-is-a-fractional-cmo" className="text-accent-orange hover:underline"> fractional CMO</Link>, 
                    I bring enterprise-level expertise while only charging for the time your business actually needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How much does a fractional CMO cost?</h3>
                  <p className="text-zinc-400">
                    <Link href="/pricing/fractional-cmo-cost" className="text-accent-orange hover:underline">Fractional CMO costs</Link> vary based on business 
                    needs and engagement level. My services start at $2,000/month for local management and $7,000/month for national 
                    strategies. This represents 50-75% savings compared to a full-time CMO while delivering enterprise-quality marketing leadership.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Why hire a fractional CMO instead of a marketing agency?</h3>
                  <p className="text-zinc-400">
                    Unlike agencies that offer tactical execution with variable quality, a 
                    <Link href="/services" className="text-accent-orange hover:underline"> fractional CMO service</Link> provides strategic 
                    leadership, accountability, and focused expertise. You get a dedicated marketing leader who understands your business 
                    deeply, without paying for the overhead costs typical of larger agencies.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/10 rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-2">Ready to transform your marketing?</h2>
                  <p className="text-zinc-400">Limited availability - only 7 client spots per year.</p>
                </div>
                <Link href="/call">
                  <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black font-medium py-5 px-6">
                    <Calendar className="w-5 h-5 mr-2" /> Hire a Fractional CMO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
