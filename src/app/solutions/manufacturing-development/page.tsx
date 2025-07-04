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
              Code, Manufacture, Integrate
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Transform validated designs into reality through custom software development, precision manufacturing, 
              and seamless system integration. Our comprehensive development capabilities ensure your solution 
              is built to the highest standards of quality and performance.
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  <Wrench className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="font-semibold">Custom Manufacturing</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                3D printing, additive manufacturing, and assembly services. 
                We manufacture custom components and complete systems to exact specifications.
              </p>
              <ul className="space-y-1 text-xs text-zinc-500">
                <li>• 3D printing and rapid prototyping</li>
                <li>• Custom enclosures and housings</li>
                <li>• Assembly and testing</li>
                <li>• Quality control and inspection</li>
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

          {/* Software Development Capabilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Software Development Capabilities</h2>
            
            {/* Standalone Software Development */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Standalone Software Solutions</h3>
              <p className="text-zinc-400 mb-6">
                We develop complete software applications and systems that operate independently, from web applications 
                and mobile apps to enterprise software and cloud-based platforms. These solutions can serve businesses 
                directly without requiring custom hardware integration.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-900/40 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Web Applications</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      React, Next.js, Vue.js applications
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      E-commerce platforms and marketplaces
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      Business management systems
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      Customer portals and dashboards
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-900/40 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Enterprise Software</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                      Custom CRM and ERP systems
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                      Workflow automation tools
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                      Data analytics and reporting platforms
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                      API development and integration
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-900/40 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Mobile & Cloud</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      iOS and Android applications
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      Progressive web applications
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      Cloud infrastructure and deployment
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                      Database design and optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hardware-Software Integration */}
            <div className="bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Hardware-Software Integration</h3>
              <p className="text-zinc-400 mb-4">
                We specialize in creating complete integrated solutions that combine custom software with manufactured hardware components. 
                Our expertise spans from embedded firmware to cloud-connected dashboards, enabling smart manufacturing equipment, 
                IoT devices, industrial automation systems, and specialized defense applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-zinc-300 mb-2">Microcontroller Platforms</h4>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Arduino (ESP32, ESP8266) for IoT and automation</li>
                    <li>• Raspberry Pi for edge computing applications</li>
                    <li>• STM32 microcontrollers for real-time systems</li>
                    <li>• Custom PCB design and assembly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-300 mb-2">Integration Examples</h4>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Smart factory monitoring with custom enclosures</li>
                    <li>• Agricultural automation with weather-resistant frames</li>
                    <li>• Medical devices with custom firmware</li>
                    <li>• Defense communication systems ($100K+ contracts)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Embedded Software</h4>
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
                    Device drivers and hardware abstraction
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Bootloaders and system initialization
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Communication Protocols</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    WiFi, Bluetooth, LoRaWAN
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    CAN bus, Modbus, Ethernet
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Cellular (4G/5G) integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-0.5 mr-2 flex-shrink-0" />
                    Secure mesh networking
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Integration Platforms</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    IoT data processing and analytics
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Real-time monitoring dashboards
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Cloud integration (AWS IoT, Azure IoT)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-0.5 mr-2 flex-shrink-0" />
                    Over-the-air (OTA) updates
                  </li>
                </ul>
              </div>
            </div>

            {/* Development Tools & Technologies */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 rounded-lg p-6">
                <h4 className="font-medium text-zinc-300 mb-3">Development Tools & Platforms</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <p className="font-medium text-zinc-300 mb-1">Embedded Development</p>
                    <ul className="space-y-1 text-xs">
                      <li>• PlatformIO and Arduino IDE</li>
                      <li>• KiCad and Altium for PCB design</li>
                      <li>• Real-time debugging tools</li>
                      <li>• Hardware simulation environments</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-300 mb-1">Software Development</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Docker containerization</li>
                      <li>• CI/CD pipelines</li>
                      <li>• Version control and collaboration</li>
                      <li>• Automated testing frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/30 rounded-lg p-6">
                <h4 className="font-medium text-zinc-300 mb-3">Technology Stack</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <p className="font-medium text-zinc-300 mb-1">Backend Technologies</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Node.js, Python, Go</li>
                      <li>• PostgreSQL, MongoDB</li>
                      <li>• RESTful APIs and GraphQL</li>
                      <li>• Microservices architecture</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-300 mb-1">Frontend Technologies</p>
                    <ul className="space-y-1 text-xs">
                      <li>• React, Next.js, TypeScript</li>
                      <li>• React Native for mobile</li>
                      <li>• Responsive web design</li>
                      <li>• Progressive web apps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Capabilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Manufacturing Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-4">3D Printing & Additive Manufacturing</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">3D Printing Technologies</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• FDM/FFF printing</li>
                      <li>• SLA resin printing</li>
                      <li>• Multi-material printing</li>
                      <li>• High-resolution prototyping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">Materials</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Engineering plastics (PLA, ABS, PETG)</li>
                      <li>• High-performance polymers</li>
                      <li>• Flexible and composite materials</li>
                      <li>• Specialty resins and filaments</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/40 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Assembly & Integration</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">Assembly Services</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Component integration</li>
                      <li>• Electronic assembly</li>
                      <li>• Custom enclosures</li>
                      <li>• System testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-300 mb-2">Finishing</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Post-processing and finishing</li>
                      <li>• Surface treatments</li>
                      <li>• Custom assemblies</li>
                      <li>• Prototype to production</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Integration Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Integration Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-bold text-black">1</span>
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
                  <span className="text-sm font-bold text-black">3</span>
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
                <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-black border-0 font-medium py-5 px-6">
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
