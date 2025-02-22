import { PageLayout } from "@/components/layout/page-layout"

export default function SoftwarePage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight mb-8">EHS Software Platform</h1>
          <p className="text-lg text-zinc-400 mb-12">
            Our comprehensive EHS software platform streamlines compliance management, incident reporting, and risk assessment. Built with modern technology and designed for ease of use, our platform helps organizations maintain safety standards while improving operational efficiency.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Compliance Management</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Automated compliance tracking</li>
                    <li>• Regulatory requirement monitoring</li>
                    <li>• Documentation management</li>
                    <li>• Audit trail maintenance</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Incident Management</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Incident reporting and tracking</li>
                    <li>• Investigation workflows</li>
                    <li>• Root cause analysis</li>
                    <li>• Corrective action management</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Risk Assessment</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Hazard identification</li>
                    <li>• Risk evaluation tools</li>
                    <li>• Control measure tracking</li>
                    <li>• Prevention planning</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Analytics & Reporting</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Custom dashboard creation</li>
                    <li>• Performance metrics</li>
                    <li>• Trend analysis</li>
                    <li>• Executive reporting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
              <div className="space-y-4">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Improved Efficiency</h3>
                  <p className="text-zinc-400">
                    Automate routine tasks, streamline workflows, and reduce manual data entry. Our platform helps your team focus on strategic initiatives rather than administrative work.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Enhanced Compliance</h3>
                  <p className="text-zinc-400">
                    Stay ahead of regulatory requirements with automated tracking, alerts, and documentation management. Reduce compliance risks and maintain audit readiness.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Better Decision Making</h3>
                  <p className="text-zinc-400">
                    Leverage data-driven insights through advanced analytics and reporting. Identify trends, track performance, and make informed decisions to improve safety outcomes.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
