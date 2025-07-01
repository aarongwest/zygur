import { PageLayout } from "@/components/layout/page-layout";
import { ScheduleCallForm } from "@/components/schedule-call-form";
import { Calendar, Clock, CheckCircle, User } from "lucide-react";

export const metadata = {
  title: "Schedule Technology Consultation | Utah Engineering Company | Zygur",
  description: "Schedule a free consultation with Utah's premier technology company. Discuss your project needs for custom manufacturing, software development, and complete solution engineering.",
  keywords: "technology consultation utah, engineering consultation, project consultation, custom manufacturing consultation, software development consultation, utah technology company consultation",
  openGraph: {
    title: "Schedule Technology Consultation | Utah Engineering Company | Zygur",
    description: "Schedule a free consultation with Utah's premier technology company. Discuss your project needs for custom manufacturing, software development, and complete solution engineering.",
    url: "https://zygur.com/call",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Technology Consultation | Utah Engineering Company | Zygur",
    description: "Schedule a free consultation with Utah's premier technology company. Discuss your project needs for custom manufacturing, software development, and complete solution engineering.",
  },
  alternates: {
    canonical: "https://zygur.com/call",
  },
}

export default function CallPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Limited Availability | Selective Project Engagement
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Schedule Your Project Consultation
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Let's discuss your technology project and explore how our complete Design, Develop, Deploy 
              methodology can bring your solution to life with precision engineering and strategic deployment.
            </p>
          </div>

          {/* Schedule Call Form */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <h2 className="text-xl font-bold mb-6">Reserve Your Consultation</h2>
                <ScheduleCallForm />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-gradient-to-b from-accent-orange/20 to-zinc-900/60 rounded-lg p-8 h-full">
                <h2 className="text-xl font-bold mb-6">Why Schedule a Consultation?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Calendar className="w-4 h-4 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">No Obligation</h3>
                      <p className="text-sm text-zinc-400">
                        A focused conversation to explore your project needs and determine if we're the right fit. No pressure, no sales tactics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Immediate Value</h3>
                      <p className="text-sm text-zinc-400">
                        You'll walk away with actionable insights for your technology project, 
                        whether we work together or not.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Clock className="w-4 h-4 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Selective Engagement</h3>
                      <p className="text-sm text-zinc-400">
                        We carefully select projects that align with our expertise to ensure exceptional results and focused attention.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <User className="w-4 h-4 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Direct Access</h3>
                      <p className="text-sm text-zinc-400">
                        Speak directly with Aaron West, CTO - not a salesperson or account manager.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Project Discovery</h3>
                <p className="text-zinc-400">
                  We'll discuss your technology needs, current challenges, and project goals to understand your specific requirements.
                </p>
              </div>
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Solution Analysis</h3>
                <p className="text-zinc-400">
                  I'll share initial thoughts on your project approach and how our 3D methodology could bring your solution to life.
                </p>
              </div>
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Next Steps</h3>
                <p className="text-zinc-400">
                  If we're a good fit, we'll discuss project scope and engagement options. If not, I'll recommend alternative resources to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
