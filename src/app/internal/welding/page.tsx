import { PageLayout } from "@/components/layout/page-layout"
import { Target, DollarSign, Clock, TrendingUp, Zap, CheckCircle, AlertCircle, Car, ShoppingCart, Wrench, BarChart3, Users, Star } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Internal: Welding Division Business Plan",
  robots: "noindex, nofollow"
}

export default function WeldingDivisionPlan() {
  return (
    <PageLayout>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-orange-400 mr-4" />
              <h1 className="text-3xl font-bold">Mission: Welding Division</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-orange-400">Primary Objective</h2>
                <p className="text-zinc-300 mb-4">
                  Create and sell custom Porsche 911 cat-back exhaust systems through eBay, 
                  focusing on the most common 911 models to maximize market penetration and 
                  establish a sustainable revenue stream.
                </p>
                <div className="bg-zinc-900/60 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Priority Level:</span>
                    <span className="text-orange-400 font-semibold">Tertiary (After Software & 3D Printing)</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 text-orange-400">Strategic Focus</h2>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center">
                    <Car className="w-4 h-4 text-red-400 mr-2" />
                    Target most common 911 models first
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 text-red-400 mr-2" />
                    Focus on quality and performance
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 text-red-400 mr-2" />
                    Build reputation through eBay sales
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 text-red-400 mr-2" />
                    Establish repeat customer base
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold">Market Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Car className="w-8 h-8 text-orange-400 mr-3" />
                  <h3 className="text-lg font-semibold text-orange-400">Target Market</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Vehicle:</span>
                    <span className="text-sm font-semibold text-green-400">Porsche 911</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Focus Models:</span>
                    <span className="text-sm font-semibold text-yellow-400">Most Common Variants</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Customer Base:</span>
                    <span className="text-sm font-semibold text-purple-400">Enthusiasts & Tuners</span>
                  </div>
                </div>
                <div className="mt-4 bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-400">
                    <strong>Strategy:</strong> Focus on 996, 997, and 991 generations as they represent 
                    the largest market segment with active modification communities.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-orange-400 mr-3" />
                  <h3 className="text-lg font-semibold text-orange-400">Sales Platform</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Primary Platform:</span>
                    <span className="text-sm font-semibold text-green-400">eBay</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Audience:</span>
                    <span className="text-sm font-semibold text-yellow-400">Global Reach</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Competition:</span>
                    <span className="text-sm font-semibold text-red-400">High</span>
                  </div>
                </div>
                <div className="mt-4 bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-400">
                    <strong>Advantage:</strong> Custom fabrication allows for competitive pricing 
                    while maintaining quality standards that match or exceed OEM alternatives.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-orange-400 mr-3" />
                  <h3 className="text-lg font-semibold text-orange-400">Revenue Potential</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Price Range:</span>
                    <span className="text-sm font-semibold text-green-400">$800 - $1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Material Cost:</span>
                    <span className="text-sm font-semibold text-yellow-400">$200 - $400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Profit Margin:</span>
                    <span className="text-sm font-semibold text-purple-400">60-75%</span>
                  </div>
                </div>
                <div className="mt-4 bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-400">
                    <strong>Target:</strong> 2-4 units per month initially, scaling to 8-12 units 
                    per month as reputation and customer base grows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Strategy */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Wrench className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold">Product Strategy</h2>
            </div>
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Priority Models</h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-900/60 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-orange-400">996 Generation (1997-2005)</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Carrera, Carrera S, Turbo variants</li>
                        <li>• Large aftermarket community</li>
                        <li>• Most affordable entry point</li>
                        <li>• High modification frequency</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/60 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-orange-400">997 Generation (2004-2012)</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Carrera, Carrera S, Turbo, GT3 variants</li>
                        <li>• Peak production numbers</li>
                        <li>• Active enthusiast market</li>
                        <li>• Premium pricing potential</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Product Features</h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-900/60 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-orange-400">Performance Benefits</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• Improved exhaust flow and sound</li>
                        <li>• Weight reduction vs. stock system</li>
                        <li>• Enhanced performance characteristics</li>
                        <li>• Premium stainless steel construction</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/60 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-orange-400">Quality Standards</h4>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        <li>• TIG welded joints for durability</li>
                        <li>• Mandrel bent tubing for optimal flow</li>
                        <li>• Corrosion resistant materials</li>
                        <li>• Professional finish and fitment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Projections */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold">Revenue Projections</h2>
            </div>
            <div className="bg-zinc-900/60 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Timeline</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Units/Month</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Avg Price</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Monthly Revenue</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Monthly Profit</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Annual Profit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-orange-400">Months 1-3 (Startup)</td>
                      <td className="px-6 py-4 text-center text-sm">1-2</td>
                      <td className="px-6 py-4 text-center text-sm">$1,000</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$1,500</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$900</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$10,800</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-orange-400">Months 4-6 (Growth)</td>
                      <td className="px-6 py-4 text-center text-sm">3-4</td>
                      <td className="px-6 py-4 text-center text-sm">$1,100</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$3,850</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$2,500</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$30,000</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-orange-400">Months 7-12 (Established)</td>
                      <td className="px-6 py-4 text-center text-sm">6-8</td>
                      <td className="px-6 py-4 text-center text-sm">$1,200</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$8,400</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$5,600</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$67,200</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-orange-400">Year 2+ (Mature)</td>
                      <td className="px-6 py-4 text-center text-sm">10-12</td>
                      <td className="px-6 py-4 text-center text-sm">$1,300</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$14,300</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$9,900</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$118,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Implementation Plan */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold">Implementation Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Phase 1: Setup (Months 1-2)</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Research most popular 911 models and exhaust preferences</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Source materials and establish supplier relationships</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Create first prototype for 996 Carrera</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Set up eBay seller account and initial listings</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Phase 2: Launch (Months 3-6)</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Launch first products on eBay marketplace</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Focus on building positive feedback and reputation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Expand to 997 generation exhaust systems</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Optimize production processes and quality control</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Phase 3: Scale (Months 7-12)</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Increase production capacity and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Develop premium product lines for GT models</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Establish repeat customer relationships</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Consider expansion to other Porsche models</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold">Success Metrics & KPIs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$5,600</div>
                <div className="text-sm text-zinc-400">Monthly Profit Target (Year 1)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">8</div>
                <div className="text-sm text-zinc-400">Units Per Month (Established)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">70%</div>
                <div className="text-sm text-zinc-400">Target Profit Margin</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$118K</div>
                <div className="text-sm text-zinc-400">Annual Profit Potential (Year 2)</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-700">
              <h3 className="font-semibold mb-4 text-orange-400">Key Success Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
                    Focus on most common 911 models for maximum market
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
                    Maintain high quality standards and professional finish
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
                    Build strong eBay reputation through customer satisfaction
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
                    Competitive pricing while maintaining profit margins
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
                    Efficient production processes to scale operations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
                    Launch after software division is generating revenue
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
