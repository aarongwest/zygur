import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"

export default function TermsPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-zinc max-w-3xl">
            <p className="text-lg text-zinc-400 mb-12">
              These Terms of Service govern your use of Zygur Technologies Corp.'s defense technology solutions.
              By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2>Service Usage</h2>
            <p>
              Our services are restricted to authorized users and organizations:
            </p>
            <ul>
              <li>Valid security clearance requirements must be met</li>
              <li>Usage must comply with international defense regulations</li>
              <li>Access credentials are non-transferable</li>
              <li>All system activities are monitored and logged</li>
            </ul>

            <h2>Security Requirements</h2>
            <p>
              Users must maintain strict security standards:
            </p>
            <ul>
              <li>Implementation of required security protocols</li>
              <li>Regular security training and certification</li>
              <li>Compliance with access control policies</li>
              <li>Immediate reporting of security incidents</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All technology and content provided by Zygur Technologies Corp. is protected:
            </p>
            <ul>
              <li>Proprietary algorithms and systems</li>
              <li>Classified technical documentation</li>
              <li>Custom software implementations</li>
              <li>Research and development outputs</li>
            </ul>

            <h2>Liability</h2>
            <p>
              Our liability is limited according to:
            </p>
            <ul>
              <li>Service level agreements</li>
              <li>Contractual obligations</li>
              <li>Applicable defense industry regulations</li>
              <li>International arms control treaties</li>
            </ul>

            <h2>Compliance Requirements</h2>
            <p>
              Users must comply with:
            </p>
            <ul>
              <li>Export control regulations</li>
              <li>Defense technology standards</li>
              <li>Data protection requirements</li>
              <li>Security clearance protocols</li>
            </ul>

            <h2>Service Modifications</h2>
            <p>
              Zygur Technologies Corp. reserves the right to:
            </p>
            <ul>
              <li>Modify or discontinue services</li>
              <li>Update security requirements</li>
              <li>Revise usage policies</li>
              <li>Implement emergency security measures</li>
            </ul>

            <h2>Termination</h2>
            <p>
              Service access may be terminated for:
            </p>
            <ul>
              <li>Security violations</li>
              <li>Non-compliance with terms</li>
              <li>Unauthorized usage</li>
              <li>Breach of security protocols</li>
            </ul>

            <h2>Contact</h2>
            <p>
              For terms of service inquiries, please use our contact form.
            </p>

            <div className="mt-8 p-4 bg-zinc-800/50 rounded-lg">
              <p className="text-sm text-zinc-400">
                Last updated: February 15, 2025
                <br />
                These terms are subject to change. Users will be notified of any significant updates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
