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
              Get in touch with our team to discuss your technology solution needs.
              From design and prototyping to manufacturing and deployment, we're here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-accent-orange" />
                </div>
                <h2 className="text-xl font-semibold">Project Consultation</h2>
              </div>
              <p className="text-zinc-400 mb-6">
                Ready to discuss your technology solution? Schedule a consultation
                to explore how we can bring your project to life.
              </p>
              <Link href="/call">
                <Button className="bg-accent-orange hover:bg-accent-orange/80 text-white font-medium w-full">
                  Schedule Consultation
                </Button>
              </Link>
            </div>

            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent-yellow" />
                </div>
                <h2 className="text-xl font-semibold">Media & Press</h2>
              </div>
              <p className="text-zinc-400 mb-6">
                For media inquiries, interview requests, and press materials,
                contact our media relations team.
              </p>
              <Link href="/call">
                <Button className="bg-accent-yellow hover:bg-accent-yellow/80 text-black w-full">
                  Media Inquiries
                </Button>
              </Link>
            </div>
          </div>

          {/* Resource Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/solutions/design-prototyping" className="bg-zinc-900/60 p-6 rounded-lg hover:bg-zinc-700/50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <Book className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="text-lg font-medium">Design & Prototyping</h3>
                </div>
                <p className="text-zinc-400 text-sm">Learn about our design and prototyping capabilities for bringing your concepts to life.</p>
              </Link>

              <Link href="/solutions/manufacturing-development" className="bg-zinc-900/60 p-6 rounded-lg hover:bg-zinc-700/50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                    <BarChart className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <h3 className="text-lg font-medium">Manufacturing & Development</h3>
                </div>
                <p className="text-zinc-400 text-sm">Explore our manufacturing and software development capabilities for complete solutions.</p>
              </Link>

              <Link href="/labs" className="bg-zinc-900/60 p-6 rounded-lg hover:bg-zinc-700/50 transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <Lightbulb className="w-5 h-5 text-accent-orange" />
                  </div>
                  <h3 className="text-lg font-medium">Innovation Labs</h3>
                </div>
                <p className="text-zinc-400 text-sm">Discover our latest research and development projects in our innovation labs.</p>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
