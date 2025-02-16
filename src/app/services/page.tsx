import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">Our Services</h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Comprehensive solutions for tomorrow's challenges. We combine cutting-edge research, advanced defense systems, and intelligent automation to deliver transformative results.
        </p>

        <div className="space-y-6">
          <Link
            href="/services/research-development"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Research & Development</h3>
                  <ul className="text-sm text-zinc-400 list-disc ml-4">
                    <li>Emerging tech discovery</li>
                    <li>Concept testing and vetting</li>
                    <li>Prototype design and development</li>
                  </ul>
                </div>
              </div>
              <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/services/defense-military"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-rose-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Defense & Military Solutions</h3>
                  <ul className="text-sm text-zinc-400 list-disc ml-4">
                    <li>Command and control software</li>
                    <li>Surveillance, reconnaissance, and simulation software</li>
                    <li>Analytics and decision-making software</li>
                  </ul>
                </div>
              </div>
              <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/services/agentic-ai"
            className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Agentic AI</h3>
                  <ul className="text-sm text-zinc-400 list-disc ml-4">
                    <li>Data collection and processing</li>
                    <li>Data labeling and classification</li>
                    <li>Workflow automation</li>
                  </ul>
                </div>
              </div>
              <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
