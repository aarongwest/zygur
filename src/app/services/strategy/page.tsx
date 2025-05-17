import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, BrainCircuit } from "lucide-react"
import Link from "next/link"

export default function StrategyPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
                Fractional CMO Services
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Strategic Marketing Leadership
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              A comprehensive marketing strategy aligns your business goals with effective channels and messaging.
              As your fractional CMO, I develop data-driven strategies that create sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a Strategy Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Strategy Process */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">The Strategy Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-neon-green">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Analysis</h3>
                <p className="text-zinc-400 mb-4">
                  I begin by deeply understanding your business, market position, and goals. This involves 
                  comprehensive data analysis, competitive research, and customer insights gathering.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Market and competitive analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Customer journey mapping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Performance baseline establishment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-neon-green">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy Formulation</h3>
                <p className="text-zinc-400 mb-4">
                  Using AI-enhanced analysis tools, I develop a comprehensive marketing strategy 
                  tailored to your unique business needs and growth objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Channel strategy & prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Messaging & positioning framework</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Budget allocation & ROI projections</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-neon-green">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation Planning</h3>
                <p className="text-zinc-400 mb-4">
                  I create detailed execution roadmaps with clear KPIs, timelines, and 
                  resource allocations to ensure effective strategy implementation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Tactical execution roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">KPI framework development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Resource planning & team alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Strategic Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">AI-Enhanced Strategy</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  I leverage advanced AI tools to analyze market trends, competitor activities, and 
                  consumer behaviors at a depth and speed impossible through traditional methods.
                </p>
                <p className="text-zinc-400">
                  This data-driven approach ensures your strategy is built on comprehensive insights 
                  rather than assumptions, significantly increasing your chances of success.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Executive-Level Strategy</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  Gain access to C-suite marketing expertise without the cost of a full-time executive. 
                  I bring the same strategic thinking and leadership that drives enterprise growth.
                </p>
                <p className="text-zinc-400">
                  Your strategy isn't developed by junior marketers but by a seasoned CMO with a track 
                  record of delivering results for businesses just like yours.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Tailored to Your Business</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  Unlike cookie-cutter agency strategies, every plan I develop is custom-built for your 
                  specific business goals, market position, and resource constraints.
                </p>
                <p className="text-zinc-400">
                  This bespoke approach ensures your marketing strategy perfectly aligns with your 
                  business objectives and delivers the specific outcomes you need.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Implementation Support</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  I don't just deliver a strategy document and walk away. I partner with you to ensure 
                  effective implementation, providing guidance, training, and support along the way.
                </p>
                <p className="text-zinc-400">
                  This ongoing support maximizes your team's effectiveness and ensures your strategy 
                  translates into tangible business results.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-neon-green/20 to-blue-500/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your marketing strategy?</h2>
                <p className="text-zinc-400">Limited availability - only 7 client spots per year.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-medium py-5 px-6">
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
