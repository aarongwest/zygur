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
              We collaborate with leading organizations, industry experts, and technology 
              companies to advance workplace safety and environmental compliance.
            </p>
            <Link href="/call">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Partnership Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold">Industry Partners</h2>
              </div>
              <p className="text-zinc-400 mb-4">
                We work closely with industry leaders to develop and deploy advanced
                EHS solutions that enhance workplace safety and compliance.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                  EHS software integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                  Best practice sharing
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                  Industry-specific solutions
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-xl font-semibold">Consulting Partners</h2>
              </div>
              <p className="text-zinc-400 mb-4">
                Our partnerships with leading EHS consultants and trainers help deliver
                comprehensive safety and compliance solutions.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  Expert consulting services
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  Professional training programs
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  Compliance management
                </li>
              </ul>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Technology Access</h3>
                <p className="text-zinc-400">
                  Priority access to our advanced EHS software platform and
                  automation tools.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Joint Development</h3>
                <p className="text-zinc-400">
                  Collaborate on custom solutions tailored to specific industry
                  and organizational needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Strategic Support</h3>
                <p className="text-zinc-400">
                  Dedicated support and consulting for successful implementation
                  and ongoing optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Partnerships */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Featured Partnerships</h2>
            <div className="space-y-8">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Safety Innovation Alliance</h3>
                        <p className="text-zinc-400">Strategic Partnership</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Joint program developing next-generation EHS solutions through
                      collaborative innovation and industry expertise.
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

              <div className="bg-zinc-800/50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">EHS Training Network</h3>
                        <p className="text-zinc-400">Training Collaboration</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Network of certified trainers and consultants delivering comprehensive
                      EHS training and certification programs.
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
