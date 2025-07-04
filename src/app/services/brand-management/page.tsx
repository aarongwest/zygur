import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BrandManagementPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                AI-Enhanced Brand Management
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Part-Time Brand Management for Growing Businesses
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Elevate your brand with strategic management that delivers consistent messaging, 
              engaging experiences, and strong market positioning—without the cost of a full-time 
              brand manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black font-medium">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                  <div className="w-5 h-5 rounded-full bg-accent-orange"></div>
                </div>
                <h3 className="font-semibold">Strategic Brand Development</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Comprehensive brand strategy aligned with your business goals and target audience.
              </p>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow"></div>
                </div>
                <h3 className="font-semibold">Consistent Brand Voice</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Unified messaging across all platforms and touchpoints to strengthen brand recognition.
              </p>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                  <div className="w-5 h-5 rounded-full bg-accent-orange"></div>
                </div>
                <h3 className="font-semibold">Visual Identity Management</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Cohesive design elements that reinforce your brand identity and resonate with your audience.
              </p>
            </div>
          </div>

          {/* Brand Management Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Our Brand Management Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Brand Audit</h3>
                <p className="text-sm text-zinc-400">
                  Comprehensive analysis of your current brand positioning, messaging, and visual identity.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-yellow">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy Development</h3>
                <p className="text-sm text-zinc-400">
                  Creation of a tailored brand strategy that aligns with your business objectives.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-zinc-400">
                  Execution of brand strategy across all channels with consistent messaging and visuals.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-yellow">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Measurement & Refinement</h3>
                <p className="text-sm text-zinc-400">
                  Ongoing analysis of brand performance metrics with continuous improvements.
                </p>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Brand Management Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Identity Development</h3>
                    <p className="text-sm text-zinc-400">
                      Creation or refinement of your brand's visual elements, including logo, color palette, typography, and design system.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Messaging</h3>
                    <p className="text-sm text-zinc-400">
                      Development of core brand messaging, including value proposition, mission, vision, and key messaging frameworks.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Guidelines</h3>
                    <p className="text-sm text-zinc-400">
                      Creation of comprehensive brand guidelines to ensure consistent application across all platforms and materials.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Experience Design</h3>
                    <p className="text-sm text-zinc-400">
                      Design of cohesive customer experiences that reflect your brand's values and personality at every touchpoint.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Asset Creation</h3>
                    <p className="text-sm text-zinc-400">
                      Development of branded marketing materials, social media templates, presentations, and other essential assets.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Monitoring</h3>
                    <p className="text-sm text-zinc-400">
                      Ongoing tracking of brand mentions, sentiment, and market perception to protect and enhance your brand reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Brand Management Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-zinc-400">Strategic expertise without the full-time salary</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-zinc-400">AI-enhanced brand analytics and insights</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-zinc-400">Consistent brand messaging across all platforms</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-zinc-400">Flexible engagement model that scales with your needs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-zinc-400">Proactive brand protection and reputation management</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-zinc-400">Collaborative approach that aligns with your business goals</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="font-semibold mb-2">What is part-time brand management?</h3>
                <p className="text-zinc-400 text-sm">
                  Part-time brand management provides your business with expert brand strategy and execution on a flexible basis. 
                  You get the benefits of experienced brand leadership without the overhead of a full-time hire, 
                  with services tailored to your specific needs and budget.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="font-semibold mb-2">How does AI enhance your brand management services?</h3>
                <p className="text-zinc-400 text-sm">
                  We leverage AI technologies to analyze market trends, consumer sentiment, and competitive positioning more efficiently. 
                  This allows us to deliver data-driven brand insights, optimize content creation, and provide real-time brand monitoring 
                  at a fraction of the traditional cost and time.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="font-semibold mb-2">How much does part-time brand management cost?</h3>
                <p className="text-zinc-400 text-sm">
                  Our brand management services start at $2,000 per month, with pricing based on the scope of work and your specific 
                  business needs. This represents a significant cost savings compared to hiring a full-time brand manager while 
                  providing access to senior-level expertise.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/10 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to elevate your brand?</h2>
                <p className="text-zinc-400">Schedule a call to discuss your brand management needs.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
