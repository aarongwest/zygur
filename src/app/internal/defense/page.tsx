import { PageLayout } from "@/components/layout/page-layout"
import { Target, DollarSign, Clock, TrendingUp, Package, Users, ShoppingCart, Zap } from "lucide-react"
import Head from "next/head"

export default function FirearmsAccessoriesPlan() {
  return (
    <PageLayout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Internal: Firearms Accessories Business Plan</title>
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/10 rounded-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-accent-orange mr-4" />
              <h1 className="text-3xl font-bold">Mission: Firearms Accessories Division</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-accent-orange">Primary Objective</h2>
                <p className="text-zinc-300 mb-4">
                  Generate consistent $1,000+ weekly net profit through 3D printed firearms accessories 
                  using our single Bambu Labs P1P printer operating 15 hours daily, 7 days per week.
                </p>
                <div className="bg-zinc-900/60 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Target Timeline:</span>
                    <span className="text-accent-orange font-semibold">60 Days to $4K+/month</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 text-accent-orange">Strategic Focus</h2>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-accent-yellow mr-2" />
                    High-margin basic accessories only
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-accent-yellow mr-2" />
                    Direct-to-consumer sales channels
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-accent-yellow mr-2" />
                    Community-driven marketing approach
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-accent-yellow mr-2" />
                    Scale through additional printers as demand grows
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Priority Products Table */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Package className="w-6 h-6 text-accent-orange mr-3" />
              <h2 className="text-2xl font-bold">Priority Products - Start Here</h2>
            </div>
            <div className="bg-zinc-900/60 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Application</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Print Time</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Material Cost</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Sell Price</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Profit/Unit</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Daily Volume</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-accent-orange">AR-15 Grips</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Ergonomic pistol grip replacement</td>
                      <td className="px-6 py-4 text-center text-sm">3 hours</td>
                      <td className="px-6 py-4 text-center text-sm">$2.50</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$25</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$22.50</td>
                      <td className="px-6 py-4 text-center text-sm">5 units</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-accent-orange">Rail Covers (4-pack)</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Protect hands from hot rails</td>
                      <td className="px-6 py-4 text-center text-sm">2 hours</td>
                      <td className="px-6 py-4 text-center text-sm">$1.75</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$18</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$16.25</td>
                      <td className="px-6 py-4 text-center text-sm">7 units</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-accent-orange">Magazine Extensions</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">+2/+3 round capacity</td>
                      <td className="px-6 py-4 text-center text-sm">1.5 hours</td>
                      <td className="px-6 py-4 text-center text-sm">$1.25</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$15</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$13.75</td>
                      <td className="px-6 py-4 text-center text-sm">10 units</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-accent-orange">Trigger Guards</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Enhanced trigger guard</td>
                      <td className="px-6 py-4 text-center text-sm">2.5 hours</td>
                      <td className="px-6 py-4 text-center text-sm">$2.00</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$22</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$20.00</td>
                      <td className="px-6 py-4 text-center text-sm">6 units</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-accent-orange">Scope Ring Spacers</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Optic height adjustment</td>
                      <td className="px-6 py-4 text-center text-sm">1 hour</td>
                      <td className="px-6 py-4 text-center text-sm">$0.75</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$12</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$11.25</td>
                      <td className="px-6 py-4 text-center text-sm">15 units</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-zinc-800">
                    <tr>
                      <td className="px-6 py-4 font-bold text-accent-orange" colSpan={4}>DAILY TOTALS</td>
                      <td className="px-6 py-4 text-center font-bold text-green-400">$92</td>
                      <td className="px-6 py-4 text-center font-bold text-green-400">$83.75</td>
                      <td className="px-6 py-4 text-center font-bold">43 units</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* Sales Channels Comparison */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <ShoppingCart className="w-6 h-6 text-accent-orange mr-3" />
              <h2 className="text-2xl font-bold">Sales Channel Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-accent-orange">Reddit GAFS</h3>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Daily Volume:</span>
                    <span className="text-sm font-semibold">20-30 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Weekly Revenue:</span>
                    <span className="text-sm font-semibold text-green-400">$3,500-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Fees:</span>
                    <span className="text-sm font-semibold text-green-400">0%</span>
                  </div>
                  <div className="pt-2 border-t border-zinc-700">
                    <p className="text-xs text-zinc-500">244K members, direct sales, high trust</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-accent-orange">Etsy</h3>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Daily Volume:</span>
                    <span className="text-sm font-semibold">10-15 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Weekly Revenue:</span>
                    <span className="text-sm font-semibold text-green-400">$1,500-2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Fees:</span>
                    <span className="text-sm font-semibold text-yellow-400">6.5%</span>
                  </div>
                  <div className="pt-2 border-t border-zinc-700">
                    <p className="text-xs text-zinc-500">Built-in traffic, easy setup</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-accent-orange">eBay</h3>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Daily Volume:</span>
                    <span className="text-sm font-semibold">8-12 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Weekly Revenue:</span>
                    <span className="text-sm font-semibold text-green-400">$1,200-2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Fees:</span>
                    <span className="text-sm font-semibold text-red-400">13%</span>
                  </div>
                  <div className="pt-2 border-t border-zinc-700">
                    <p className="text-xs text-zinc-500">Large audience, auction options</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-accent-orange">GunBroker</h3>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Daily Volume:</span>
                    <span className="text-sm font-semibold">5-8 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Weekly Revenue:</span>
                    <span className="text-sm font-semibold text-green-400">$800-1,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Fees:</span>
                    <span className="text-sm font-semibold text-yellow-400">6%</span>
                  </div>
                  <div className="pt-2 border-t border-zinc-700">
                    <p className="text-xs text-zinc-500">Firearms-focused, premium pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Timeline */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-accent-orange mr-3" />
              <h2 className="text-2xl font-bold">Production Timeline & Milestones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center mr-3">
                    <span className="text-accent-orange font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Week 1-2: Proof of Concept</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Focus on 3 core products</li>
                  <li>• 22 units/day target</li>
                  <li>• $450 daily revenue</li>
                  <li>• Build Reddit reputation</li>
                  <li>• Test print quality/timing</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Weekly Target:</span>
                    <span className="text-xs font-semibold text-green-400">$3,150</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center mr-3">
                    <span className="text-accent-orange font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Week 3-8: Scale Up</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Add all 10 product types</li>
                  <li>• 40-50 units/day target</li>
                  <li>• $700-900 daily revenue</li>
                  <li>• Launch Etsy & eBay</li>
                  <li>• Optimize production flow</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Weekly Target:</span>
                    <span className="text-xs font-semibold text-green-400">$4,900-6,300</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center mr-3">
                    <span className="text-accent-orange font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Month 3+: Expansion</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Add 2nd P1P printer</li>
                  <li>• 80-100 units/day capacity</li>
                  <li>• $1,400-1,800 daily revenue</li>
                  <li>• Launch GunBroker</li>
                  <li>• Consider custom orders</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Weekly Target:</span>
                    <span className="text-xs font-semibold text-green-400">$9,800-12,600</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Material & Startup Costs */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <DollarSign className="w-6 h-6 text-accent-orange mr-3" />
              <h2 className="text-2xl font-bold">Material Requirements & Startup Costs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-accent-orange">Recommended Filaments</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
                    <div>
                      <span className="font-medium">PLA+</span>
                      <p className="text-xs text-zinc-400">Most items - strong, easy to print</p>
                    </div>
                    <span className="font-semibold text-green-400">$25/kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
                    <div>
                      <span className="font-medium">PETG</span>
                      <p className="text-xs text-zinc-400">High-stress items - chemical resistant</p>
                    </div>
                    <span className="font-semibold text-green-400">$30/kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
                    <div>
                      <span className="font-medium">ABS</span>
                      <p className="text-xs text-zinc-400">Outdoor items - heat resistant</p>
                    </div>
                    <span className="font-semibold text-green-400">$28/kg</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-accent-orange">Color Demand Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-black rounded mr-3"></div>
                      <span>Black</span>
                    </div>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-700 rounded mr-3"></div>
                      <span>FDE/Tan</span>
                    </div>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-700 rounded mr-3"></div>
                      <span>OD Green</span>
                    </div>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-500 rounded mr-3"></div>
                      <span>Gray</span>
                    </div>
                    <span className="font-semibold">15%</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-700">
                  <h4 className="font-semibold mb-3 text-accent-orange">Startup Investment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Filament Inventory (20kg):</span>
                      <span>$500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Packaging Supplies:</span>
                      <span>$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Shipping Materials:</span>
                      <span>$150</span>
                    </div>
                    <div className="flex justify-between font-semibold text-accent-orange border-t border-zinc-700 pt-2">
                      <span>Total Initial Investment:</span>
                      <span>$850</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold">Success Metrics & KPIs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$1,000+</div>
                <div className="text-sm text-zinc-400">Weekly Net Profit Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">43</div>
                <div className="text-sm text-zinc-400">Daily Units (Phase 1)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15</div>
                <div className="text-sm text-zinc-400">Hours Daily Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60</div>
                <div className="text-sm text-zinc-400">Days to Full Scale</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-700">
              <h3 className="font-semibold mb-4 text-accent-orange">Key Success Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Quality Control: Consistent layer adhesion, proper infill
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Fast Turnaround: Ship within 24-48 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Customer Service: Respond quickly to questions
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Competitive Pricing: Match or beat injection-molded alternatives
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Build Reputation: Start with Reddit to build flair/reviews
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Scale Smart: Add printers based on proven demand
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
