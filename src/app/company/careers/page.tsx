import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Cpu, Shield, Brain, Users, Rocket, Globe, Code, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Join Our Mission
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Help shape the future of defense technology. We're looking for exceptional
              talent to join our team of innovators and problem solvers.
            </p>
            <Link href="/call">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Contact Recruiting
              </Button>
            </Link>
          </div>

          {/* Why Zygur */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Zygur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Impact</h3>
                <p className="text-zinc-400">
                  Work on cutting-edge technologies that directly enhance military
                  capabilities and national security. Your contributions will help shape
                  the future of defense technology.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Innovation</h3>
                <p className="text-zinc-400">
                  Push the boundaries of what's possible in quantum computing, AI, and
                  defense systems. Work with advanced technologies and brilliant minds.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Growth</h3>
                <p className="text-zinc-400">
                  Continuous learning opportunities, mentorship programs, and career
                  development paths. We invest in our team's growth and success.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Benefits</h3>
                <p className="text-zinc-400">
                  Competitive compensation, comprehensive healthcare, retirement plans,
                  and flexible work arrangements. We take care of our team.
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              <div className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Quantum Computing Engineers</h3>
                        <p className="text-zinc-400">Multiple Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Design and develop quantum computing systems for military applications.
                      Experience with quantum algorithms and superconducting circuits required.
                    </p>
                  </div>
                  <Link href="/call">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">AI Research Scientists</h3>
                        <p className="text-zinc-400">Senior Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Lead research in military AI applications, focusing on autonomous
                      systems and strategic decision-making algorithms.
                    </p>
                  </div>
                  <Link href="/call">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Defense Systems Architects</h3>
                        <p className="text-zinc-400">Lead Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Design integrated defense systems combining AI, quantum computing,
                      and advanced sensor networks. Military background preferred.
                    </p>
                  </div>
                  <Link href="/call">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Security Engineers</h3>
                        <p className="text-zinc-400">Multiple Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Develop and implement security protocols for military-grade systems.
                      Experience with quantum cryptography a plus.
                    </p>
                  </div>
                  <Link href="/call">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-zinc-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">General Requirements</h2>
            <ul className="space-y-4 text-zinc-400">
              <li>• U.S. citizenship and ability to obtain security clearance required</li>
              <li>• Advanced degree in relevant field preferred</li>
              <li>• Strong background in military technology, quantum computing, or AI</li>
              <li>• Excellent problem-solving and analytical skills</li>
              <li>• Commitment to innovation and excellence</li>
              <li>• Ability to work on classified projects</li>
            </ul>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
