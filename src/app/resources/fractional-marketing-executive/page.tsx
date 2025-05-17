import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function FractionalMarketingExecutivePage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional Marketing Executive | Part-Time Marketing Leadership | Zygur</title>
        <meta 
          name="description" 
          content="Access experienced fractional marketing executive leadership to drive strategy, build teams, and accelerate growth without the commitment of a full-time hire." 
        />
        <meta name="keywords" content="fractional marketing executive, part-time marketing leader, interim marketing leader, marketing leadership consultant" />
        <link rel="canonical" href="https://zygur.com/resources/fractional-marketing-executive" />
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Fractional Marketing Executive: Flexible Leadership Solutions
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Access experienced marketing executive leadership on a part-time or project basis. 
              Drive strategic initiatives, build high-performing teams, and accelerate growth
              without the cost and commitment of a full-time executive hire.
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
            <h2 className="text-2xl font-bold mb-6">Content Coming Soon</h2>
            <p className="text-zinc-300">
              We're currently developing comprehensive content about our Fractional Marketing Executive services. 
              Check back soon for detailed information on how our flexible leadership solutions can help
              your business accelerate growth with expert marketing guidance.
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
        </div>
      </main>
    </PageLayout>
  );
}
