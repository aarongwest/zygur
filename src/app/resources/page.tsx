import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { ArrowRight, FileText, Microscope, BookOpen, Rocket } from "lucide-react"

export default function ResourcesPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            Technical Resources & Research
          </h1>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Access our comprehensive library of technical documentation, research papers, and case studies.
            Stay informed about the latest advancements in defense technology and military operations.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* Documentation */}
            <Link 
              href="/login"
              className="group block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent-orange" />
                    </div>
                    <h2 className="text-2xl font-semibold">Technical Documentation</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Comprehensive technical documentation for our quantum computing, AI, and defense systems.
                    Integration guides, API references, and deployment protocols.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                      System architecture and integration guides
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                      API documentation and SDKs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                      Security protocols and compliance guides
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>

            {/* Research Papers */}
            <Link 
              href="/login"
              className="group block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-accent-yellow" />
                    </div>
                    <h2 className="text-2xl font-semibold">Research Papers</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Cutting-edge research in quantum computing, artificial intelligence, and defense technologies.
                    Published papers and technical reports from our R&D division.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow mr-2" />
                      Quantum computing breakthroughs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow mr-2" />
                      AI and autonomous systems research
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow mr-2" />
                      Advanced defense technology studies
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>

            {/* Case Studies */}
            <Link 
              href="/login"
              className="group block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent-orange" />
                    </div>
                    <h2 className="text-2xl font-semibold">Case Studies</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Real-world applications and success stories of our technology in military and defense operations.
                    Detailed analysis of deployment scenarios and outcomes.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                      Military operation optimizations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                      Defense system implementations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                      AI integration success stories
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>

            {/* Labs */}
            <Link 
              href="/labs"
              className="group block bg-zinc-900/60 rounded-lg p-8 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-accent-yellow" />
                    </div>
                    <h2 className="text-2xl font-semibold">Labs</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Discover innovative projects from our AI software development playground. See how we experiment
                    with cutting-edge technologies to stay at the forefront of digital innovation.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow mr-2" />
                      AI-powered experimental applications
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow mr-2" />
                      Machine learning and NLP implementations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow mr-2" />
                      Advanced software development techniques
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
