import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, Lightbulb, Cog, Zap, ArrowRight, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export const metadata = {
  title: "Design & Prototyping Services Utah | Engineering Solutions | Zygur",
  description: "Professional design and prototyping services in Utah. Custom engineering blueprints, rapid prototyping, AI-powered design tools, and solution architecture for technology projects.",
  keywords: "design prototyping utah, engineering design services, rapid prototyping, custom engineering, solution architecture, mechanical design, software architecture, system integration design, utah engineering company",
  openGraph: {
    title: "Design & Prototyping Services Utah | Engineering Solutions | Zygur",
    description: "Professional design and prototyping services in Utah. Custom engineering blueprints, rapid prototyping, AI-powered design tools, and solution architecture.",
    url: "https://zygur.com/solutions/design-prototyping",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design & Prototyping Services Utah | Engineering Solutions | Zygur",
    description: "Professional design and prototyping services in Utah. Custom engineering blueprints, rapid prototyping, AI-powered design tools, and solution architecture.",
  },
  alternates: {
    canonical: "https://zygur.com/solutions/design-prototyping",
  },
}

export default function DesignPrototypingPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Phase 1: Design & Prototyping
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Design, Prototype
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Transform your concept into a viable, optimized design ready for development. 
              Our engineering team creates detailed blueprints, conducts feasibility analysis, 
              and builds functional prototypes that validate your solution before full-scale development.
            </p>
          </div>

          {/* What We Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                  <Lightbulb className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold">Concept Development</h3>
              </div>
              <p className="text-sm text-zinc-400">
                We work with you to refine your initial concept, identifying key requirements, 
                constraints, and success criteria. Our team helps clarify the vision and 
                establish clear project objectives.
              </p>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-accent-yellow" />
                </div>
                <h3 className="font-semibold">Feasibility Analysis</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Comprehensive technical and economic feasibility studies ensure your project 
                is viable. We analyze materials, manufacturing processes, software requirements, 
                and market conditions.
              </p>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                  <Cog className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold">Engineering Design</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Detailed engineering blueprints, CAD models, and technical specifications. 
                Our designs optimize for manufacturability, performance, and cost-effectiveness 
                while meeting all requirements.
              </p>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-accent-yellow" />
                </div>
                <h3 className="font-semibold">Rapid Prototyping</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Functional prototypes that validate design concepts and identify potential issues 
                early. We use advanced prototyping techniques including 3D printing, CNC machining, 
                and software mockups.
              </p>
            </div>
          </div>

          {/* Our Design Process */}
          <div className="bg-gradient-to-b from-zinc-900/50 to-zinc-900/70 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Design Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Discovery & Requirements</h3>
                  <p className="text-zinc-400">
                    Deep dive into your needs, constraints, and objectives. We gather all requirements 
                    and establish clear success criteria for the project.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Concept Design</h3>
                  <p className="text-zinc-400">
                    Multiple design concepts are developed and evaluated. We present options with 
                    trade-off analysis to help you make informed decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Detailed Design</h3>
                  <p className="text-zinc-400">
                    Selected concept is developed into detailed engineering drawings, specifications, 
                    and documentation ready for prototyping and development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-black">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Prototype & Validate</h3>
                  <p className="text-zinc-400">
                    Functional prototypes are built and tested to validate the design. 
                    Feedback is incorporated and designs are refined as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Capabilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Design Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Mechanical Design</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Custom machinery and equipment
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Precision components and assemblies
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Automation and robotics systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Structural and thermal analysis
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Software Architecture</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    System architecture design
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Database design and optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    API and integration planning
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Security and compliance frameworks
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-3">System Integration</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Hardware-software integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    IoT and sensor networks
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Control systems design
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Communication protocols
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Ready for Development</h2>
            <p className="text-zinc-400 mb-6">
              Once your design is validated and optimized, we seamlessly transition to the development phase. 
              Our integrated approach ensures no details are lost and development begins with a solid foundation.
            </p>
            <Link href="/solutions/manufacturing-development" className="inline-flex items-center text-accent-orange hover:text-accent-orange/80">
              Learn about our Development phase <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to design your solution?</h2>
                <p className="text-zinc-400">Let's start with a discovery session to understand your needs and objectives.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-white border-0 font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Your Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
