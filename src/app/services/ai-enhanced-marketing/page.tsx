import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, Zap, Brain, LineChart, UserCheck, Layers } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function AIEnhancedMarketingPage() {
  return (
    <PageLayout>
      <Head>
        <title>AI Marketing Solutions | Fractional CMO AI Expertise | Zygur</title>
        <meta 
          name="description" 
          content="Transform your marketing with AI-enhanced solutions. Our fractional CMO services leverage artificial intelligence to deliver 2X the results at half the cost. See how AI marketing can grow your business." 
        />
        <meta name="keywords" content="ai marketing, fractional cmo ai, ai marketing strategy, artificial intelligence marketing, ai enhanced marketing" />
        <link rel="canonical" href="https://zygur.com/services/ai-enhanced-marketing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI-Enhanced Marketing Services",
              "description": "Marketing services leveraging artificial intelligence for better results",
              "provider": {
                "@type": "Person",
                "name": "Aaron West",
                "jobTitle": "Fractional CMO"
              },
              "serviceType": "Marketing Service",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              }
            }
          `}
        </script>
      </Head>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
                Future-Proof Marketing
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              AI-Enhanced Marketing Services by Your Fractional CMO
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              As your <Link href="/" className="text-neon-green hover:underline">fractional CMO</Link>, I leverage 
              cutting-edge AI to deliver enterprise-level marketing at a fraction of the cost. 
              Get twice the results in half the time with AI-enhanced strategies tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Book an AI Strategy Call
                </Button>
              </Link>
            </div>
          </div>

          {/* AI Marketing Advantages */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8">Why AI Transforms Marketing Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-neon-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2X Marketing Output</h3>
                  <p className="text-zinc-400 mb-4">
                    AI tools allow me to produce twice the marketing deliverables in the same timeframe, 
                    accelerating your growth without increasing costs. Get more content, more campaigns, 
                    and more strategic insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">AI-generated content at scale while maintaining quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Rapid campaign iteration and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Multi-channel presence without additional resources</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Intelligence</h3>
                  <p className="text-zinc-400 mb-4">
                    AI analyzes vast amounts of market and customer data to identify patterns humans miss, 
                    enabling more informed and effective marketing decisions based on predictive insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Customer behavior prediction and segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Trend identification and opportunity detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Competitive analysis and market positioning</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
                  <p className="text-zinc-400 mb-4">
                    AI-powered systems constantly monitor performance and automatically adjust strategies 
                    based on real-time data, ensuring your marketing continuously improves without manual intervention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Automated A/B testing and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Performance-based budget allocation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Real-time campaign adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalization at Scale</h3>
                  <p className="text-zinc-400 mb-4">
                    AI enables true 1:1 marketing across thousands of customers, delivering personalized 
                    experiences that significantly improve engagement, conversion, and retention rates.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Individual customer journey optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Dynamic content personalization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Behavioral-based messaging and offers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI Marketing Solutions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">AI-Enhanced Marketing Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="font-semibold mb-3">AI Content Strategy</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Develop a comprehensive content strategy powered by AI that delivers high-quality, 
                  engaging content at scale while maintaining brand voice and strategic focus.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">AI-powered content creation and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">SEO-enhanced blog posts and articles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Automated content distribution across channels</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-3">Predictive Customer Analytics</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Leverage AI to analyze customer behavior and predict future actions, allowing for 
                  proactive marketing strategies that anticipate needs and improve conversion rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Churn prediction and prevention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Customer lifetime value forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Next-best-action recommendations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold mb-3">AI-Powered Campaign Optimization</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Use AI to continuously monitor, test, and optimize marketing campaigns across 
                  channels, ensuring maximum ROI and ongoing performance improvements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Multi-variant testing at scale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Automated bid management for paid media</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Performance-based creative optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Case Study */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">AI Marketing Success Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold mb-3">Lee Heating & Cooling: AI-Enhanced Local Marketing</h3>
                <p className="text-zinc-400 mb-4">
                  Lee HVAC was struggling with inconsistent lead generation and high customer acquisition 
                  costs in a competitive local market. As their 
                  <Link href="/" className="text-neon-green hover:underline"> fractional CMO</Link>, I implemented:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">AI-powered local content strategy targeting neighborhood-specific terms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Predictive lead scoring to prioritize high-value prospects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Automated campaign optimization across Google, Facebook, and email</span>
                  </li>
                </ul>
                <p className="text-sm italic text-zinc-500">
                  "Aaron's AI-enhanced marketing approach transformed our business. We're now getting more qualified 
                  leads at a significantly lower cost than ever before, and our technicians' calendars stay full."
                </p>
                <p className="text-sm font-medium mt-2">— Michael Lee, Owner at Lee Heating & Cooling</p>
              </div>
              <div className="md:col-span-3">
                <div className="bg-zinc-900/70 rounded-lg p-6">
                  <h4 className="font-medium text-center mb-6">Results After 6 Months</h4>
                  <div className="space-y-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold mb-1 text-neon-green">63%</div>
                      <p className="text-sm text-zinc-400">Reduction in Cost Per Lead</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold mb-1 text-neon-green">87%</div>
                      <p className="text-sm text-zinc-400">Increase in Qualified Appointments</p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold mb-1 text-neon-green">43%</div>
                      <p className="text-sm text-zinc-400">Higher Close Rate from Marketing Leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/results" className="inline-flex items-center text-neon-green hover:text-neon-green/80">
                View more AI marketing case studies <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Human + AI Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The Human + AI Advantage</h2>
            <p className="text-zinc-400 mb-8">
              The most powerful marketing combines AI efficiency with human creativity and strategic thinking. 
              As your <Link href="/" className="text-neon-green hover:underline">fractional CMO</Link>, I leverage AI 
              to handle repetitive tasks and data analysis while focusing my expertise on strategy, creative direction, 
              and business alignment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-neon-green/10 to-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">What AI Handles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Data processing and pattern recognition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Content generation and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Campaign testing and performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Routine optimization and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Personalization and segmentation at scale</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">What I Bring as Your Fractional CMO</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Strategic vision and business alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Creative direction and brand guardianship</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Customer insight and emotional intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Strategic decision-making and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Executive leadership and stakeholder management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-neon-green/20 to-blue-500/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your marketing with AI?</h2>
                <p className="text-zinc-400">Schedule a call to explore how AI-enhanced marketing can drive growth for your business.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Your AI Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
