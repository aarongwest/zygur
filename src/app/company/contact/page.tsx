import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Globe, LineChart, Book, BarChart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Get in touch with our team to learn more about our fractional CMO services
              and how we can help grow your business with AI-enhanced marketing strategies.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-neon-green" />
                </div>
                <h2 className="text-xl font-semibold">Marketing Strategy</h2>
              </div>
              <p className="text-zinc-400 mb-6">
                For businesses interested in our fractional CMO services,
                schedule a call with our marketing strategy team.
              </p>
              <Link href="/call">
                <Button className="bg-neon-green hover:bg-green-500 text-black font-medium w-full">
                  Schedule Call
                </Button>
              </Link>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold">Media & Press</h2>
              </div>
              <p className="text-zinc-400 mb-6">
                For media inquiries, interview requests, and press materials,
                contact our media relations team.
              </p>
              <Link href="/call">
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                  Media Inquiries
                </Button>
              </Link>
            </div>
          </div>

          {/* Resource Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/resources/what-is-a-fractional-cmo" className="bg-zinc-800/50 p-6 rounded-lg hover:bg-zinc-700/50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mr-3">
                    <Book className="w-5 h-5 text-neon-green" />
                  </div>
                  <h3 className="text-lg font-medium">What is a Fractional CMO?</h3>
                </div>
                <p className="text-zinc-400 text-sm">Learn about the role of a fractional CMO and how they can benefit your business.</p>
              </Link>

              <Link href="/compare/fractional-cmo-vs-agency" className="bg-zinc-800/50 p-6 rounded-lg hover:bg-zinc-700/50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                    <BarChart className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-medium">CMO vs Agency</h3>
                </div>
                <p className="text-zinc-400 text-sm">Compare the benefits of hiring a fractional CMO versus working with a marketing agency.</p>
              </Link>

              <Link href="/results/case-studies" className="bg-zinc-800/50 p-6 rounded-lg hover:bg-zinc-700/50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center mr-3">
                    <Lightbulb className="w-5 h-5 text-neon-green" />
                  </div>
                  <h3 className="text-lg font-medium">Case Studies</h3>
                </div>
                <p className="text-zinc-400 text-sm">Explore real-world examples of how our fractional CMO services have helped businesses grow.</p>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <div className="bg-zinc-800/50 rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
