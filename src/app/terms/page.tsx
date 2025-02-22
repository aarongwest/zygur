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
              These Terms of Service govern your use of EHS, Inc.'s environmental health and safety solutions.
              By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2>Service Usage</h2>
            <p>
              Our services are available to authorized users and organizations:
            </p>
            <ul>
              <li>Valid subscription or license required</li>
              <li>Usage must comply with EHS regulations</li>
              <li>Access credentials are non-transferable</li>
              <li>System usage is monitored for security</li>
            </ul>

            <h2>Security Requirements</h2>
            <p>
              Users must follow standard security practices:
            </p>
            <ul>
              <li>Maintain secure password policies</li>
              <li>Complete required user training</li>
              <li>Follow access control guidelines</li>
              <li>Report any security concerns</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All technology and content provided by EHS, Inc. is protected:
            </p>
            <ul>
              <li>Proprietary software and systems</li>
              <li>Training materials and documentation</li>
              <li>Custom implementations</li>
              <li>Safety and compliance resources</li>
            </ul>

            <h2>Liability</h2>
            <p>
              Our liability is limited according to:
            </p>
            <ul>
              <li>Service level agreements</li>
              <li>Contractual obligations</li>
              <li>Industry standards</li>
              <li>Applicable regulations</li>
            </ul>

            <h2>Compliance Requirements</h2>
            <p>
              Users must comply with:
            </p>
            <ul>
              <li>EHS regulations</li>
              <li>Industry standards</li>
              <li>Data protection laws</li>
              <li>Security requirements</li>
            </ul>

            <h2>Service Modifications</h2>
            <p>
              EHS, Inc. reserves the right to:
            </p>
            <ul>
              <li>Modify or discontinue services</li>
              <li>Update system requirements</li>
              <li>Revise service policies</li>
              <li>Implement security updates</li>
            </ul>

            <h2>Termination</h2>
            <p>
              Service access may be terminated for:
            </p>
            <ul>
              <li>Terms violations</li>
              <li>Non-compliance with policies</li>
              <li>Unauthorized access</li>
              <li>Misuse of services</li>
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
