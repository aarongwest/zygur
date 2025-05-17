import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Brain, Lightbulb, Gauge, Workflow } from "lucide-react"
import Link from "next/link"

export default function ApproachPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
                My Methodology
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              The AI-Enhanced Approach
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              A unique methodology that blends executive marketing expertise with cutting-edge 
              AI tools to deliver twice the results at half the cost.
            </p>
          </div>

          {/* Core Framework */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8">The SCALE Framework</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-green">S</span>
                  </div>
                </div>
                <div className="md:ml-8">
                  <h3 className="text-xl font-semibold mb-4">Strategic Assessment</h3>
                  <p className="text-zinc-400 mb-4">
                    Every engagement begins with a comprehensive assessment of your current marketing 
                    activities, business goals, market position, and competitive landscape. Using AI-enhanced 
                    analytics, I identify key opportunities and challenges unique to your business.
                  </p>
                  <div className="bg-zinc-900/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">AI Enhancement:</h4>
                    <p className="text-sm text-zinc-400">
                      Proprietary AI tools analyze thousands of competitive data points in days, not weeks, 
                      revealing market gaps and opportunities that traditional analysis would miss.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-green">C</span>
                  </div>
                </div>
                <div className="md:ml-8">
                  <h3 className="text-xl font-semibold mb-4">Customer-Centric Planning</h3>
                  <p className="text-zinc-400 mb-4">
                    I develop a comprehensive marketing strategy that places your customers at the center. 
                    This involves creating detailed buyer personas, mapping customer journeys, and 
                    identifying key touchpoints where your marketing can make the greatest impact.
                  </p>
                  <div className="bg-zinc-900/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">AI Enhancement:</h4>
                    <p className="text-sm text-zinc-400">
                      Machine learning algorithms analyze customer behavior patterns and segment your 
                      audience with unprecedented precision, enabling hyper-targeted messaging.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-green">A</span>
                  </div>
                </div>
                <div className="md:ml-8">
                  <h3 className="text-xl font-semibold mb-4">Accelerated Implementation</h3>
                  <p className="text-zinc-400 mb-4">
                    Unlike traditional marketing approaches that take months to execute, my AI-enhanced 
                    methodology enables rapid implementation across multiple channels simultaneously. 
                    This includes content creation, campaign setup, and automation workflows.
                  </p>
                  <div className="bg-zinc-900/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">AI Enhancement:</h4>
                    <p className="text-sm text-zinc-400">
                      AI content generation tools produce high-quality marketing assets at 5x the speed 
                      of traditional methods, while maintaining brand consistency and messaging precision.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-green">L</span>
                  </div>
                </div>
                <div className="md:ml-8">
                  <h3 className="text-xl font-semibold mb-4">Lean Experimentation</h3>
                  <p className="text-zinc-400 mb-4">
                    I implement a structured testing program that systematically improves performance 
                    through rapid experimentation. Instead of one-size-fits-all solutions, we 
                    continuously test and validate marketing approaches to find what works for your 
                    specific business.
                  </p>
                  <div className="bg-zinc-900/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">AI Enhancement:</h4>
                    <p className="text-sm text-zinc-400">
                      AI-powered multivariate testing allows us to test dozens of variables simultaneously,
                      with real-time statistical analysis that identifies winning combinations within days, not months.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-16 flex-shrink-0 flex items-start justify-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-green">E</span>
                  </div>
                </div>
                <div className="md:ml-8">
                  <h3 className="text-xl font-semibold mb-4">Evolutionary Optimization</h3>
                  <p className="text-zinc-400 mb-4">
                    Marketing is never "done." I implement continuous monitoring and optimization systems 
                    that ensure your marketing becomes more effective over time. This involves regular 
                    performance reviews, strategy refinements, and tactical adjustments.
                  </p>
                  <div className="bg-zinc-900/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">AI Enhancement:</h4>
                    <p className="text-sm text-zinc-400">
                      Predictive analytics models forecast performance trends and identify potential 
                      issues before they impact results, enabling proactive optimization rather than 
                      reactive adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Advantage */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The AI Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Enhanced Decision Making</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  AI analysis tools process vast amounts of market data, customer behavior patterns, and 
                  competitive intelligence to reveal insights that would be impossible to uncover manually.
                </p>
                <p className="text-zinc-400">
                  This means your marketing strategy is based on comprehensive data rather than limited 
                  samples or gut feelings, dramatically increasing your chances of success.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Creative Acceleration</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  AI-assisted content creation tools generate high-quality marketing assets at scale - 
                  from social media posts to email campaigns to ad variations.
                </p>
                <p className="text-zinc-400">
                  This enables your marketing to maintain a consistent presence across all channels with 
                  a volume and quality that would typically require a large in-house team.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Performance Optimization</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  Machine learning algorithms continuously monitor campaign performance across all channels, 
                  identifying optimization opportunities in real-time.
                </p>
                <p className="text-zinc-400">
                  This allows for immediate adjustments to targeting, messaging, or budget allocation, 
                  ensuring your marketing dollars are always generating the highest possible return.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Workflow Automation</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  AI-powered automation handles repetitive marketing tasks - from email scheduling to social 
                  media posting to report generation - freeing human creativity for strategic thinking.
                </p>
                <p className="text-zinc-400">
                  This dramatically increases marketing efficiency while reducing the operational burden 
                  on your team, allowing you to accomplish more with less.
                </p>
              </div>
            </div>
          </div>

          {/* How We Work Together */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">How We Work Together</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 flex-shrink-0 md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">Streamlined Process</h3>
                  <p className="text-zinc-400">
                    Our workflow is designed to be efficient with minimal interruptions. 
                    After initial setup, we focus on delivering results without requiring 
                    your constant involvement or time.
                  </p>
                </div>
                <div className="md:w-1/3 flex-shrink-0 md:px-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">Focus on Results</h3>
                  <p className="text-zinc-400">
                    We prioritize action over meetings. Your time is valuable, so we concentrate 
                    on implementing effective strategies and optimizations rather than excessive 
                    consultation.
                  </p>
                </div>
                <div className="md:w-1/3 flex-shrink-0 md:pl-8">
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Monthly Reports</h3>
                  <p className="text-zinc-400">
                    You receive detailed monthly reports documenting all work completed, performance 
                    metrics, and next steps. These reports provide complete transparency without 
                    requiring your time for frequent meetings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Engagement Models */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Engagement Models</h2>
            <p className="text-zinc-400 mb-8">All service plans include a <span className="text-neon-green font-semibold">free $5,000 value high-quality website</span> and a <span className="text-neon-green font-semibold">$2,000 value branding and identity package</span>. A 1-year minimum agreement is required for all plans.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-neon-green/20 to-zinc-800/50 rounded-lg p-8 relative">
                <div className="absolute top-4 right-4 bg-neon-green text-zinc-900 px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
                <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-neon-green">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Mgmt</h3>
                <p className="text-neon-green font-semibold text-sm mb-3">Starting at $2k per mo</p>
                <p className="text-zinc-400 mb-4">
                  Comprehensive marketing management for businesses targeting customers in specific geographic locations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Onsite optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Local citation building</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Monthly performance reports</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">National Mgmt</h3>
                <p className="text-neon-green font-semibold text-sm mb-3">Starting at $7k per mo</p>
                <p className="text-zinc-400 mb-4">
                  Comprehensive marketing management for businesses targeting nationwide audiences or multiple markets.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Advanced onsite SEO</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Content optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Link building strategy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Comprehensive monthly reports</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Add-on Services</h3>
                <p className="text-neon-green font-semibold text-sm mb-3">$1k per mo</p>
                <p className="text-zinc-400 mb-4">
                  Optional services to enhance your SEO strategy with additional digital marketing channels.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">PPC campaign management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Social media content creation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Automated social posting</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Consolidated reporting dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-neon-green/20 to-blue-500/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your marketing approach?</h2>
                <p className="text-zinc-400">Let's discuss which engagement model is right for your business. Limited availability - only 7 client spots per year.</p>
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
