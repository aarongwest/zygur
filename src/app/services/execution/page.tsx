import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, Zap, Bot, Rocket } from "lucide-react"
import Link from "next/link"

export default function ExecutionPage() {
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
              AI-Powered Marketing Execution
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              I deliver twice the marketing results at half the cost through AI-enhanced execution.
              As your fractional CMO, I implement high-impact campaigns with unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-white font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a Strategy Call
                </Button>
              </Link>
            </div>
          </div>

          {/* AI Advantage Section */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-6">The AI Execution Advantage</h2>
                <p className="text-zinc-400 mb-6">
                  Traditional marketing agencies are plagued by inefficiency, high overhead costs, 
                  and outdated workflows. My AI-enhanced approach changes everything.
                </p>
                <p className="text-zinc-400 mb-6">
                  By leveraging cutting-edge AI tools, I can execute marketing campaigns with 
                  unparalleled speed, precision, and cost-efficiency. This means you get:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Faster Implementation</h3>
                      <p className="text-sm text-zinc-400">
                        Campaigns that would take agencies weeks can be deployed in days
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Bot className="w-5 h-5 text-accent-yellow mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Content at Scale</h3>
                      <p className="text-sm text-zinc-400">
                        AI-assisted content creation delivers high-quality assets at unprecedented volume
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Rocket className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Strategic Adaptation</h3>
                      <p className="text-sm text-zinc-400">
                        Real-time data analysis allows for immediate optimization and pivoting
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-zinc-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">AI-Powered vs. Traditional Agency</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Content Production</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Traditional Agency</span>
                      <span className="text-sm">10-15 assets/month</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full mb-3">
                      <div className="bg-zinc-500 h-2 rounded-full w-1/3"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">My AI-Enhanced Approach</span>
                      <span className="text-sm">40-50 assets/month</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Implementation Speed</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Traditional Agency</span>
                      <span className="text-sm">2-4 weeks</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full mb-3">
                      <div className="bg-zinc-500 h-2 rounded-full w-2/5"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">My AI-Enhanced Approach</span>
                      <span className="text-sm">2-5 days</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cost Efficiency</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Traditional Agency</span>
                      <span className="text-sm">$10-15k/month</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full mb-3">
                      <div className="bg-zinc-500 h-2 rounded-full w-1/4"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">My AI-Enhanced Approach</span>
                      <span className="text-sm">$5-7k/month</span>
                    </div>
                    <div className="w-full bg-zinc-700 h-2 rounded-full">
                      <div className="bg-accent-orange h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">AI-Enhanced Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
                <p className="text-zinc-400 mb-4">
                  AI-enhanced content creation and distribution across blogs, social media, 
                  email, and other channels to engage your target audience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">AI-generated content at scale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Human-reviewed for quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">SEO-optimized distribution</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Advertising</h3>
                <p className="text-zinc-400 mb-4">
                  AI-optimized paid campaigns across search, social, and display networks 
                  with continuous testing and refinement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">AI-driven audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Automated creative testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Real-time budget optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
                <p className="text-zinc-400 mb-4">
                  AI-powered insights and reporting that turn complex marketing data 
                  into actionable intelligence for continuous improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Automated data collection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">AI-generated insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Dynamic reporting dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">My Execution Process</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-orange">1</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">AI-Enhanced Planning</h3>
                  <p className="text-zinc-400">
                    Using AI tools, I analyze your business data, market trends, and competitive landscape 
                    to create detailed execution plans with precise targeting parameters, content strategies, 
                    and performance benchmarks.
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
                  <h3 className="text-xl font-semibold mb-2">Accelerated Content Creation</h3>
                  <p className="text-zinc-400">
                    I leverage AI to generate initial drafts of marketing content at scale - from social posts 
                    to email campaigns to landing pages. Each piece is then refined and polished to ensure it 
                    maintains your brand voice while maximizing engagement.
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
                  <h3 className="text-xl font-semibold mb-2">Automated Deployment</h3>
                  <p className="text-zinc-400">
                    Using advanced automation tools, I deploy your marketing campaigns across multiple 
                    channels simultaneously, ensuring perfect timing and consistency while dramatically 
                    reducing the manual work typically required.
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
                  <h3 className="text-xl font-semibold mb-2">Real-Time Optimization</h3>
                  <p className="text-zinc-400">
                    AI-powered analytics continuously monitor campaign performance, identifying optimization 
                    opportunities in real-time. This allows for immediate adjustments to targeting, creative, 
                    or budget allocation to maximize results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to supercharge your marketing execution?</h2>
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
