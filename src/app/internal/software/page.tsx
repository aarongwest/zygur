import { PageLayout } from "@/components/layout/page-layout"
import { Target, DollarSign, Clock, TrendingUp, Smartphone, Users, ShoppingCart, Zap, CheckCircle, AlertCircle, Play } from "lucide-react"
import Head from "next/head"

export default function SoftwareDivisionPlan() {
  return (
    <PageLayout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Internal: Software Division Business Plan</title>
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-400 mr-4" />
              <h1 className="text-3xl font-bold">Mission: Software Division</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-400">Primary Objective</h2>
                <p className="text-zinc-300 mb-4">
                  Build a sustainable iOS app portfolio generating $5,000+ monthly recurring revenue 
                  through strategic app development, marketing, and monetization across niche markets.
                </p>
                <div className="bg-zinc-900/60 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Target Timeline:</span>
                    <span className="text-blue-400 font-semibold">12 months to $5K MRR</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-400">Strategic Focus</h2>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Complete and launch existing apps
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Develop high-value market research tool
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Focus on subscription-based revenue models
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Target underserved professional niches
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Current App Portfolio */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Smartphone className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Current App Portfolio Status</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-400">Sheepfold</h3>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">Pastoral Care App</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Status:</span>
                    <span className="text-sm font-semibold text-green-400">Live on App Store</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Market:</span>
                    <span className="text-sm font-semibold">Churches/Pastors</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Revenue Model:</span>
                    <span className="text-sm font-semibold">Subscription</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Priority:</span>
                    <span className="text-sm font-semibold text-yellow-400">Marketing Focus</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-400">BibleKit</h3>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">AI-Supported Bible App</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Status:</span>
                    <span className="text-sm font-semibold text-yellow-400">95% Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Market:</span>
                    <span className="text-sm font-semibold">Bible Study Groups</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Revenue Model:</span>
                    <span className="text-sm font-semibold">Freemium + AI Credits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Priority:</span>
                    <span className="text-sm font-semibold text-green-400">Launch Q1</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-400">Safety Meeting</h3>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">Construction Safety App</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Status:</span>
                    <span className="text-sm font-semibold text-yellow-400">90% Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Market:</span>
                    <span className="text-sm font-semibold">Construction Companies</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Revenue Model:</span>
                    <span className="text-sm font-semibold">B2B Subscription</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Priority:</span>
                    <span className="text-sm font-semibold text-green-400">Launch Q2</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-400">Market Scout</h3>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">Marketplace Research Tool</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Status:</span>
                    <span className="text-sm font-semibold text-red-400">Concept Phase</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Market:</span>
                    <span className="text-sm font-semibold">E-commerce Sellers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Revenue Model:</span>
                    <span className="text-sm font-semibold">Premium Subscription</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Priority:</span>
                    <span className="text-sm font-semibold text-purple-400">High Potential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Projections Table */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <DollarSign className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Revenue Projections by App</h2>
            </div>
            <div className="bg-zinc-900/60 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">App</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Target Market</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Launch Date</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Pricing</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Month 6 Users</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Month 6 MRR</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Month 12 MRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-blue-400">Sheepfold</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Churches (50K+ in US)</td>
                      <td className="px-6 py-4 text-center text-sm text-green-400">Live</td>
                      <td className="px-6 py-4 text-center text-sm">$9.99/month</td>
                      <td className="px-6 py-4 text-center text-sm">150 churches</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$1,499</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$2,997</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-blue-400">BibleKit</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Bible Study Groups</td>
                      <td className="px-6 py-4 text-center text-sm text-yellow-400">Q3 2025</td>
                      <td className="px-6 py-4 text-center text-sm">$9.99/month</td>
                      <td className="px-6 py-4 text-center text-sm">200 users</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$1,998</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$3,996</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-blue-400">Safety Meeting</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">Construction Companies</td>
                      <td className="px-6 py-4 text-center text-sm text-yellow-400">Q4 2025</td>
                      <td className="px-6 py-4 text-center text-sm">$9.99/month</td>
                      <td className="px-6 py-4 text-center text-sm">125 companies</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$1,249</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$2,498</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-medium text-blue-400">Market Scout</td>
                      <td className="px-6 py-4 text-sm text-zinc-400">E-commerce Sellers</td>
                      <td className="px-6 py-4 text-center text-sm text-red-400">Q3 2025</td>
                      <td className="px-6 py-4 text-center text-sm">$99/month</td>
                      <td className="px-6 py-4 text-center text-sm">15 sellers</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$1,485</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-green-400">$2,970</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-zinc-800">
                    <tr>
                      <td className="px-6 py-4 font-bold text-blue-400" colSpan={5}>TOTAL PORTFOLIO MRR</td>
                      <td className="px-6 py-4 text-center font-bold text-green-400">$6,231</td>
                      <td className="px-6 py-4 text-center font-bold text-green-400">$12,461</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* Development Timeline */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Development & Launch Timeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <Play className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-semibold">Q3 2025: Current Focus</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Complete BibleKit (5% remaining)</li>
                  <li>• Launch BibleKit to App Store</li>
                  <li>• Intensify Sheepfold marketing</li>
                  <li>• Begin Market Scout development</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Target MRR:</span>
                    <span className="text-xs font-semibold text-green-400">$2,500</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold">Q4 2025: Launch Phase</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Safety Meeting launch</li>
                  <li>• BibleKit user acquisition</li>
                  <li>• Market Scout MVP development</li>
                  <li>• Sheepfold enterprise features</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Target MRR:</span>
                    <span className="text-xs font-semibold text-green-400">$4,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="font-semibold">Q1 2026: Growth Phase</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Market Scout beta testing</li>
                  <li>• All apps feature expansion</li>
                  <li>• User retention optimization</li>
                  <li>• Marketing automation setup</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Target MRR:</span>
                    <span className="text-xs font-semibold text-green-400">$6,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-semibold">Q2-Q3 2026: Scale</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Market Scout full launch</li>
                  <li>• All apps feature-complete</li>
                  <li>• Advanced marketing automation</li>
                  <li>• Consider additional apps</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between">
                    <span className="text-xs text-zinc-500">Target MRR:</span>
                    <span className="text-xs font-semibold text-green-400">$8,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Scout Deep Dive */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <ShoppingCart className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold">Market Scout: High-Value Opportunity</h2>
            </div>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Core Features</h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Multi-Platform Scanning</p>
                        <p className="text-sm text-zinc-400">Etsy, eBay, Amazon, Facebook Marketplace</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Trend Analysis</p>
                        <p className="text-sm text-zinc-400">AI-powered trend detection and forecasting</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Revenue Forecasting</p>
                        <p className="text-sm text-zinc-400">Predictive analytics for product potential</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Competition Analysis</p>
                        <p className="text-sm text-zinc-400">Seller performance and pricing insights</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Market Opportunity</h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-900/60 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-400">Target Market Size:</span>
                        <span className="font-semibold text-green-400">2M+ sellers</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-zinc-400">Average Tool Spend:</span>
                        <span className="font-semibold text-green-400">$200/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Market Penetration Goal:</span>
                        <span className="font-semibold text-green-400">0.1% (2,000 users)</span>
                      </div>
                    </div>
                    <div className="bg-zinc-900/60 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-purple-400">Revenue Potential</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Year 1 (100 users @ $99/mo):</span>
                          <span className="font-semibold text-green-400">$118K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Year 2 (500 users @ $99/mo):</span>
                          <span className="font-semibold text-green-400">$594K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Year 3 (1,000 users @ $99/mo):</span>
                          <span className="font-semibold text-green-400">$1.2M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">90-Day Action Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Days 1-30: Complete & Launch</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Finish BibleKit development (5% remaining)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Submit BibleKit to App Store</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Launch Sheepfold marketing campaign</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Complete Safety Meeting app (10% remaining)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Days 31-60: Market & Develop</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Launch Safety Meeting app</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Begin Market Scout development</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Optimize all app store listings</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Implement user feedback systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Days 61-90: Scale & Optimize</h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Market Scout MVP completion</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Analyze user acquisition costs</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Implement retention strategies</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Plan next app development</span>
                  </li>
                </ul>
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
                <div className="text-3xl font-bold text-green-400 mb-2">$5,000+</div>
                <div className="text-sm text-zinc-400">Monthly Recurring Revenue Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-sm text-zinc-400">Apps in Portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-sm text-zinc-400">Months to Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$1.2M</div>
                <div className="text-sm text-zinc-400">Market Scout Potential (Year 3)</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-700">
              <h3 className="font-semibold mb-4 text-blue-400">Key Success Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Complete existing apps quickly and efficiently
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Focus on subscription-based revenue models
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Target underserved professional niches
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Prioritize Market Scout as highest revenue potential
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Implement strong user retention strategies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Scale marketing efforts based on app performance
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
