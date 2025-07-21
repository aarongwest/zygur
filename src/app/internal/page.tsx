import { PageLayout } from "@/components/layout/page-layout"
import { Target, DollarSign, Clock, TrendingUp, Smartphone, Wrench, Zap, CheckCircle, AlertCircle, ArrowRight, Calendar, BarChart3 } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

export default function InternalDashboard() {
  return (
    <PageLayout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Internal: Business Strategy Dashboard</title>
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-400 mr-4" />
              <h1 className="text-3xl font-bold">Business Strategy Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-400">Current Situation</h2>
                <p className="text-zinc-300 mb-4">
                  Zygur Technologies Corp has significant untapped potential across multiple divisions. 
                  The software division has nearly complete iOS apps ready for launch, while manufacturing 
                  capabilities in 3D printing and welding are ready for monetization.
                </p>
                <div className="bg-zinc-900/60 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Goal:</span>
                    <span className="text-green-400 font-semibold">$1,000/week net profit consistently</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-400">Strategic Focus</h2>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    <strong>ONE THING AT A TIME</strong> - Sequential focus for speed
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Complete each app before starting the next
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Build sustainable recurring revenue first
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    Manufacturing divisions ONLY after $4K+ MRR
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Division Analysis Summary */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Zygur Division Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Software Division */}
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">Software Division</h3>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">iOS App Portfolio</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Current Apps:</span>
                    <span className="text-sm font-semibold text-green-400">4 Apps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Status:</span>
                    <span className="text-sm font-semibold text-yellow-400">1 Live, 2 Near Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Potential:</span>
                    <span className="text-sm font-semibold text-purple-400">$5K+ MRR</span>
                  </div>
                </div>
                <div className="bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-400">
                    <strong>Assessment:</strong> Highest priority. Existing development capabilities 
                    with subscription revenue model. Market Scout has $1.2M potential.
                  </p>
                </div>
              </div>

              {/* 3D Printing Division */}
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">3D Printing Division</h3>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">Firearms Accessories</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Capabilities:</span>
                    <span className="text-sm font-semibold text-green-400">Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Market:</span>
                    <span className="text-sm font-semibold text-yellow-400">Firearms Accessories</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Status:</span>
                    <span className="text-sm font-semibold text-red-400">Not Marketed</span>
                  </div>
                </div>
                <div className="bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-400">
                    <strong>Assessment:</strong> Secondary priority. Existing 3D printing 
                    capabilities ready for online sales.
                  </p>
                </div>
              </div>

              {/* Welding Division */}
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">Welding Division</h3>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
                <p className="text-sm text-zinc-400 mb-4">Porsche 911 Exhausts</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Unit Price:</span>
                    <span className="text-sm font-semibold text-green-400">$800-$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Monthly Profit:</span>
                    <span className="text-sm font-semibold text-yellow-400">$5,600 (Year 1)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-400">Annual Potential:</span>
                    <span className="text-sm font-semibold text-purple-400">$118K (Year 2)</span>
                  </div>
                </div>
                <div className="bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-400">
                    <strong>Assessment:</strong> Tertiary priority. Focus on most common 
                    911 models for maximum market penetration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Recommendation */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
                <h2 className="text-2xl font-bold">Strategic Recommendation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Primary Focus</h3>
                  <p className="text-sm text-zinc-300">
                    <strong>iOS App Portfolio</strong><br />
                    Highest potential for recurring revenue with existing development capabilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">Revenue Target</h3>
                  <p className="text-sm text-zinc-300">
                    <strong>$5,000+ MRR</strong><br />
                    Monthly recurring revenue from app subscriptions within 12 months
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Timeline</h3>
                  <p className="text-sm text-zinc-300">
                    <strong>Q3 2025 Start</strong><br />
                    Immediate action on existing 95% complete apps
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Division Plans */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Wrench className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Detailed Division Plans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Software Division */}
              <Link href="/internal/software" className="group">
                <div className="bg-zinc-900/60 rounded-lg p-6 hover:bg-zinc-800/60 transition-colors border border-zinc-700 hover:border-blue-500/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Smartphone className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-xl font-semibold text-blue-400">Software Division</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-zinc-300 mb-4">
                    iOS app portfolio with 4 apps targeting $5,000+ monthly recurring revenue.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Current Apps:</span>
                      <span className="text-green-400">4 (1 Live, 2 Near Complete)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Target MRR:</span>
                      <span className="text-green-400">$6,231 (Month 6)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Priority:</span>
                      <span className="text-blue-400">Primary Focus</span>
                    </div>
                  </div>
                  <div className="bg-zinc-800/60 rounded-lg p-3">
                    <p className="text-xs text-zinc-400">
                      <strong>Key Apps:</strong> Sheepfold (Live), BibleKit (95% complete), 
                      Safety Meeting (90% complete), Market Scout (concept)
                    </p>
                  </div>
                </div>
              </Link>

              {/* 3D Printing Division */}
              <Link href="/internal/defense" className="group">
                <div className="bg-zinc-900/60 rounded-lg p-6 hover:bg-zinc-800/60 transition-colors border border-zinc-700 hover:border-purple-500/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Wrench className="w-8 h-8 text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-purple-400">3D Printing Division</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <p className="text-zinc-300 mb-4">
                    3D printing capabilities for firearms accessories and custom parts.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Capabilities:</span>
                      <span className="text-green-400">3D Printing Ready</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Market:</span>
                      <span className="text-yellow-400">Firearms Accessories</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Priority:</span>
                      <span className="text-purple-400">Secondary</span>
                    </div>
                  </div>
                  <div className="bg-zinc-800/60 rounded-lg p-3">
                    <p className="text-xs text-zinc-400">
                      <strong>Opportunity:</strong> Existing 3D printing capabilities ready for 
                      online sales after software division is established.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Welding Division */}
              <Link href="/internal/welding" className="group">
                <div className="bg-zinc-900/60 rounded-lg p-6 hover:bg-zinc-800/60 transition-colors border border-zinc-700 hover:border-orange-500/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Zap className="w-8 h-8 text-orange-400 mr-3" />
                      <h3 className="text-xl font-semibold text-orange-400">Welding Division</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <p className="text-zinc-300 mb-4">
                    Custom Porsche 911 cat-back exhaust systems sold on eBay marketplace.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Unit Price:</span>
                      <span className="text-green-400">$800-$1,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Monthly Profit:</span>
                      <span className="text-yellow-400">$5,600 (Year 1)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Priority:</span>
                      <span className="text-orange-400">Tertiary</span>
                    </div>
                  </div>
                  <div className="bg-zinc-800/60 rounded-lg p-3">
                    <p className="text-xs text-zinc-400">
                      <strong>Strategy:</strong> Focus on most common 911 models for maximum 
                      market penetration and repeat sales.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Monthly Timeline Tree */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Monthly Action Timeline</h2>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>
              
              <div className="space-y-8">
                {/* July 2025 */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-blue-500 relative z-10">
                    <span className="text-sm font-bold text-blue-400">JUL</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-blue-400">July 2025 - 3D Printing ONLY</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Set up online store for firearms accessories</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />List top 5 high-demand accessories</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Start production and first sales</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Scale to $3,200/month profit</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500">Revenue Forecast:</span>
                        <span className="text-green-400 font-semibold">$3,200 profit ($738/week)</span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">FOCUS: 3D Printing ONLY. No other projects.</div>
                    </div>
                  </div>
                </div>

                {/* August 2025 */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-green-500 relative z-10">
                    <span className="text-sm font-bold text-green-400">AUG</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-green-400">August 2025 - Welding Division ONLY</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Research top 3 most common 911 models</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Create first 996 Carrera exhaust prototype</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Set up eBay store and listings</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Launch first exhaust sale</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500">Revenue Forecast:</span>
                        <span className="text-green-400 font-semibold">$4,400 profit ($1,015/week) ✅ GOAL EXCEEDED!</span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">FOCUS: Welding ONLY. 3D printing runs on autopilot.</div>
                    </div>
                  </div>
                </div>

                {/* September 2025 */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center border-4 border-yellow-500 relative z-10">
                    <span className="text-sm font-bold text-yellow-400">SEP</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-yellow-400">September 2025 - BibleKit ONLY</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Complete BibleKit final 5%</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Submit BibleKit to App Store</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Launch BibleKit marketing</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Get first subscribers</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500">Revenue Forecast:</span>
                        <span className="text-green-400 font-semibold">$5,800 profit ($1,338/week)</span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">FOCUS: BibleKit ONLY. Manufacturing runs on autopilot.</div>
                    </div>
                  </div>
                </div>

                {/* October 2025 */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center border-4 border-orange-500 relative z-10">
                    <span className="text-sm font-bold text-orange-400">OCT</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">October 2025 - Safety Meeting ONLY</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Complete Safety Meeting final 10%</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Submit Safety Meeting to App Store</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Launch Safety Meeting marketing</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Get first subscribers</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500">Revenue Forecast:</span>
                        <span className="text-green-400 font-semibold">$7,200 profit ($1,662/week)</span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">FOCUS: Safety Meeting ONLY. Other revenue streams autopilot.</div>
                    </div>
                  </div>
                </div>

                {/* November 2025 */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center border-4 border-red-500 relative z-10">
                    <span className="text-sm font-bold text-red-400">NOV</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-red-400">November 2025 - Market Scout ONLY</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Start Market Scout development</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Build MVP wireframes</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Core feature development</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Get to 30% completion</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500">Revenue Forecast:</span>
                        <span className="text-green-400 font-semibold">$8,600 profit ($1,985/week)</span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">FOCUS: Market Scout ONLY. All other streams autopilot.</div>
                    </div>
                  </div>
                </div>

                {/* December 2025 */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center border-4 border-purple-500 relative z-10">
                    <span className="text-sm font-bold text-purple-400">DEC</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">December 2025 - Market Scout ONLY</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Complete Market Scout MVP</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Beta test with first users</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Prepare for launch</li>
                      <li className="flex items-center"><AlertCircle className="w-4 h-4 text-yellow-400 mr-2" />Holiday break from other projects</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-500">Revenue Forecast:</span>
                        <span className="text-green-400 font-semibold">$10,000 profit ($2,308/week) 🚀</span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">FOCUS: Market Scout ONLY. Holiday sales boost other streams.</div>
                    </div>
                  </div>
                </div>

                {/* Q1 2026+ */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center border-4 border-purple-500 relative z-10">
                    <span className="text-xs font-bold text-white">2026</span>
                  </div>
                  <div className="ml-6 bg-zinc-900/60 rounded-lg p-6 flex-1">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Q1 2026+ - Scale & Optimize</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li className="flex items-center"><Target className="w-4 h-4 text-purple-400 mr-2" />Market Scout user acquisition</li>
                      <li className="flex items-center"><Target className="w-4 h-4 text-purple-400 mr-2" />All apps feature expansion</li>
                      <li className="flex items-center"><Target className="w-4 h-4 text-purple-400 mr-2" />Manufacturing division growth</li>
                      <li className="flex items-center"><Target className="w-4 h-4 text-purple-400 mr-2" />Advanced automation & scaling</li>
                    </ul>
                    <div className="mt-3 text-xs text-zinc-500">Target: $5,000+ MRR, $1,000/week profit achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold">Success Metrics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$1,000</div>
                <div className="text-sm text-zinc-400">Weekly Net Profit Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$5,000+</div>
                <div className="text-sm text-zinc-400">Monthly Recurring Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-sm text-zinc-400">Months to Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-sm text-zinc-400">Active Business Divisions</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-700">
              <h3 className="font-semibold mb-4 text-blue-400">Key Success Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Focus on software division as primary revenue driver
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Complete existing apps before starting new projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Prioritize recurring revenue models
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Market Scout represents highest long-term potential
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    3D printing and welding divisions as secondary opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    Execute monthly timeline consistently
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
