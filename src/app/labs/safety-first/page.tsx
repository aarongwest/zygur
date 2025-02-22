import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Filter, MessageCircle, Tags, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function SafetyFirstPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Safety First Initiative
            </h1>
          </div>

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            A comprehensive workplace safety initiative that transformed organizational culture
            and dramatically improved safety metrics. This innovative program demonstrates how
            technology and best practices can create lasting change.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/1.png"
                  alt="Safety First Initiative"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Communication Features */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-semibold">Safety Communication</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Real-time hazard reporting</li>
                <li>Safety meeting coordination</li>
                <li>Incident notification system</li>
                <li>Best practice sharing</li>
              </ul>
            </div>

            {/* Group Management */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-semibold">Risk Management</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Risk assessment protocols</li>
                <li>Safety inspection checklists</li>
                <li>Corrective action tracking</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            {/* Tagging System */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Tags className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-semibold">Training System</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Safety training modules</li>
                <li>Certification tracking</li>
                <li>Competency assessments</li>
                <li>Training analytics</li>
              </ul>
            </div>

            {/* Filtering & Search */}
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <Filter className="w-5 h-5 text-rose-500" />
                </div>
                <h2 className="text-2xl font-semibold">Data Analytics</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Safety metrics tracking</li>
                <li>Trend analysis</li>
                <li>Performance reporting</li>
                <li>Predictive insights</li>
              </ul>
            </div>
              </div>

              {/* Organization Features */}
              <div className="bg-zinc-800/50 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Program Components</h2>
            </div>
            <div className="space-y-6 text-zinc-400 max-w-3xl">
              <p>
                The Safety First Initiative combines technology, training, and cultural change to create
                a comprehensive approach to workplace safety:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Leadership engagement and commitment</li>
                <li>Employee participation programs</li>
                <li>Continuous improvement processes</li>
                <li>Safety recognition systems</li>
                <li>Regular safety audits and reviews</li>
                <li>Integration with operations</li>
              </ul>
            </div>
              </div>

              {/* Development Status */}
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Project Status</h2>
                <p className="text-zinc-400 mb-6">
                  Developed through collaboration with industry partners, the Safety First Initiative
                  has been successfully implemented across multiple organizations. The program continues
                  to evolve based on feedback and emerging best practices in workplace safety.
                </p>
              </div>

              {/* Terms of Use Card */}
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Implementation Guide</h2>
                <div className="prose prose-invert prose-zinc max-w-3xl">
                  <p className="text-sm text-zinc-500 mb-6">Last Updated: January 2024</p>
                  <p className="text-zinc-400 mb-6">
                    The Safety First Initiative can be customized for your organization's specific needs.
                    This guide outlines the key steps and considerations for successful implementation.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">1. Leadership Commitment</h3>
                      <p className="text-zinc-400">
                        Successful implementation starts with strong leadership commitment. Leaders must
                        demonstrate visible support and allocate necessary resources to the program.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">2. Employee Engagement</h3>
                      <p className="text-zinc-400">
                        Employee involvement is crucial for program success. Create a framework
                        for active participation and feedback from all levels of the organization.
                      </p>
                      <p className="text-zinc-400 mt-4">Key engagement elements:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Safety committees and teams</li>
                        <li>Regular safety meetings and toolbox talks</li>
                        <li>Recognition and reward programs</li>
                        <li>Clear communication channels</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">3. Program Implementation</h3>
                      <p className="text-zinc-400">Key implementation steps include:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Initial safety culture assessment</li>
                        <li>Development of specific safety goals</li>
                        <li>Creation of action plans and timelines</li>
                        <li>Assignment of responsibilities</li>
                        <li>Regular progress monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">4. Training and Education</h3>
                      <p className="text-zinc-400">
                        Comprehensive training is essential for program success:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Safety awareness and hazard recognition</li>
                        <li>Specific job safety procedures</li>
                        <li>Emergency response protocols</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">5. Monitoring and Measurement</h3>
                      <p className="text-zinc-400">
                        Track progress and measure effectiveness through:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Key performance indicators (KPIs)</li>
                        <li>Regular safety audits and inspections</li>
                        <li>Incident investigation and analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">6. Continuous Improvement</h3>
                      <p className="text-zinc-400">
                        Maintain program effectiveness through:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Regular program reviews</li>
                        <li>Feedback incorporation</li>
                        <li>Best practice updates</li>
                        <li>Performance benchmarking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Policy Card */}
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Results & Impact</h2>
                <div className="prose prose-invert prose-zinc max-w-3xl">
                  <p className="text-sm text-zinc-500 mb-6">Last Updated: January 2024</p>
                  <p className="text-zinc-400 mb-6">
                    Organizations implementing the Safety First Initiative have seen significant improvements
                    in their safety performance and operational efficiency.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Key Results</h3>
                      <p className="text-zinc-400">Organizations have achieved:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Significant reduction in incident rates</li>
                        <li>Improved safety culture scores</li>
                        <li>Enhanced employee engagement</li>
                        <li>Reduced workers' compensation costs</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Business Impact</h3>
                      <p className="text-zinc-400">Benefits include:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Lower insurance premiums</li>
                        <li>Increased operational efficiency</li>
                        <li>Improved regulatory compliance</li>
                        <li>Enhanced company reputation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Long-term Success</h3>
                      <p className="text-zinc-400">
                        Ensure sustained program effectiveness through:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Management system integration</li>
                        <li>Resource allocation</li>
                        <li>Ongoing training programs</li>
                        <li>Cultural reinforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Support */}
            <div className="lg:col-span-1 space-y-8">
              {/* Support Card */}
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
                <p className="text-zinc-400 mb-6">
                  Interested in implementing the Safety First Initiative in your organization?
                  Our team is here to help you get started. Fill out the form below to learn
                  more about how we can help transform your safety culture.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
