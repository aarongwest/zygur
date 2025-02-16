import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Globe, Shield } from "lucide-react"
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
              Get in touch with our team to learn more about our defense technology
              solutions and how we can support your organization.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold">Defense Organizations</h2>
              </div>
              <p className="text-zinc-400 mb-6">
                For military and defense organizations interested in our solutions,
                schedule a call with our defense technology team.
              </p>
              <Link href="/call">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  Schedule Call
                </Button>
              </Link>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-xl font-semibold">Media & Press</h2>
              </div>
              <p className="text-zinc-400 mb-6">
                For media inquiries, interview requests, and press materials,
                contact our media relations team.
              </p>
              <Link href="/call">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white w-full">
                  Media Inquiries
                </Button>
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
