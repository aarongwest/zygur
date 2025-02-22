import { PageLayout } from "@/components/layout/page-layout"

export default function ConsultingPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight mb-8">EHS Consulting Services</h1>
          <p className="text-lg text-zinc-400 mb-12">
            Our expert consulting services help organizations develop, implement, and maintain effective EHS programs. With decades of industry experience, we provide strategic guidance and practical solutions to enhance safety performance and ensure regulatory compliance.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Core Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Program Development</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Safety program creation</li>
                    <li>• Policy and procedure development</li>
                    <li>• Implementation strategies</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Audits & Assessments</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Compliance audits</li>
                    <li>• Risk assessments</li>
                    <li>• Program evaluations</li>
                    <li>• Gap analysis</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Compliance Management</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Regulatory compliance guidance</li>
                    <li>• Documentation review</li>
                    <li>• Permit management</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Training & Development</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Training program design</li>
                    <li>• Safety leadership development</li>
                    <li>• Train-the-trainer programs</li>
                    <li>• Performance evaluation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Industry Expertise</h2>
              <div className="space-y-4">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Manufacturing & Industrial</h3>
                  <p className="text-zinc-400">
                    Specialized expertise in process safety, machine guarding, industrial hygiene, and OSHA compliance for manufacturing environments.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Construction & Contractors</h3>
                  <p className="text-zinc-400">
                    Comprehensive solutions for construction safety, contractor management, and compliance with industry-specific regulations.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Healthcare & Laboratory</h3>
                  <p className="text-zinc-400">
                    Expert guidance on healthcare safety, infection control, laboratory safety, and regulatory compliance for medical facilities.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
              <div className="space-y-4">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Customized Solutions</h3>
                  <p className="text-zinc-400">
                    We develop tailored solutions that address your specific challenges and align with your organizational goals and culture.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Continuous Support</h3>
                  <p className="text-zinc-400">
                    Our team provides ongoing guidance and support to ensure successful implementation and sustainable improvement of your EHS programs.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Measurable Results</h3>
                  <p className="text-zinc-400">
                    We focus on delivering quantifiable improvements in safety performance, compliance rates, and operational efficiency.
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
