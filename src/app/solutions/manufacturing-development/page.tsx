import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, Wrench, Code, Cog, ArrowRight, CheckCircle, Cpu, Shield, Settings } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Manufacturing & Software Development Utah | Custom Solutions | Zygur",
  description: "Professional manufacturing and software development services in Utah. Custom machining, welding, fabrication, full-stack development, and system integration for complete technology solutions.",
  keywords: "manufacturing utah, software development utah, custom machining, welding fabrication, cnc machining, full stack development, system integration, embedded systems, utah manufacturing company, technology development",
  openGraph: {
    title: "Manufacturing & Software Development Utah | Custom Solutions | Zygur",
    description: "Professional manufacturing and software development services in Utah. Custom machining, welding, fabrication, and complete software solutions.",
    url: "https://zygur.com/solutions/manufacturing-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing & Software Development Utah | Custom Solutions | Zygur",
    description: "Professional manufacturing and software development services in Utah. Custom machining, welding, fabrication, and complete software solutions.",
  },
  alternates: {
    canonical: "https://zygur.com/solutions/manufacturing-development",
  },
}

export default function ManufacturingDevelopmentPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-yellow mr-2"></span>
                Phase 2: Manufacturing & Development
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Manufacture, Code, Integrate
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Transform validated designs into reality through precision manufacturing, custom software development, 
              and seamless system integration. Our comprehensive development capabilities ensure your solution 
              is built to the highest standards of quality and performance.
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                  <Wrench className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold">Custom Manufacturing</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Precision machining, welding, fabrication, and assembly services. 
                We manufacture custom components and complete systems to exact specifications.
              </p>
              <ul className="space-y-1 text-xs text-zinc-500">
                <li>• CNC machining and turning</li>
                <li>• Welding and fabrication</li>
                <li>• Assembly and testing</li>
                <li>• Quality control and inspection</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-accent-yellow" />
                </div>
                <h3 className="font-semibold">Software Development</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Full-stack development, embedded systems, and custom applications. 
                We build robust software solutions that integrate seamlessly with hardware.
              </p>
              <ul className="space-y-1 text-xs text-zinc-500">
                <li>• Web and mobile applications</li>
                <li>• Embedded software and firmware</li>
                <li>• Database design and optimization</li>
                <li>• API development and integration</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                  <Cpu className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold">System Integration</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Bringing hardware and software together into cohesive, functional systems. 
                We ensure all components work together flawlessly.
              </p>
              <ul className="space-y-1 text-xs text-zinc-500">
                <li>• Hardware-software integration</li>
                <li>• IoT and sensor networks</li>
                <li>• Control systems and automation</li>
                <li>• Communication protocols</li>
              </ul>
            </div>
          </div>

          {/* Manufacturing Capabilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Manufacturing Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Precision Machining</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">CNC Services</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Multi-axis CNC machining</li>
                      <li>• Turning and milling</li>
                      <li>• Precision grinding</li>
                      <li>• Surface finishing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">Materials</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Aluminum and steel alloys</li>
                      <li>• Stainless steel</li>
                      <li>• Titanium and exotic metals</li>
                      <li>• Engineering plastics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Welding & Fabrication</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">Welding Types</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• TIG welding</li>
                      <li>• MIG welding</li>
                      <li>• Stick welding</li>
                      <li>• Specialized processes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">Fabrication</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Sheet metal forming</li>
                      <li>• Structural welding</li>
                      <li>• Custom assemblies</li>
                      <li>• Prototype to production</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Development Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Software Development Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Frontend Development</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    React, Next.js, Vue.js
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    TypeScript and JavaScript
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Mobile app development
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Progressive web apps
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Backend Development</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Node.js, Python, Go
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    RESTful APIs and GraphQL
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Microservices architecture
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Cloud-native development
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Embedded Systems</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    C/C++ firmware development
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Real-time operating systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    IoT device programming
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Hardware abstraction layers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality & Testing */}
          <div className="bg-gradient-to-b from-zinc-900/50 to-zinc-900/70 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Quality Assurance & Testing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold">Manufacturing Quality</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Dimensional inspection and CMM measurement</li>
                  <li>• Material testing and certification</li>
                  <li>• Non-destructive testing (NDT)</li>
                  <li>• Statistical process control (SPC)</li>
                  <li>• ISO 9001 quality management</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-3">
                    <Settings className="w-4 h-4 text-accent-yellow" />
                  </div>
                  <h3 className="font-semibold">Software Testing</h3>
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Automated testing and CI/CD pipelines</li>
                  <li>• Unit, integration, and end-to-end testing</li>
                  <li>• Performance and load testing</li>
                  <li>• Security testing and vulnerability assessment</li>
                  <li>• User acceptance testing (UAT)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Integration Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Component Development</h3>
                  <p className="text-zinc-400">
                    Parallel development of hardware and software components, ensuring compatibility 
                    and optimal performance from the start.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">System Assembly</h3>
                  <p className="text-zinc-400">
                    Careful integration of all components with thorough testing at each stage 
                    to identify and resolve issues early.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Performance Optimization</h3>
                  <p className="text-zinc-400">
                    Fine-tuning system performance, optimizing code efficiency, and ensuring 
                    all specifications are met or exceeded.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-black">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Final Validation</h3>
                  <p className="text-zinc-400">
                    Comprehensive testing and validation to ensure the complete system meets 
                    all requirements and is ready for deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Ready for Deployment</h2>
            <p className="text-zinc-400 mb-6">
              With your solution fully developed and tested, we move to the final phase: strategic deployment. 
              Our comprehensive approach ensures successful market entry and ongoing optimization.
            </p>
            <Link href="/solutions/distribute-optimize" className="inline-flex items-center text-accent-orange hover:text-accent-orange/80">
              Learn about our Deployment phase <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to build your solution?</h2>
                <p className="text-zinc-400">Let's discuss your manufacturing and development requirements.</p>
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
