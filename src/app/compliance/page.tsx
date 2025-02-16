import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { CheckCircle, FileCheck, Globe2, Scale, Building, FileWarning } from "lucide-react"

export default function CompliancePage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Compliance & Certifications
            </h1>
          </div>

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Zygur Corporation maintains the highest standards of compliance with international
            defense regulations and industry certifications. Our commitment to compliance ensures
            the security and reliability of our defense technology solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Defense Standards */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Building className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold">Defense Standards</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Military-grade security protocols</li>
                <li>Defense acquisition compliance</li>
                <li>Classified information handling</li>
                <li>Secure facility requirements</li>
              </ul>
            </div>

            {/* International Regulations */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-semibold">International Regulations</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Export control compliance</li>
                <li>International arms regulations</li>
                <li>Cross-border data transfer</li>
                <li>Global security standards</li>
              </ul>
            </div>

            {/* Legal Requirements */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-2xl font-semibold">Legal Requirements</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Government contracting laws</li>
                <li>Data protection regulations</li>
                <li>Intellectual property rights</li>
                <li>Contractual obligations</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-rose-500" />
                </div>
                <h2 className="text-2xl font-semibold">Certifications</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>ISO 27001 certification</li>
                <li>CMMC Level 5 compliance</li>
                <li>NIST SP 800-171 compliance</li>
                <li>SOC 2 Type II certification</li>
              </ul>
            </div>
          </div>

          {/* Compliance Program */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Compliance Program</h2>
            <div className="space-y-6 text-zinc-400">
              <p className="max-w-3xl">
                Our comprehensive compliance program ensures adherence to all relevant regulations
                and standards in the defense technology industry. We maintain a dedicated team of
                compliance experts who continuously monitor and update our practices.
              </p>
              <p className="max-w-3xl">
                Regular audits, assessments, and training programs help us maintain the highest
                levels of compliance across all our operations. Our commitment to compliance
                extends to our partners and suppliers through rigorous vendor assessment programs.
              </p>
            </div>
          </div>

          {/* Report Compliance Issues */}
          <div className="bg-zinc-800/50 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <FileWarning className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Report Compliance Issues</h2>
            </div>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              We encourage reporting of any compliance concerns. Our compliance hotline is available
              24/7, and all reports are treated with strict confidentiality.
            </p>
            <div className="flex flex-col space-y-4">
              <Link
                href="mailto:compliance@zygur.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-amber-500/10 text-amber-500 rounded-md hover:bg-amber-500/20 transition-colors"
              >
                Contact Compliance Team
              </Link>
              <Link
                href="/compliance/reporting-guide"
                className="inline-flex items-center justify-center px-4 py-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors"
              >
                View Reporting Guidelines
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
