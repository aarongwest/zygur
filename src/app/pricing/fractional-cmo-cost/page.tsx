import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, DollarSign, Clock, BarChart, PieChart } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function FractionalCMOCostPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional CMO Cost | Pricing & ROI Comparison | Zygur</title>
        <meta 
          name="description" 
          content="Transparent fractional CMO pricing information. Learn what a fractional CMO costs ($2K-$7K/month), cost comparisons to full-time CMOs, and typical ROI metrics." 
        />
        <meta name="keywords" content="fractional cmo cost, fractional cmo pricing, chief marketing officer salary, fractional cmo rates, marketing executive cost" />
        <link rel="canonical" href="https://zygur.com/pricing/fractional-cmo-cost" />
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Fractional CMO Cost: What to Expect and Why It's Worth It
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Looking for clear, transparent information about fractional CMO pricing? Here's a comprehensive 
              breakdown of costs, comparisons to full-time CMOs, and the ROI you can expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Discuss Your Specific Needs
                </Button>
              </Link>
            </div>
          </div>

          {/* Pricing Summary Section */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Fractional CMO Cost Overview</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-zinc-300 mb-6">
                  A <Link href="/resources/what-is-a-fractional-cmo" className="text-accent-orange hover:underline">fractional CMO</Link> typically costs between <strong className="text-white">$2,000 and $7,000 per month</strong>, depending on 
                  your company's size, needs, and the fractional CMO's level of expertise and time commitment.
                </p>
                <p className="text-zinc-300">
                  Most fractional CMO engagements start with a 3-6 month commitment, allowing enough time 
                  to develop and begin implementing a strategic marketing plan.
                </p>
              </div>
              <div className="md:w-1/2 bg-zinc-900/50 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-zinc-700">
                  <h3 className="text-xl font-semibold mb-2">Typical Monthly Cost Range</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center py-4 border-b border-zinc-800">
                    <span className="font-medium">Startup/Small Business</span>
                    <span className="font-bold text-accent-orange">$2,000 - $3,500</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-zinc-800">
                    <span className="font-medium">Mid-Market Company</span>
                    <span className="font-bold text-accent-orange">$3,500 - $5,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="font-medium">Growth-Stage/Enterprise</span>
                    <span className="font-bold text-accent-orange">$5,000 - $7,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Fractional vs. Full-Time CMO: Cost Comparison</h2>
            <div className="bg-zinc-900/60 rounded-lg overflow-hidden mb-8">
              <div className="grid grid-cols-3">
                <div className="p-6 bg-zinc-700/50 flex items-center justify-center">
                  <span className="font-semibold">Expense Type</span>
                </div>
                <div className="p-6 bg-zinc-700/50 border-l border-zinc-600 flex items-center justify-center">
                  <span className="font-semibold">Full-Time CMO</span>
                </div>
                <div className="p-6 bg-zinc-700/50 border-l border-zinc-600 flex items-center justify-center">
                  <span className="font-semibold">Fractional CMO</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 border-t border-zinc-700">
                <div className="p-6">
                  <span>Base Salary/Retainer</span>
                </div>
                <div className="p-6 border-l border-zinc-700 text-center">
                  <span className="text-white">$150,000 - $250,000</span>
                </div>
                <div className="p-6 border-l border-zinc-700 text-center">
                  <span className="text-accent-orange">$24,000 - $84,000</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 border-t border-zinc-700 bg-zinc-900/50">
                <div className="p-6 font-semibold">
                  <span>Total Annual Cost</span>
                </div>
                <div className="p-6 border-l border-zinc-700 text-center">
                  <span className="text-white font-bold">$240,000 - $535,000+</span>
                </div>
                <div className="p-6 border-l border-zinc-700 text-center">
                  <span className="text-accent-orange font-bold">$24,000 - $99,000</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center p-6 bg-zinc-900/50 rounded-lg">
              <div className="mr-4 text-accent-orange flex-shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <p className="text-sm">
                <strong>Potential Savings:</strong> Working with a fractional CMO typically saves 75-85% compared to a full-time CMO, 
                while still giving you access to executive-level marketing leadership.
              </p>
            </div>
          </div>

          {/* What You Get Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">What You Get for Your Investment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Time</h3>
                <p className="text-zinc-400 mb-4">
                  Typically 1-3 days per week of focused marketing leadership, with flexible 
                  arrangements based on your specific needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Strategic planning and execution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Team leadership and development</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Executive Expertise</h3>
                <p className="text-zinc-400 mb-4">
                  Access to C-level marketing expertise without the C-level price tag.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">10+ years of marketing leadership experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Industry-specific knowledge and insights</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <div className="h-12 w-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
                <p className="text-zinc-400 mb-4">
                  Focus on delivering tangible business outcomes rather than just marketing activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Marketing-attributed revenue</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Lead quality and conversion rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-orange/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to discuss your specific needs?</h2>
                <p className="text-zinc-400">Schedule a consultation to get a customized fractional CMO proposal.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-zinc-900 hover:bg-zinc-900/80 text-white font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Your Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
