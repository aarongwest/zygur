import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional CMO Case Studies | Client Success Stories | Zygur</title>
        <meta 
          name="description" 
          content="Real results from our fractional CMO services. Explore case studies showing how we've helped businesses across industries achieve measurable marketing success." 
        />
        <meta name="keywords" content="fractional cmo case studies, marketing success stories, cmo results, marketing roi examples" />
        <link rel="canonical" href="https://zygur.com/results/case-studies" />
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Fractional CMO Case Studies: Real Results for Real Businesses
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Explore how our fractional CMO services have helped businesses across industries 
              achieve measurable marketing success. From strategy to implementation, these case studies 
              demonstrate the tangible impact of expert marketing leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Case Studies Coming Soon</h2>
            <p className="text-zinc-300">
              We're currently developing detailed case studies showcasing our work with clients across 
              different industries. Check back soon to see real examples of how our fractional CMO 
              services have helped businesses achieve their marketing and growth objectives.
            </p>
            <div className="mt-8">
              <Link href="/resources/what-is-a-fractional-cmo">
                <Button variant="outline" className="mr-4">Learn About Fractional CMOs</Button>
              </Link>
              <Link href="/call">
                <Button className="bg-neon-green hover:bg-neon-green/80 text-zinc-900">Schedule a Consultation</Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-800/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results Coming Soon</h3>
              <p className="text-zinc-400 mb-4">Our case studies will showcase measurable results including:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-zinc-400">
                <li>Lead generation improvements</li>
                <li>Conversion rate optimization</li>
                <li>Marketing ROI enhancements</li>
                <li>Revenue growth metrics</li>
                <li>Marketing process optimization</li>
              </ul>
              <p className="text-zinc-400 italic text-sm">Case studies will span across multiple industries and company sizes.</p>
            </div>
            
            <div className="bg-zinc-800/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Industry-Specific Insights</h3>
              <p className="text-zinc-400 mb-4">Looking for results in your industry? We'll be adding case studies for:</p>
              <div className="space-y-3 mb-4">
                <Link href="/industries/saas-fractional-cmo" className="block text-neon-green hover:underline flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> SaaS & Technology
                </Link>
                <Link href="/industries/manufacturing-fractional-cmo" className="block text-neon-green hover:underline flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Manufacturing
                </Link>
                <Link href="/industries/professional-services-fractional-cmo" className="block text-neon-green hover:underline flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Professional Services
                </Link>
                <Link href="/industries/ecommerce-fractional-cmo" className="block text-neon-green hover:underline flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> E-commerce
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
