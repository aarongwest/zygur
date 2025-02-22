import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PageLayout } from "@/components/layout/page-layout"

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <PageLayout>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
                Environmental Health & Safety
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Transform Your EHS Program
              <br />
              <span className="text-zinc-400">with Industry-Leading Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 mb-8 md:mb-12 max-w-2xl">
              EHS, Inc. delivers comprehensive environmental, health, and safety solutions that combine innovative software, expert consulting, and proven methodologies. We help organizations achieve compliance, reduce risks, and drive operational excellence.
            </p>

            <div className="space-y-6">
              <p className="text-sm text-zinc-400">Featured Solutions →</p>

              <Link
                href="/ehs?tag=tech"
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-cyan-500"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">EHS Technology</h3>
                      <p className="text-sm text-zinc-400 pr-8 md:pr-0">Discover our innovative tech solutions for EHS management</p>
                    </div>
                  </div>
                  <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/ehs?tag=services"
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-fuchsia-500"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">EHS Services</h3>
                      <p className="text-sm text-zinc-400 pr-8 md:pr-0">Comprehensive EHS services to support your organization</p>
                    </div>
                  </div>
                  <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/ehs?tag=other"
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-amber-500"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">More</h3>
                      <p className="text-sm text-zinc-400 pr-8 md:pr-0">Additional insights and resources for EHS professionals</p>
                    </div>
                  </div>
                  <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </section>

    </PageLayout>
  )
}
