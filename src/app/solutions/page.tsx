import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { ArrowRight, Calendar, Cog, Code, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Complete Solution Engineering
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Design, Develop, Deploy
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              From concept to market - we engineer complete solutions combining advanced manufacturing, 
              custom software, and strategic deployment. Our proven 3D methodology ensures your project 
              succeeds at every stage.
            </p>
          </div>

          {/* 3D Methodology Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link
              href="/solutions/design-prototyping"
              className="block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                  <Cog className="w-6 h-6 text-accent-orange" />
                </div>
                <h2 className="text-2xl font-bold">DESIGN</h2>
              </div>
              <p className="text-accent-orange font-medium mb-4">Design, prototype</p>
              <p className="text-zinc-400 mb-6">
                Engineering blueprints, feasibility analysis, and custom solution architecture. 
                We turn your concept into a viable, optimized design ready for development.
              </p>
              <div className="flex justify-end">
                <div className="inline-flex items-center text-zinc-300 group-hover:text-white transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link
              href="/solutions/manufacturing-development"
              className="block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-accent-yellow" />
                </div>
                <h2 className="text-2xl font-bold">DEVELOP</h2>
              </div>
              <p className="text-accent-yellow font-medium mb-4">Manufacture, code, integrate</p>
              <p className="text-zinc-400 mb-6">
                Custom fabrication, precision machining, software development, and system integration. 
                We build your solution with quality assurance and rigorous testing.
              </p>
              <div className="flex justify-end">
                <div className="inline-flex items-center text-zinc-300 group-hover:text-white transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link
              href="/solutions/distribute-optimize"
              className="block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-accent-orange" />
                </div>
                <h2 className="text-2xl font-bold">DEPLOY</h2>
              </div>
              <p className="text-accent-orange font-medium mb-4">Distribute, optimize</p>
              <p className="text-zinc-400 mb-6">
                Go-to-market strategy, brand positioning, distribution channels, and continuous optimization. 
                We ensure your solution reaches the right customers and achieves market success.
              </p>
              <div className="flex justify-end">
                <div className="inline-flex items-center text-zinc-300 group-hover:text-white transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          {/* Why Our Approach Works */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Our 3D Methodology Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Complete Solution Ownership</h3>
                <p className="text-zinc-400 mb-4">
                  Unlike vendors who specialize in just one area, we handle the entire solution lifecycle. 
                  This eliminates coordination issues and ensures seamless integration between design, 
                  development, and deployment phases.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Proven Process</h3>
                <p className="text-zinc-400 mb-4">
                  Our methodology has been refined through years of successful projects across manufacturing, 
                  software development, and market deployment. Each phase builds on the previous one, 
                  reducing risk and accelerating time-to-market.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Utah-Based Excellence</h3>
                <p className="text-zinc-400 mb-4">
                  As Utah's premier technology company, we combine local accessibility with world-class 
                  capabilities. Our clients benefit from direct communication, rapid iteration, 
                  and deep understanding of regional business needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
                <p className="text-zinc-400 mb-4">
                  Whether you need a custom prototype, full-scale manufacturing, or market expansion, 
                  our solutions are designed to grow with your business. We build for today's needs 
                  while planning for tomorrow's opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Defense & Government</h3>
                <p className="text-sm text-zinc-400">
                  Secure solutions for defense contractors and government agencies requiring 
                  specialized manufacturing and software development.
                </p>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Industrial & Manufacturing</h3>
                <p className="text-sm text-zinc-400">
                  Custom equipment, automation solutions, and industrial software for 
                  manufacturing companies seeking competitive advantages.
                </p>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Technology & Innovation</h3>
                <p className="text-sm text-zinc-400">
                  Cutting-edge solutions for tech companies, startups, and innovators 
                  bringing new products and services to market.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to engineer your solution?</h2>
                <p className="text-zinc-400">Let's discuss how our 3D methodology can bring your project to life.</p>
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
