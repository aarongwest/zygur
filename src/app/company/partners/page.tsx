import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Handshake, Shield, Globe, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Strategic Partners
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              We collaborate with leading defense organizations, research institutions,
              and technology companies to advance military capabilities.
            </p>
            <Link href="/call">
              <Button className="bg-accent-orange hover:bg-blue-600 text-white">
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Partnership Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-orange" />
                </div>
                <h2 className="text-xl font-semibold">Defense Organizations</h2>
              </div>
              <p className="text-zinc-400 mb-4">
                We work closely with military and defense organizations to develop
                and deploy advanced technology solutions that enhance operational
                capabilities.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                  Strategic technology integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                  Joint research initiatives
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2" />
                  Customized solution development
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-xl font-semibold">Research Institutions</h2>
              </div>
              <p className="text-zinc-400 mb-4">
                Our partnerships with leading research institutions drive innovation
                in quantum computing, AI, and defense technologies.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  Advanced research collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  Technology transfer programs
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  Innovation partnerships
                </li>
              </ul>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Technology Access</h3>
                <p className="text-zinc-400">
                  Priority access to our advanced defense technologies, including
                  quantum computing and AI systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Joint Development</h3>
                <p className="text-zinc-400">
                  Collaborate on custom solutions tailored to specific military and
                  defense requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Strategic Support</h3>
                <p className="text-zinc-400">
                  Dedicated technical support and strategic consulting for seamless
                  integration.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Partnerships */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Featured Partnerships</h2>
            <div className="space-y-8">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Defense Innovation Initiative</h3>
                        <p className="text-zinc-400">Strategic Partnership</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Joint program developing next-generation defense technologies
                      through collaborative research and development.
                    </p>
                    <div className="flex items-center text-purple-500">
                      <Link href="/login" className="flex items-center hover:text-purple-400">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Quantum Research Alliance</h3>
                        <p className="text-zinc-400">Research Collaboration</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Multi-institutional partnership advancing quantum computing
                      capabilities for military applications.
                    </p>
                    <div className="flex items-center text-emerald-500">
                      <Link href="/login" className="flex items-center hover:text-emerald-400">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
