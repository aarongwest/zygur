import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Rocket, Users, Star } from "lucide-react"

export default function LabsPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-8">
            <Image
              src="/zygur-logo-labs.svg"
              alt="Zygur Labs Logo"
              width={400}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            Zygur Labs
          </h1>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Empowering the next generation of innovators. Our young entrepreneur program 
            provides high school students with the opportunity to turn their innovative 
            projects into reality, offering project acquisition and a pathway to join 
            our team.
          </p>

          {/* Featured Project */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Featured Project: Sheepfold</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Link href="/labs/sheepfold">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/1.png"
                      alt="Sheepfold Project"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <p className="text-zinc-400 mb-6 max-w-3xl">
                  A groundbreaking project that showcases the innovative spirit of our young 
                  entrepreneurs. Sheepfold demonstrates exceptional creativity and technical 
                  prowess, setting new standards for what high school students can achieve.
                </p>
                <div className="space-y-4 text-sm text-zinc-400">
                  <div className="flex items-center">
                    <Rocket className="w-4 h-4 mr-2 text-amber-500" />
                    Acquired and developed through our young entrepreneur program
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-amber-500" />
                    Creator now leads development at Zygur
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
              Are you a high school student with an innovative project? We're looking for 
              exceptional young talent to join our program. Submit your project for a chance 
              to have it acquired and published, plus an opportunity to join our team.
            </p>
            <Link 
              href="/company/contact" 
              className="inline-flex items-center text-blue-500 hover:text-blue-400"
            >
              Submit your project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
