import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">Our Services</h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Comprehensive environmental, health, and safety solutions for modern businesses. We combine expert consulting, innovative software, and proven methodologies to ensure compliance and drive operational excellence.
        </p>

        <div className="space-y-6">
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
                  <ul className="text-sm text-zinc-400 list-disc ml-4">
                    <li>Compliance management and tracking</li>
                    <li>Incident reporting and investigation</li>
                    <li>Risk assessment and mitigation</li>
                  </ul>
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
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-rose-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">EHS Consulting</h3>
                  <ul className="text-sm text-zinc-400 list-disc ml-4">
                    <li>Program development and implementation</li>
                    <li>Audits and assessments</li>
                    <li>Regulatory compliance guidance</li>
                  </ul>
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
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Safety Training</h3>
                  <ul className="text-sm text-zinc-400 list-disc ml-4">
                    <li>OSHA compliance training</li>
                    <li>Custom safety programs</li>
                    <li>Certification and recertification</li>
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
