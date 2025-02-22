import { PageLayout } from "@/components/layout/page-layout"

export default function TrainingPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight mb-8">Safety Training Programs</h1>
          <p className="text-lg text-zinc-400 mb-12">
            Our comprehensive safety training programs help organizations build a strong safety culture and maintain regulatory compliance. We offer both standardized and custom training solutions delivered through multiple formats to meet your specific needs.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Training Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">OSHA Compliance Training</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• OSHA 10/30 Hour courses</li>
                    <li>• Hazard communication</li>
                    <li>• Fall protection</li>
                    <li>• Confined space entry</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Safety Leadership</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Safety management principles</li>
                    <li>• Incident investigation</li>
                    <li>• Risk assessment</li>
                    <li>• Emergency response</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Specialized Training</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• First aid and CPR</li>
                    <li>• Bloodborne pathogens</li>
                    <li>• Ergonomics</li>
                    <li>• Industrial hygiene</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Custom Programs</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Industry-specific training</li>
                    <li>• Company procedures</li>
                    <li>• Equipment operation</li>
                    <li>• Safety protocols</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Delivery Methods</h2>
              <div className="space-y-4">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">On-Site Training</h3>
                  <p className="text-zinc-400">
                    Instructor-led training at your facility, featuring hands-on demonstrations, practical exercises, and site-specific content customization.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Online Learning</h3>
                  <p className="text-zinc-400">
                    Interactive e-learning modules with multimedia content, self-paced progression, and automated tracking of completion and certifications.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Blended Learning</h3>
                  <p className="text-zinc-400">
                    Combination of online and in-person training to maximize effectiveness and accommodate different learning styles and schedules.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Program Features</h2>
              <div className="space-y-4">
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Certification Management</h3>
                  <p className="text-zinc-400">
                    Automated tracking of training completion, certification status, and renewal requirements. Digital certificates and compliance documentation.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Performance Verification</h3>
                  <p className="text-zinc-400">
                    Comprehensive assessment tools including knowledge checks, skills evaluation, and practical demonstrations to ensure learning effectiveness.
                  </p>
                </div>
                <div className="p-6 bg-zinc-800/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Continuous Support</h3>
                  <p className="text-zinc-400">
                    Ongoing program evaluation, content updates, and technical support to ensure your training program remains current and effective.
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
