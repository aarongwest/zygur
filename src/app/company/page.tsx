import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { ArrowRight, Building2, Rocket, Users2, Handshake } from "lucide-react"

export default function CompanyPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Leading the Future of EHS Management
            </h1>
            <p className="text-lg text-zinc-400 mb-12">
              EHS, Inc. is a leading provider of environmental, health, and safety solutions.
              We combine innovative technology, expert consulting, and proven methodologies to help organizations achieve safety excellence and regulatory compliance.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {/* About Us */}
              <Link 
                href="/company/about"
                className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-500" />
                      </div>
                      <h2 className="text-2xl font-semibold">About Us</h2>
                    </div>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                      Learn about our mission to transform EHS management and our commitment to workplace safety.
                      Discover our history of innovation and industry leadership.
                    </p>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        Our mission and values
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        Leadership team
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        Company history
                      </li>
                    </ul>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              {/* Careers */}
              <Link 
                href="/company/careers"
                className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-purple-500" />
                      </div>
                      <h2 className="text-2xl font-semibold">Careers</h2>
                    </div>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                      Join our team of EHS professionals and innovators working to enhance workplace safety.
                      Help organizations achieve safety excellence and regulatory compliance.
                    </p>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                        Open positions
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                        Benefits and culture
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                        Research opportunities
                      </li>
                    </ul>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              {/* Contact */}
              <Link 
                href="/company/contact"
                className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Users2 className="w-6 h-6 text-emerald-500" />
                      </div>
                      <h2 className="text-2xl font-semibold">Contact</h2>
                    </div>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                      Get in touch with our team to discuss your EHS management needs.
                      Connect with our experts for consultations and program development.
                    </p>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                        Sales inquiries
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                        Support channels
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                        Office locations
                      </li>
                    </ul>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>

              {/* Partners */}
              <Link 
                href="/company/partners"
                className="group block bg-zinc-800/50 rounded-lg p-8 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-amber-500" />
                      </div>
                      <h2 className="text-2xl font-semibold">Partners</h2>
                    </div>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                      Explore our network of industry partners and certification bodies.
                      Learn about our affiliations and accreditations.
                    </p>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                        Industry associations
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                        Certification partners
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                        Technology integrations
                      </li>
                    </ul>
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
