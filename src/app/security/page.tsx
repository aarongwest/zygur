import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Shield, Lock, Server, FileWarning, Bell, Users } from "lucide-react"

export default function SecurityPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-rose-500" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Security at EHS, Inc.
            </h1>
          </div>

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Our commitment to security is uncompromising. We implement robust protection
            across all our systems and operations to safeguard your EHS data and operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Infrastructure Security */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold">Infrastructure Security</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Industry-standard encryption</li>
                <li>Secure cloud architecture</li>
                <li>Redundant data centers</li>
                <li>24/7 system monitoring</li>
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
                <li>Single sign-on options</li>
                <li>Role-based permissions</li>
                <li>Access audit logging</li>
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
                <li>Security monitoring center</li>
                <li>Automated alerts</li>
                <li>Response procedures</li>
                <li>Data recovery protocols</li>
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
                <li>Industry security standards</li>
                <li>EHS regulations</li>
                <li>Regular audits</li>
                <li>Security certifications</li>
              </ul>
            </div>
          </div>

          {/* Security Team */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-rose-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Security Team</h2>
            </div>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              Our security team consists of experienced professionals from leading technology and
              cybersecurity organizations. We bring extensive expertise in protecting sensitive
              business data and ensuring reliable system operations.
            </p>
            <Link
              href="/company/careers"
              className="inline-flex items-center text-blue-500 hover:text-blue-400"
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
              We take the security of your EHS data seriously. If you discover any security
              concerns, please report them immediately to our security team.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-rose-500/10 text-rose-500 rounded-md hover:bg-rose-500/20 transition-colors"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
