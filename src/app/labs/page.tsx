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
            src="/labs.png"
            alt="Zygur Labs Logo"
            width={400}
            height={100}
            priority
            className="mb-8"
          />
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            Zygur Labs
          </h1>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Our experimental playground for AI-powered design and engineering. At Zygur Labs, we stay sharp on 
            the latest digital technologies by creating innovative applications that push the boundaries 
            of what's possible with modern AI, software development, and engineering techniques.
          </p>

          {/* Featured Projects */}
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Sheepfold Project */}
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold">Sheepfold</h3>
              </div>
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
              <p className="text-zinc-400 mb-4">
                A comprehensive iOS group management solution designed for faith-based organizations.
                Sheepfold streamlines communication and organization through innovative features.
              </p>
              <div className="space-y-3 text-sm text-zinc-400">
                <div className="flex items-center">
                  <Rocket className="w-4 h-4 mr-2 text-amber-500" />
                  An experimental AI-powered church management platform
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  href="/labs/sheepfold" 
                  className="inline-flex items-center text-accent-orange hover:text-accent-orange"
                >
                  View project details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* BibleKit Project */}
            <div className="bg-zinc-900/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold">BibleKit</h3>
              </div>
              <Link href="/labs/biblekit">
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/biblekitlogo.png"
                    alt="BibleKit Project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <p className="text-zinc-400 mb-4">
                An innovative iOS app designed to help people learn and engage with the Bible through
                interactive study tools, personalized reading plans, and powerful search capabilities.
              </p>
              <div className="space-y-3 text-sm text-zinc-400">
                <div className="flex items-center">
                  <Rocket className="w-4 h-4 mr-2 text-accent-orange" />
                  AI-enhanced Bible study app with natural language processing
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  href="/labs/biblekit" 
                  className="inline-flex items-center text-accent-orange hover:text-accent-orange"
                >
                  View project details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* AI Product Design */}
          <div className="bg-gradient-to-b from-zinc-900/50 to-zinc-900/70 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">AI Product Design</h2>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              We leverage artificial intelligence to revolutionize the product design process. Our AI-powered 
              design tools help accelerate concept development, optimize user experiences, and generate 
              innovative solutions that bridge the gap between human creativity and machine intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <Rocket className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-2">Generative Design</h3>
                <p className="text-sm text-zinc-400">
                  AI algorithms that generate multiple design variations based on constraints and requirements.
                </p>
              </div>
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-accent-yellow" />
                </div>
                <h3 className="font-semibold mb-2">UX Optimization</h3>
                <p className="text-sm text-zinc-400">
                  Machine learning models that analyze user behavior to optimize interface design and flow.
                </p>
              </div>
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-2">Predictive Modeling</h3>
                <p className="text-sm text-zinc-400">
                  AI-driven insights that predict design performance and user adoption before development.
                </p>
              </div>
            </div>
            <Link 
              href="/solutions/design-prototyping" 
              className="inline-flex items-center text-accent-orange hover:text-accent-orange/80"
            >
              Learn about our design capabilities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-semibold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[2, 3, 4].map((num) => (
              <Link 
                key={num}
                href="/login" 
                className="group block bg-zinc-900/60 rounded-lg overflow-hidden hover:bg-zinc-900/80 transition-colors"
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

          {/* AI Development Information */}
          <div className="bg-zinc-900/60 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Our AI Playground</h2>
            <p className="text-zinc-400 mb-6 max-w-3xl">
              Zygur Labs is where we experiment with cutting-edge technologies to keep our skills 
              sharp and explore new possibilities. From natural language processing to computer vision 
              and machine learning algorithms, our team constantly develops innovative applications that 
              showcase the potential of modern AI in solving real-world problems.
            </p>
            <Link 
              href="/company/contact" 
              className="inline-flex items-center text-accent-orange hover:text-accent-orange"
            >
              Learn about our AI capabilities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
