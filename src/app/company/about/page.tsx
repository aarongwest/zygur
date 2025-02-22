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
              About EHS, Inc.
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Leading the transformation of environmental, health, and safety management through
              innovative technology, expert consulting, and proven methodologies.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-zinc-400 mb-6">
              At EHS, Inc., we are dedicated to helping organizations create safer workplaces and ensure
              environmental responsibility. Our mission is to provide comprehensive EHS solutions that
              enable our clients to achieve operational excellence while protecting their workforce
              and the environment.
            </p>
            <p className="text-zinc-400">
              Through innovative software, expert consulting, and comprehensive training programs,
              we empower organizations to maintain compliance, reduce risks, and foster a culture
              of safety and environmental stewardship.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold">Safety Excellence</h3>
              </div>
              <p className="text-zinc-400">
                We are committed to promoting workplace safety excellence through comprehensive
                solutions and industry-leading best practices.
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold">Innovative Solutions</h3>
              </div>
              <p className="text-zinc-400">
                We leverage cutting-edge technology and proven methodologies to deliver
                effective EHS management solutions for modern businesses.
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold">Client Partnership</h3>
              </div>
              <p className="text-zinc-400">
                We work closely with organizations across industries, understanding their unique
                challenges and providing tailored EHS solutions for their specific needs.
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">Professional Excellence</h3>
              </div>
              <p className="text-zinc-400">
                We maintain the highest professional standards in our work, ensuring our
                solutions deliver measurable improvements in safety and compliance.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Leadership</h2>
            <p className="text-zinc-400 mb-6">
              Our leadership team brings together decades of experience in environmental, health,
              and safety management. With backgrounds spanning industry leadership, regulatory
              compliance, and technology innovation, our executives guide EHS, Inc.'s mission
              to transform workplace safety and environmental management.
            </p>
            <p className="text-zinc-400">
              Under their direction, EHS, Inc. has become a trusted partner to organizations
              worldwide, delivering innovative solutions that address the complex challenges
              of modern EHS management.
            </p>
          </div>

          {/* Global Impact */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Global Impact</h2>
            <p className="text-zinc-400 mb-6">
              EHS, Inc.'s solutions are trusted by leading organizations across diverse industries.
              Our comprehensive approach has helped clients significantly improve safety performance,
              ensure regulatory compliance, and achieve environmental sustainability goals.
            </p>
            <p className="text-zinc-400">
              Through continuous innovation and industry expertise, we remain at the
              forefront of EHS management, helping shape the future of workplace safety
              and environmental responsibility.
            </p>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
