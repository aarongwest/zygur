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
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Streamline your EHS
              <br />
              <span className="text-zinc-400">with automation and expertise.</span>
            </h1>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
              We provide comprehensive EHS solutions that combine powerful software automation with expert services. Let us handle your environmental, health, and safety needs so you don't have to.
            </p>

            <div className="space-y-6">
              <p className="text-sm text-zinc-400">Our Services →</p>

              <Link
                href="/services/software"
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-amber-500"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">EHS Software Platform</h3>
                      <p className="text-sm text-zinc-400">Customizable automation and management tools</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/services/training"
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-rose-500"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Safety Training</h3>
                      <p className="text-sm text-zinc-400">Comprehensive EHS training and certification</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              <Link
                href="/services/consulting"
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">EHS Consulting</h3>
                      <p className="text-sm text-zinc-400">Expert guidance and compliance management</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </section>

    </PageLayout>
  )
}
