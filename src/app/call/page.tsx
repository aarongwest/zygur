import { PageLayout } from "@/components/layout/page-layout";
import { ScheduleCallForm } from "@/components/schedule-call-form";
import { Calendar, Clock, CheckCircle, User } from "lucide-react";

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
                Limited Availability | Only 7 Client Spots Per Year
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Schedule Your Strategy Call
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Let's discuss how my AI-enhanced fractional CMO approach can help your business achieve 
              exceptional marketing results at a fraction of the cost of traditional solutions.
            </p>
          </div>

          {/* Schedule Call Form */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="bg-dark-green/60 rounded-lg p-8">
                <h2 className="text-xl font-bold mb-6">Reserve Your Spot</h2>
                <ScheduleCallForm />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-gradient-to-b from-accent-orange/20 to-dark-green/60 rounded-lg p-8 h-full">
                <h2 className="text-xl font-bold mb-6">Why Schedule a Call?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Calendar className="w-4 h-4 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">No Obligation</h3>
                      <p className="text-sm text-zinc-400">
                        A focused conversation to explore if we're a good fit for each other. No pressure, no sales tactics.
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
                        You'll walk away with at least one actionable insight for your marketing, 
                        whether we work together or not.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Clock className="w-4 h-4 text-accent-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Limited Availability</h3>
                      <p className="text-sm text-zinc-400">
                        I only accept 7 clients per year to ensure focused attention and exceptional results for each business.
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
                        Speak directly with me, Aaron West - not a salesperson or account manager.
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
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Discovery</h3>
                <p className="text-zinc-400">
                  We'll discuss your business, current marketing challenges, and goals to understand your specific situation.
                </p>
              </div>
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Opportunity Analysis</h3>
                <p className="text-zinc-400">
                  I'll share initial thoughts on your most immediate opportunities and how my AI-enhanced approach could help.
                </p>
              </div>
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent-orange">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Potential Paths Forward</h3>
                <p className="text-zinc-400">
                  If we're a good fit, we'll discuss engagement options. If not, I'll recommend alternative resources to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
