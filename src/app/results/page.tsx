import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, Star, ArrowRight, TrendingUp, BarChart, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResultsPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Client Success Stories
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Proven Results for Growing Businesses
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Real growth metrics from businesses like yours. My AI-enhanced marketing approach 
              consistently delivers exceptional ROI across industries and company sizes.
            </p>
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-orange" />
                </div>
                <span className="text-xs text-zinc-500">Average across clients</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">157%</h2>
              <p className="text-zinc-400">Increase in marketing-attributed revenue</p>
            </div>
            
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-accent-orange" />
                </div>
                <span className="text-xs text-zinc-500">Average across clients</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">42%</h2>
              <p className="text-zinc-400">Reduction in customer acquisition cost</p>
            </div>
            
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-yellow" />
                </div>
                <span className="text-xs text-zinc-500">Average across clients</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">89%</h2>
              <p className="text-zinc-400">Improvement in marketing qualified leads</p>
            </div>
            
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-zinc-500">Average across clients</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">3.2x</h2>
              <p className="text-zinc-400">Return on marketing investment</p>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Case Studies</h2>
            
            <div className="space-y-12">
              <div className="bg-dark-green/60 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-zinc-700/50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2">LEE HEATING & COOLING</div>
                      <div className="text-sm text-zinc-400 mb-4">HVAC Service Provider</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-xl font-semibold mb-4">43% Revenue Growth in 6 Months</h3>
                    <p className="text-zinc-400 mb-6">
                      This B2B software company was struggling with an inefficient sales funnel and inconsistent 
                      lead quality. Their marketing efforts were generating leads, but conversion rates were low
                      and sales cycles were lengthy.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="font-medium">Challenge:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• High CAC ($4,200)</li>
                          <li>• Long sales cycle (68 days)</li>
                          <li>• Poor lead quality</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">Solution:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• AI-enhanced lead scoring</li>
                          <li>• Content journey mapping</li>
                          <li>• Automated nurture flows</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">Results:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• CAC reduced by 36%</li>
                          <li>• Sales cycle shortened to 41 days</li>
                          <li>• 43% revenue growth</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-sm text-zinc-500 italic">
                      "Aaron's AI-enhanced approach transformed our marketing from a cost center to a revenue driver. 
                      His methodical approach delivered results we hadn't been able to achieve with agencies costing twice as much."
                      <div className="mt-2 font-medium text-zinc-400">— Sarah Chen, CEO</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-zinc-700/50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2">DLC FORESTRY</div>
                      <div className="text-sm text-zinc-400 mb-4">Forestry Management</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-xl font-semibold mb-4">124% Increase in ROAS for Paid Channels</h3>
                    <p className="text-zinc-400 mb-6">
                      This sustainable products e-commerce company was experiencing declining returns on their 
                      advertising spend. Despite increasing budgets, their customer acquisition costs were rising 
                      while conversion rates dropped.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="font-medium">Challenge:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• Declining ROAS (1.4x)</li>
                          <li>• Rising CPAs</li>
                          <li>• Ad creative fatigue</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">Solution:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• AI audience targeting</li>
                          <li>• Dynamic creative testing</li>
                          <li>• Customer journey optimization</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">Results:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• ROAS increased to 3.2x</li>
                          <li>• 38% reduction in CPA</li>
                          <li>• 27% higher AOV</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-sm text-zinc-500 italic">
                      "Working with Aaron was transformative for our business. His AI-enhanced approach to marketing 
                      delivered results that were previously unimaginable. Our ad spend now works harder than ever."
                      <div className="mt-2 font-medium text-zinc-400">— Michael Donovan, Marketing Director</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-zinc-700/50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2">EHS, INC</div>
                      <div className="text-sm text-zinc-400 mb-4">Environmental Health & Safety</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-xl font-semibold mb-4">168% More Qualified Leads with 22% Lower Budget</h3>
                    <p className="text-zinc-400 mb-6">
                      This precision manufacturing company had a traditional approach to marketing with heavy 
                      reliance on trade shows and print advertising. They were struggling to adapt to digital 
                      channels and saw declining lead generation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="font-medium">Challenge:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• Digital transformation</li>
                          <li>• Ineffective content strategy</li>
                          <li>• Lack of attribution data</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">Solution:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• Comprehensive digital strategy</li>
                          <li>• AI-generated technical content</li>
                          <li>• Multi-touch attribution</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">Results:</div>
                        <ul className="text-sm text-zinc-400 mt-2 space-y-1">
                          <li>• 168% more qualified leads</li>
                          <li>• 22% reduction in marketing budget</li>
                          <li>• 4.6x increase in content production</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-sm text-zinc-500 italic">
                      "Aaron helped us transition from outdated marketing methods to a data-driven approach powered by AI. 
                      The results speak for themselves - more leads, better quality, and at a lower cost than before."
                      <div className="mt-2 font-medium text-zinc-400">— Robert Jimenez, COO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* By The Numbers */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8">Results By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Performance Improvements</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Lead Generation</span>
                      <span className="text-accent-orange">+127%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Conversion Rate</span>
                      <span className="text-accent-orange">+68%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Marketing ROI</span>
                      <span className="text-accent-orange">+215%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Content Production</span>
                      <span className="text-accent-orange">+380%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Efficiency Gains</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Time-to-Market</span>
                      <span className="text-accent-orange">-74%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Customer Acquisition Cost</span>
                      <span className="text-accent-orange">-42%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-2/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Campaign Development Time</span>
                      <span className="text-accent-orange">-68%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400">Reporting Time</span>
                      <span className="text-accent-orange">-89%</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-[89%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-orange/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to achieve results like these?</h2>
                <p className="text-zinc-400">Let's discuss how my AI-enhanced approach can transform your marketing. Limited availability - only 7 client spots per year.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-zinc-900 hover:bg-dark-green/80 text-white border border-zinc-700 font-medium py-5 px-6">
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
