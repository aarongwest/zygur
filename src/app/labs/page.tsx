import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Rocket, Users, Star } from "lucide-react"

export default function LabsPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <Image
            src="/ehs-labs-logo.png"
            alt="EHS Labs Logo"
            width={400}
            height={100}
            priority
            className="mb-8"
          />
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            EHS Labs
          </h1>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Showcasing innovative EHS initiatives and safety solutions. Our innovation lab
            highlights creative approaches to workplace safety and environmental compliance,
            sharing best practices and success stories from organizations worldwide.
          </p>

          {/* Featured Project */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Featured Initiative: Safety First</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Link href="/labs/safety-first">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/1.png"
                      alt="Safety First Initiative"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <p className="text-zinc-400 mb-6 max-w-3xl">
                  A groundbreaking initiative that showcases innovative approaches to workplace
                  safety. This program demonstrates how organizations can create a strong safety
                  culture while improving operational efficiency.
                </p>
                <div className="space-y-4 text-sm text-zinc-400">
                  <div className="flex items-center">
                    <Rocket className="w-4 h-4 mr-2 text-amber-500" />
                    Developed through collaborative industry partnerships
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-amber-500" />
                    Now implemented at multiple organizations
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-semibold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[2, 3, 4].map((num) => (
              <Link 
                key={num}
                href="/login" 
                className="group block bg-zinc-800/50 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors"
              >
                <div className="aspect-video relative">
                  <Image
                    src={`/${num}.png`}
                    alt={`Project ${num}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <p className="text-zinc-200 font-semibold">
                      Login to View
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Program Information */}
          <div className="bg-zinc-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Join Our Program</h2>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              Does your organization have an innovative EHS initiative to share? We're looking for
              exceptional safety and compliance programs to feature. Submit your success story
              to help other organizations improve their EHS performance.
            </p>
            <Link 
              href="/company/contact" 
              className="inline-flex items-center text-blue-500 hover:text-blue-400"
            >
              Share your success story
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
