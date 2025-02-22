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
              Help shape the future of EHS management. We're looking for exceptional
              talent to join our team of safety and compliance innovators.
            </p>
            <Link href="/call">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Contact Recruiting
              </Button>
            </Link>
          </div>

          {/* Why Zygur */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why EHS, Inc.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Impact</h3>
                <p className="text-zinc-400">
                  Work on cutting-edge technologies that directly enhance workplace safety
                  and environmental compliance. Your contributions will help protect workers
                  and the environment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Innovation</h3>
                <p className="text-zinc-400">
                  Push the boundaries of what's possible in EHS software, automation, and
                  safety systems. Work with advanced technologies and industry experts.
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
                        <h3 className="text-xl font-semibold">EHS Software Engineers</h3>
                        <p className="text-zinc-400">Multiple Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Design and develop innovative EHS software solutions. Experience with
                      modern web technologies and safety management systems preferred.
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
                        <h3 className="text-xl font-semibold">EHS Consultants</h3>
                        <p className="text-zinc-400">Senior Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Lead EHS consulting projects, focusing on program development,
                      compliance management, and safety culture improvement.
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
                        <h3 className="text-xl font-semibold">Safety Training Specialists</h3>
                        <p className="text-zinc-400">Lead Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Develop and deliver comprehensive safety training programs. Experience
                      with OSHA regulations and adult learning principles required.
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
                        <h3 className="text-xl font-semibold">Industrial Hygienists</h3>
                        <p className="text-zinc-400">Multiple Positions</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Conduct workplace assessments and develop health & safety programs.
                      CIH certification and field experience preferred.
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
              <li>• Relevant certifications (CSP, CIH, CHMM, etc.) preferred</li>
              <li>• Degree in relevant field (Safety, Environmental Science, Engineering)</li>
              <li>• Strong background in EHS management and compliance</li>
              <li>• Excellent problem-solving and communication skills</li>
              <li>• Commitment to safety and environmental stewardship</li>
              <li>• Ability to work with diverse teams and stakeholders</li>
            </ul>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
