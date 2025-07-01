import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, Building, BarChart, Users, Megaphone } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function B2BFractionalCMOPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional CMO for B2B Companies | B2B Marketing Leadership | Zygur</title>
        <meta 
          name="description" 
          content="B2B marketing requires specialized expertise. Our fractional CMO services for B2B companies blend technical knowledge with strategic marketing to accelerate growth and optimize your customer acquisition process." 
        />
        <meta name="keywords" content="fractional cmo for b2b, b2b marketing leadership, b2b marketing strategy, hire marketing executive, b2b marketing help" />
        <link rel="canonical" href="https://zygur.com/services/b2b-marketing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "B2B Fractional CMO Services",
              "description": "Expert marketing leadership for B2B companies",
              "provider": {
                "@type": "Person",
                "name": "Aaron West"
              },
              "serviceType": "Fractional CMO",
              "audience": {
                "@type": "BusinessAudience",
                "audienceType": "B2B Companies"
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
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                B2B-Focused Marketing Leadership
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Fractional CMO for B2B Companies
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              B2B marketing requires specialized expertise that balances technical knowledge with 
              strategic marketing. As your <Link href="/" className="text-accent-orange hover:underline">fractional CMO</Link>, 
              I bring both to accelerate your sales pipeline and optimize customer acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a B2B Strategy Call
                </Button>
              </Link>
            </div>
          </div>

          {/* B2B Challenges Section */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">B2B Marketing Challenges Solved</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-3">Complex Sales Cycles</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  B2B purchase decisions often involve multiple stakeholders and lengthy consideration phases. 
                  My approach creates a strategic marketing framework that nurtures prospects throughout 
                  extended sales cycles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Multi-touch attribution modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Stakeholder journey mapping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Sales enablement content strategy</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-3">Lead Quality vs. Quantity</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  B2B companies often struggle with generating qualified leads rather than high volumes of 
                  poorly-qualified prospects. My approach focuses on quality lead generation that delivers 
                  higher conversion rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">AI-enhanced lead scoring systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Intent-based targeting strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Account-based marketing programs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-3">Technical Marketing Expertise</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  B2B marketing often requires explaining complex products or services to different audience 
                  segments. I bring the ability to translate technical features into compelling benefit narratives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Technical content development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Persona-specific messaging frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Feature-to-benefit transformation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* B2B-Specific Strategy */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">B2B Fractional CMO Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Strategic Marketing Planning</h3>
                <p className="text-zinc-400 mb-4">
                  A comprehensive B2B marketing strategy aligned with your sales goals, target accounts, 
                  and business objectives. Unlike cookie-cutter approaches, I develop custom strategies 
                  based on your specific industry, competitive landscape, and growth targets.
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">ICP Development</p>
                      <p className="text-sm text-zinc-400">Creating detailed ideal customer profiles to guide targeting</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Channel Prioritization</p>
                      <p className="text-sm text-zinc-400">Identifying the most effective B2B marketing channels</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Competitive Positioning</p>
                      <p className="text-sm text-zinc-400">Establishing your unique value proposition in the market</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Content & Thought Leadership</h3>
                <p className="text-zinc-400 mb-4">
                  Strategic content development that positions your company as an authority in your 
                  industry. B2B buying decisions are heavily influenced by educational content that 
                  demonstrates expertise and builds trust.
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">AI-Enhanced Content Strategy</p>
                      <p className="text-sm text-zinc-400">Creating high-value content at scale while maintaining quality</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Industry Authority Building</p>
                      <p className="text-sm text-zinc-400">Establishing your executives as industry thought leaders</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Content ROI Measurement</p>
                      <p className="text-sm text-zinc-400">Tracking content performance through the sales funnel</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Demand Generation</h3>
                <p className="text-zinc-400 mb-4">
                  Strategic lead generation and nurturing programs designed specifically for B2B sales 
                  cycles. My approach integrates marketing automation with personalized touchpoints 
                  to move prospects through your pipeline.
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Account-Based Marketing</p>
                      <p className="text-sm text-zinc-400">Targeted campaigns for high-value prospect accounts</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Marketing Automation</p>
                      <p className="text-sm text-zinc-400">Scaled nurturing programs with personalized elements</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sales & Marketing Alignment</p>
                      <p className="text-sm text-zinc-400">Creating seamless handoffs between marketing and sales</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Performance Measurement</h3>
                <p className="text-zinc-400 mb-4">
                  Comprehensive B2B marketing analytics that go beyond vanity metrics to measure what 
                  matters: pipeline contribution, revenue influence, and customer acquisition costs.
                </p>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Full-Funnel Attribution</p>
                      <p className="text-sm text-zinc-400">Tracking marketing influence throughout the B2B buyer journey</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">KPI Dashboard Development</p>
                      <p className="text-sm text-zinc-400">Creating executive-level visibility into marketing performance</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Continuous Optimization</p>
                      <p className="text-sm text-zinc-400">Iterative improvement based on performance data</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* B2B Success Stories */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">B2B Success Stories</h2>
            <div className="mb-8 pb-8 border-b border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                  <Megaphone className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">EHS, Inc. - Enterprise Software</h3>
                  <p className="text-sm text-zinc-500">B2B SaaS Company</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="font-medium mb-3">Challenge</h4>
                  <p className="text-zinc-400 mb-4">
                    EHS was struggling with an inefficient marketing-to-sales handoff, resulting in lost 
                    opportunities and lengthy sales cycles. Their technical team created excellent products 
                    but struggled to communicate value effectively to prospects.
                  </p>
                  <h4 className="font-medium mb-3">Solution</h4>
                  <p className="text-zinc-400 mb-4">
                    As their <Link href="/" className="text-accent-orange hover:underline">fractional CMO</Link>, I implemented:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">AI-enhanced lead scoring to prioritize high-intent prospects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Persona-based content strategy with technical and business tracks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Sales enablement program with clear handoff protocols</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Results</h4>
                  <div className="space-y-4">
                    <div className="bg-zinc-900/70 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold mb-1 text-accent-orange">168%</div>
                      <p className="text-sm text-zinc-400">Increase in qualified leads</p>
                    </div>
                    <div className="bg-zinc-900/70 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold mb-1 text-accent-orange">41%</div>
                      <p className="text-sm text-zinc-400">Shorter sales cycle</p>
                    </div>
                    <div className="bg-zinc-900/70 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold mb-1 text-accent-orange">$875K</div>
                      <p className="text-sm text-zinc-400">Additional annual revenue</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-sm italic text-zinc-500">
                  "Aaron helped us transform how we talk about our complex products to different stakeholders. 
                  His AI-enhanced approach to content creation and lead qualification dramatically improved our 
                  sales pipeline quality and shortened our sales cycles."
                </p>
                <p className="text-sm font-medium mt-2">— Robert Jimenez, COO at EHS, Inc.</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/results" className="inline-flex items-center text-accent-orange hover:text-accent-orange">
                View more B2B case studies <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-orange/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your B2B marketing?</h2>
                <p className="text-zinc-400">Schedule a strategy call to discuss how a fractional CMO can help your specific B2B business needs.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-zinc-900 hover:bg-zinc-900/80 text-white border border-zinc-700 font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Your Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
