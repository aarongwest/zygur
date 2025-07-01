import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, LineChart, TrendingUp, BarChart4 } from "lucide-react"
import Link from "next/link"

export default function OptimizationPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Fractional CMO Services
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Growth Optimization
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Continuous improvement driven by data and AI. I help you maximize ROI through 
              systematic testing, analysis, and refinement of your marketing efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-white font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a Strategy Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
              <p className="text-zinc-400 mb-4">
                Move beyond gut feelings. My optimization approach is grounded in comprehensive data 
                analysis, revealing exactly what's working and what needs improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Multi-channel performance tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Customer journey analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Competitor benchmarking</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-zinc-400 mb-4">
                Marketing success isn't a one-time event. I implement systematic processes that 
                ensure your results improve month over month, quarter over quarter.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">AI-powered testing frameworks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Weekly optimization sprints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Performance trend analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                <BarChart4 className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ROI Maximization</h3>
              <p className="text-zinc-400 mb-4">
                Every marketing dollar should generate a return. My optimization approach 
                ensures your budget is allocated to the highest-performing channels and tactics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Budget reallocation modeling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Cost per acquisition reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">Revenue attribution analysis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Optimization Process */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">The Growth Optimization Process</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-orange">1</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Performance Audit</h3>
                  <p className="text-zinc-400">
                    I start by conducting a comprehensive audit of your current marketing performance, 
                    establishing baselines across all channels and identifying key metrics for growth.
                    This data-driven foundation allows us to measure progress with precision.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-orange">2</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Opportunity Identification</h3>
                  <p className="text-zinc-400">
                    Using AI-enhanced analytics, I identify high-potential opportunities for optimization. 
                    This might include underperforming campaigns, untapped audience segments, 
                    conversion bottlenecks, or messaging gaps that can be addressed for rapid improvement.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-orange">3</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Testing & Experimentation</h3>
                  <p className="text-zinc-400">
                    I implement a structured testing program to systematically improve performance. 
                    This includes A/B testing key variables (headlines, offers, visuals, targeting), 
                    with AI helping to generate test variations and analyze results for statistical significance.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-orange">4</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Implementation & Scaling</h3>
                  <p className="text-zinc-400">
                    Winning strategies are rapidly implemented and scaled across relevant channels,
                    while underperforming tactics are refined or replaced. This continuous cycle of 
                    testing, learning, and optimization ensures your marketing becomes increasingly 
                    effective over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Optimization in Action</h2>
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Case Study: B2B SaaS Company</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-zinc-400 mb-4">
                    A B2B software company with $3.5M in annual revenue was struggling 
                    with high customer acquisition costs and inconsistent lead quality. 
                    Their marketing efforts were generating leads, but conversion rates 
                    were low and sales cycles were lengthy.
                  </p>
                  <p className="text-zinc-400 mb-4">
                    Through my growth optimization process, I identified several key opportunities:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Lead scoring system needed refinement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Content was not aligned with buyer journey stages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Ad spend was inefficiently allocated</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Conversion paths contained friction points</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 mb-4 font-medium">Optimization Results:</p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Lead Quality</span>
                        <span className="text-sm">+68%</span>
                      </div>
                      <div className="w-full bg-zinc-700 h-2 rounded-full">
                        <div className="bg-accent-orange h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Conversion Rate</span>
                        <span className="text-sm">+42%</span>
                      </div>
                      <div className="w-full bg-zinc-700 h-2 rounded-full">
                        <div className="bg-accent-orange h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Customer Acquisition Cost</span>
                        <span className="text-sm">-35%</span>
                      </div>
                      <div className="w-full bg-zinc-700 h-2 rounded-full">
                        <div className="bg-accent-orange h-2 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Sales Cycle Length</span>
                        <span className="text-sm">-28%</span>
                      </div>
                      <div className="w-full bg-zinc-700 h-2 rounded-full">
                        <div className="bg-accent-orange h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-400 mt-6">
                    These improvements resulted in a 52% increase in marketing ROI and 
                    contributed to $875,000 in additional annual revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Advantage */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">The AI Optimization Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Traditional Optimization</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">1</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Manual Data Analysis</span>
                      Marketers spend days or weeks gathering and analyzing data from multiple sources.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">2</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Limited Testing</span>
                      Resource constraints limit the number of tests that can be run simultaneously.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">3</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Reactive Adjustments</span>
                      Changes are made after performance issues become apparent.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">4</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Slow Iteration Cycles</span>
                      Testing and optimization cycles typically take months to complete.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">My AI-Enhanced Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0 text-accent-orange">1</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Automated Intelligence</span>
                      AI systems continuously monitor performance across all channels, identifying patterns and opportunities human analysts might miss.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0 text-accent-orange">2</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Multivariate Testing at Scale</span>
                      AI enables testing dozens of variables simultaneously, rapidly identifying winning combinations.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0 text-accent-orange">3</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Predictive Optimization</span>
                      AI identifies potential performance issues before they impact results, enabling proactive adjustments.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0 text-accent-orange">4</span>
                    <p className="text-sm text-zinc-400">
                      <span className="font-medium text-zinc-300 block mb-1">Rapid Improvement Cycles</span>
                      Weekly optimization sprints deliver continuous performance gains rather than quarterly or monthly jumps.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to maximize your marketing ROI?</h2>
                <p className="text-zinc-400">Limited availability - only 7 client spots per year.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-white border-0 font-medium py-5 px-6">
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
