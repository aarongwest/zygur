import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-zinc max-w-3xl">
            <p className="text-lg text-zinc-400 mb-12">
              At Zygur Technologies Corp., we take the privacy and security of our users' data extremely seriously.
              This policy outlines how we collect, use, and protect your information when using our defense technology solutions.
            </p>

            <h2>Information Collection</h2>
            <p>
              We collect information necessary for the operation and improvement of our defense technology services:
            </p>
            <ul>
              <li>Authentication and identity verification data</li>
              <li>System usage and performance metrics</li>
              <li>Technical data required for security operations</li>
              <li>Communication records with our support team</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement military-grade security measures to protect your data:
            </p>
            <ul>
              <li>Quantum-resistant encryption for all stored data</li>
              <li>Advanced intrusion detection and prevention systems</li>
              <li>Regular security audits and penetration testing</li>
              <li>Strict access controls and authentication protocols</li>
            </ul>

            <h2>Data Usage</h2>
            <p>
              Your data is used exclusively for:
            </p>
            <ul>
              <li>Providing and improving our defense technology services</li>
              <li>Ensuring system security and preventing unauthorized access</li>
              <li>Compliance with legal and regulatory requirements</li>
              <li>Research and development of advanced security features</li>
            </ul>

            <h2>Compliance</h2>
            <p>
              Our privacy practices comply with:
            </p>
            <ul>
              <li>International defense technology standards</li>
              <li>Military-grade data protection requirements</li>
              <li>Government security regulations</li>
              <li>Industry-specific compliance frameworks</li>
            </ul>

            <h2>Third-Party Access</h2>
            <p>
              We maintain strict controls over third-party access to your data:
            </p>
            <ul>
              <li>Rigorous vendor security assessments</li>
              <li>Contractual data protection obligations</li>
              <li>Continuous monitoring of third-party access</li>
              <li>Regular security compliance audits</li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of non-essential data collection</li>
              <li>Receive data breach notifications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For privacy-related inquiries, please use our contact form.
            </p>

            <div className="mt-8 p-4 bg-zinc-800/50 rounded-lg">
              <p className="text-sm text-zinc-400">
                Last updated: February 15, 2025
                <br />
                This privacy policy is subject to change. Users will be notified of any significant updates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
