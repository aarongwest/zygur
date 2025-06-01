import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Shield, Lock, Server, FileWarning, Bell, Users } from "lucide-react"

export default function SecurityPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent-yellow" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Security at Zygur
            </h1>
          </div>

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Our commitment to security is uncompromising. We implement military-grade protection
            across all our systems and operations to safeguard critical defense technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Infrastructure Security */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-accent-orange" />
                </div>
                <h2 className="text-2xl font-semibold">Infrastructure Security</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Quantum-resistant encryption</li>
                <li>Zero-trust architecture</li>
                <li>Redundant secure facilities</li>
                <li>24/7 infrastructure monitoring</li>
              </ul>
            </div>

            {/* Access Control */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-2xl font-semibold">Access Control</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Multi-factor authentication</li>
                <li>Biometric verification</li>
                <li>Role-based access control</li>
                <li>Security clearance verification</li>
              </ul>
            </div>

            {/* Incident Response */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-semibold">Incident Response</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>24/7 security operations center</li>
                <li>Automated threat detection</li>
                <li>Rapid response protocols</li>
                <li>Incident recovery procedures</li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <FileWarning className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-semibold">Compliance</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Military security standards</li>
                <li>International regulations</li>
                <li>Regular security audits</li>
                <li>Compliance certifications</li>
              </ul>
            </div>
          </div>

          {/* Security Team */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent-yellow" />
              </div>
              <h2 className="text-2xl font-semibold">Our Security Team</h2>
            </div>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              Our security team consists of veterans from military cyber operations, defense agencies,
              and leading cybersecurity organizations. We bring decades of experience in protecting
              critical infrastructure and sensitive military technologies.
            </p>
            <Link
              href="/company/careers"
              className="inline-flex items-center text-accent-orange hover:text-blue-400"
            >
              Join our security team
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Report Issues */}
          <div className="bg-zinc-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Report Security Issues</h2>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              We take security vulnerabilities seriously. If you discover a security issue,
              please report it immediately to our security team.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-accent-yellow/10 text-accent-yellow rounded-md hover:bg-accent-yellow/20 transition-colors"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
