import { PageLayout } from "@/components/layout/page-layout";
import { ScheduleCallForm } from "@/components/schedule-call-form";

export default function CallPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Schedule a Call
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Let's discuss how our defense technology solutions can benefit your organization. 
              Fill out the form below to schedule a call with our team.
            </p>
          </div>

          {/* Schedule Call Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-zinc-800/50 rounded-lg p-8">
              <ScheduleCallForm />
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Initial Consultation</h3>
                <p className="text-zinc-400">
                  A 30-minute call to understand your organization's needs and discuss potential solutions.
                </p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Technical Overview</h3>
                <p className="text-zinc-400">
                  Detailed walkthrough of our technology capabilities and integration possibilities.
                </p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Next Steps</h3>
                <p className="text-zinc-400">
                  Clear action items and recommendations tailored to your organization's goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </PageLayout>
  );
}
