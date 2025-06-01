import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Newspaper, ArrowRight, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PressPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Press & Media
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Latest news, announcements, and media coverage about Zygur's innovations
              in defense technology.
            </p>
            <Link href="/call">
              <Button className="bg-accent-orange hover:bg-blue-600 text-white">
                Media Inquiries
              </Button>
            </Link>
          </div>

          {/* Latest News */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="space-y-8">
              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Breakthrough in Quantum Computing</h3>
                        <p className="text-zinc-400">February 10, 2025</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Zygur announces major breakthrough in quantum error correction,
                      achieving 99.99% accuracy in quantum computations for military
                      applications.
                    </p>
                    <div className="flex items-center text-amber-500">
                      <Link href="/login" className="flex items-center hover:text-amber-400">
                        Read full story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Strategic Partnership Announcement</h3>
                        <p className="text-zinc-400">January 25, 2025</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Zygur partners with leading defense organizations to develop
                      next-generation autonomous defense systems.
                    </p>
                    <div className="flex items-center text-accent-orange">
                      <Link href="/login" className="flex items-center hover:text-accent-orange">
                        Read full story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-green/60 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Newspaper className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">AI Innovation Recognition</h3>
                        <p className="text-zinc-400">January 15, 2025</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4">
                      Zygur's AI-driven defense systems receive recognition for
                      revolutionary advances in military technology.
                    </p>
                    <div className="flex items-center text-purple-500">
                      <Link href="/login" className="flex items-center hover:text-purple-400">
                        Read full story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Resources */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Press Contacts</h3>
                <p className="text-zinc-400 mb-4">
                  For press inquiries and interview requests, please contact our media
                  relations team.
                </p>
                <Link href="/call">
                  <Button variant="outline" className="border-zinc-700 hover:bg-dark-green/80">
                    Contact Media Relations
                  </Button>
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-zinc-200">Media Kit</h3>
                <p className="text-zinc-400 mb-4">
                  Download official logos, executive photos, and product images for
                  media use.
                </p>
                <Link href="/login">
                  <Button variant="outline" className="border-zinc-700 hover:bg-dark-green/80">
                    Access Media Kit
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Coverage Highlights */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Coverage Highlights</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-400 italic mb-2">
                  "Zygur's quantum computing breakthrough represents a significant leap
                  forward in military technology capabilities..."
                </p>
                <p className="text-zinc-500">- Defense Technology Review</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-400 italic mb-2">
                  "The company's innovative approach to AI-driven defense systems is
                  setting new standards in military operations..."
                </p>
                <p className="text-zinc-500">- Military Innovation Journal</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-6">
                <p className="text-zinc-400 italic mb-2">
                  "Zygur continues to push the boundaries of what's possible in
                  defense technology..."
                </p>
                <p className="text-zinc-500">- Tech Defense Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
