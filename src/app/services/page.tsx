import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
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
              AI-Enhanced Marketing Services
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Comprehensive marketing solutions for growing businesses. I deliver enterprise-quality marketing leadership 
              and execution at a fraction of the cost through my AI-enhanced approach.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-8 mb-16">
            <Link
              href="/services/strategy"
              className="block bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 rounded-full bg-accent-orange"></div>
                </div>
                <h2 className="text-2xl font-bold">Marketing Strategy</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <ul className="text-zinc-400 space-y-2 mb-4">
                    <li>• Brand positioning & messaging</li>
                    <li>• Customer journey mapping</li>
                    <li>• Channel strategy & planning</li>
                    <li>• Budget allocation & forecasting</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-zinc-400 mb-6">
                    A comprehensive marketing strategy aligns your business goals with effective channels and messaging.
                    As your fractional CMO, I develop data-driven strategies that create sustainable growth 
                    without the enterprise-level cost.
                  </p>
                  <div className="flex justify-end">
                    <div className="inline-flex items-center text-zinc-300 group-hover:text-white transition-colors">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/services/execution"
              className="block bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 rounded-full bg-accent-yellow"></div>
                </div>
                <h2 className="text-2xl font-bold">AI-Powered Execution</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <ul className="text-zinc-400 space-y-2 mb-4">
                    <li>• Content creation at scale</li>
                    <li>• Multi-channel campaign management</li>
                    <li>• Marketing automation</li>
                    <li>• AI-generated creative assets</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-zinc-400 mb-6">
                    I deliver twice the marketing results at half the cost through AI-enhanced execution.
                    By leveraging cutting-edge AI tools, I implement high-impact campaigns with unprecedented 
                    efficiency and effectiveness.
                  </p>
                  <div className="flex justify-end">
                    <div className="inline-flex items-center text-zinc-300 group-hover:text-white transition-colors">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/services/optimization"
              className="block bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 rounded-full bg-accent-orange"></div>
                </div>
                <h2 className="text-2xl font-bold">Growth Optimization</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <ul className="text-zinc-400 space-y-2 mb-4">
                    <li>• Performance analysis & reporting</li>
                    <li>• Conversion rate optimization</li>
                    <li>• A/B & multivariate testing</li>
                    <li>• Budget reallocation for ROI</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-zinc-400 mb-6">
                    Continuous improvement driven by data and AI. I help you maximize ROI through 
                    systematic testing, analysis, and refinement of your marketing efforts to ensure
                    every dollar works harder for your business.
                  </p>
                  <div className="flex justify-end">
                    <div className="inline-flex items-center text-zinc-300 group-hover:text-white transition-colors">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Engagement Models */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6">Engagement Models</h2>
            <p className="text-zinc-400 mb-8">
              All service plans include a <span className="text-accent-orange font-semibold">free $5,000 value website</span> and a <span className="text-accent-yellow font-semibold">$2,000 value branding package</span>. A 1-year minimum agreement is required for all plans.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-accent-orange/20 to-dark-green/60 rounded-lg p-6 relative">
                <div className="absolute top-3 right-3 bg-accent-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>
                <h3 className="text-lg font-semibold mb-2 text-zinc-200">Local Mgmt</h3>
                <p className="text-accent-orange font-semibold text-sm mb-3">Starting at $2k per mo</p>
                <p className="text-zinc-400 mb-4">
                  Comprehensive marketing management for businesses targeting local customers.
                </p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Onsite optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Local citation building</span>
                  </li>
                </ul>
              </div>
              <div className="bg-dark-green/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-zinc-200">National Mgmt</h3>
                <p className="text-accent-yellow font-semibold text-sm mb-3">Starting at $7k per mo</p>
                <p className="text-zinc-400 mb-4">
                  Comprehensive marketing management for businesses targeting nationwide audiences.
                </p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Advanced onsite SEO</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Content optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-dark-green/60 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-zinc-200">Add-on Services</h3>
                <p className="text-accent-orange font-semibold text-sm mb-3">$1k per mo</p>
                <p className="text-zinc-400 mb-4">
                  Optional services to enhance your digital marketing strategy.
                </p>
                <ul className="space-y-2 mb-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">PPC campaign management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs text-zinc-400">Social media content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your marketing?</h2>
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
