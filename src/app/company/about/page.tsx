import { PageLayout } from "@/components/layout/page-layout"
import { Shield, Cpu, Brain, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              About Zygur Technologies Corp.
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Pioneering the future of defense technology through quantum computing,
              artificial intelligence, and advanced military systems.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-zinc-400 mb-6">
              At Zygur Technologies Corp., we are dedicated to developing cutting-edge technologies that
              enhance military capabilities and ensure national security. Our mission is
              to provide advanced defense solutions that give our partners a decisive
              advantage in an increasingly complex world.
            </p>
            <p className="text-zinc-400">
              Through continuous innovation in quantum computing, artificial intelligence,
              and defense systems, we empower military organizations to stay ahead of
              emerging threats and maintain technological superiority.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold">Excellence in Defense</h3>
              </div>
              <p className="text-zinc-400">
                We are committed to delivering the highest quality defense solutions,
                maintaining rigorous standards in everything we do.
              </p>
            </div>

            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold">Technological Innovation</h3>
              </div>
              <p className="text-zinc-400">
                We push the boundaries of what's possible, investing heavily in research
                and development to create breakthrough technologies.
              </p>
            </div>

            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold">Strategic Partnership</h3>
              </div>
              <p className="text-zinc-400">
                We work closely with military organizations, understanding their needs
                and providing tailored solutions for their unique challenges.
              </p>
            </div>

            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">Ethical Leadership</h3>
              </div>
              <p className="text-zinc-400">
                We maintain the highest ethical standards in our work, ensuring our
                technologies are used responsibly for defense and security.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Leadership</h2>
            <p className="text-zinc-400 mb-6">
              Our leadership team brings together decades of experience in military
              technology, quantum computing, and artificial intelligence. With backgrounds
              spanning defense agencies, research institutions, and technology companies,
              our executives guide Zygur Technologies Corp.'s mission to revolutionize military capabilities.
            </p>
            <p className="text-zinc-400">
              Under their direction, Zygur Technologies Corp. has become a trusted partner to military
              organizations worldwide, delivering innovative solutions that address the
              complex challenges of modern warfare.
            </p>
          </div>

          {/* Global Impact */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Global Impact</h2>
            <p className="text-zinc-400 mb-6">
              Zygur Technologies Corp.'s technologies are deployed by leading military organizations around
              the world. Our solutions have significantly enhanced defense capabilities,
              improved operational efficiency, and strengthened national security for
              our partners.
            </p>
            <p className="text-zinc-400">
              Through continuous innovation and strategic partnerships, we remain at the
              forefront of military technology, helping shape the future of defense
              and security.
            </p>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
