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
            Stay informed about the latest advancements in EHS management and workplace safety.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* Documentation */}
            <Link 
              href="/login"
              className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Technical Documentation</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Comprehensive documentation for our EHS software platform and solutions.
                    Implementation guides, API references, and best practices.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      Platform implementation guides
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      API documentation and SDKs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      EHS compliance documentation
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>

            {/* Research Papers */}
            <Link 
              href="/login"
              className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-purple-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Research Papers</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Latest research in workplace safety, environmental compliance, and EHS management.
                    Published papers and reports from our research team.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                      Safety management innovations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                      Environmental compliance studies
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                      Risk assessment methodologies
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>

            {/* Case Studies */}
            <Link 
              href="/login"
              className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Case Studies</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Real-world applications and success stories of our EHS solutions in various industries.
                    Detailed analysis of implementation outcomes and benefits.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                      Safety program improvements
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                      Compliance achievements
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                      Risk reduction results
                    </li>
                  </ul>
                </div>
                <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </Link>

            {/* Labs */}
            <Link 
              href="/labs"
              className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Labs</h2>
                  </div>
                  <p className="text-zinc-400 mb-6 max-w-2xl">
                    Discover innovative EHS projects and initiatives. See how organizations are
                    transforming workplace safety through creative solutions.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      Featured safety initiatives
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      Innovation showcases
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      Best practice examples
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
