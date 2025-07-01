import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, Award, Briefcase, BookOpen, User, Twitter, Github, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Meet Your Fractional CMO
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Aaron West
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Marketing leader with a passion for helping small businesses compete and win through 
              AI-enhanced marketing strategies and execution.
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="bg-zinc-900/60 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">My Story</h2>
                <div className="space-y-4 text-zinc-400">
                  <p>
                    After 15+ years leading marketing teams at various companies, 
                    I noticed a concerning trend: small and mid-sized businesses were being left behind 
                    in the rapidly evolving marketing landscape.
                  </p>
                  <p>
                    These businesses faced a difficult choice - hire an expensive in-house CMO they couldn't 
                    afford, work with agencies that delivered cookie-cutter solutions, or try to navigate the 
                    complex marketing world themselves.
                  </p>
                  <p>
                    I founded this practice to solve that problem, leveraging my enterprise-level experience 
                    and AI expertise to help businesses in the $1M-$15M range implement sophisticated marketing 
                    strategies that drive meaningful growth.
                  </p>
                  <p>
                    What makes my approach unique is the combination of seasoned marketing leadership with 
                    cutting-edge AI tools that dramatically increase efficiency and effectiveness. This allows 
                    me to deliver twice the work at half the cost of traditional marketing leaders or agencies.
                  </p>
                  <p>
                    I deliberately limit my practice to just 7 clients per year to ensure each business 
                    receives the focused attention and customized strategies they deserve.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-zinc-900/60 rounded-lg p-8 h-full">
                <div className="w-full aspect-square mb-6 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full overflow-hidden border-4 border-accent-orange/20">
                    <Image 
                      src="/fcmo.jpeg" 
                      alt="Aaron West" 
                      width={400} 
                      height={400} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <a href="https://aaronwe.st/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors">
                      <Globe className="w-5 h-5 text-zinc-400" />
                    </a>
                    <a href="https://x.com/aarongwestx" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors">
                      <Twitter className="w-5 h-5 text-zinc-400" />
                    </a>
                    <a href="https://github.com/aarongwest" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors">
                      <Github className="w-5 h-5 text-zinc-400" />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase text-zinc-500 mb-1">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">AI Marketing</span>
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">Growth Strategy</span>
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">Marketing Operations</span>
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">Digital Transformation</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase text-zinc-500 mb-1">Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">SaaS</span>
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">E-commerce</span>
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">Professional Services</span>
                      <span className="text-xs bg-zinc-700/50 px-2 py-1 rounded">Manufacturing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Professional Background</h2>
            
            <div className="space-y-8">
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Work Experience</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="space-y-6">
                      <div className="border-l-2 border-zinc-700 pl-6 pb-6 relative">
                        <div className="absolute w-4 h-4 bg-accent-orange rounded-full -left-[9px] top-0"></div>
                        <h3 className="font-semibold mb-1">Fractional CMO (FCMO)</h3>
                        <p className="text-sm text-zinc-400 mb-2">Zygur • 2010-Present</p>
                        <p className="text-zinc-400">
                          Providing CMO-level marketing leadership to select growth-stage companies ($1M-$15M).
                          Implementing AI-enhanced marketing strategies that deliver measurable ROI improvements.
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-zinc-700 pl-6 pb-6 relative">
                        <div className="absolute w-4 h-4 bg-zinc-600 rounded-full -left-[9px] top-0"></div>
                        <h3 className="font-semibold mb-1">Chairman</h3>
                        <p className="text-sm text-zinc-400 mb-2">EHS, Inc. • Dec 2010-Present</p>
                        <p className="text-zinc-400">
                          Founded and led enterprise health and safety software company. Simultaneously operate as Fractional CMO (Zygur) for select growth-stage clients, providing marketing leadership and AI-enhanced strategies.
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-zinc-700 pl-6 pb-6 relative">
                        <div className="absolute w-4 h-4 bg-zinc-600 rounded-full -left-[9px] top-0"></div>
                        <h3 className="font-semibold mb-1">Risk / Safety Director</h3>
                        <p className="text-sm text-zinc-400 mb-2">AES / ACC / SEIC • Nov 2005-Nov 2010</p>
                        <p className="text-zinc-400">
                          Managed PEO & W/C Risk programs. Developed risk management strategies that significantly reduced workplace incidents and costs.
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-zinc-700 pl-6 pb-6 relative">
                        <div className="absolute w-4 h-4 bg-zinc-600 rounded-full -left-[9px] top-0"></div>
                        <h3 className="font-semibold mb-1">Infantry Team Leader (11B)</h3>
                        <p className="text-sm text-zinc-400 mb-2">Florida National Guard • Dec 2000-Sep 2004</p>
                        <p className="text-zinc-400">
                          Led 4-person infantry team during deployment to Baghdad, Iraq. Member of 3/124 Infantry Division.
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-zinc-700 pl-6 relative">
                        <div className="absolute w-4 h-4 bg-zinc-600 rounded-full -left-[9px] top-0"></div>
                        <h3 className="font-semibold mb-1">Infantry Squad Leader (0311)</h3>
                        <p className="text-sm text-zinc-400 mb-2">United States Marine Corps • Aug 1996-Nov 2000</p>
                        <p className="text-zinc-400">
                          Led Marine infantry squad during deployments to Haiti, Panama, Israel, S. Korea, and Europe. 2nd Marine Division / 24th MEUSOC.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-accent-yellow" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Education</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="space-y-6">
                      <div className="border-l-2 border-zinc-700 pl-6 relative">
                        <div className="absolute w-4 h-4 bg-accent-yellow rounded-full -left-[9px] top-0"></div>
                        <h3 className="font-semibold mb-1">Associate of Arts - AA, General Studies</h3>
                        <p className="text-sm text-zinc-400 mb-2">Pensacola State College • 2004-2006</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosophy Section */}
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">My Marketing Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Strategy First, Always</h3>
                <p className="text-zinc-400">
                  I believe that effective marketing starts with a clear, data-informed strategy that 
                  aligns with your business goals. Without this foundation, even the most brilliant 
                  tactics will fail to deliver sustainable results.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Technology as a Multiplier</h3>
                <p className="text-zinc-400">
                  AI and automation aren't just trendy buzzwords—they're powerful tools that can 
                  dramatically amplify your marketing capabilities. When properly applied, they allow 
                  small teams to achieve what once required entire departments.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Optimization</h3>
                <p className="text-zinc-400">
                  Marketing is never "done." The most successful campaigns are those that are 
                  continuously measured, analyzed, and refined over time. This iterative approach 
                  ensures your marketing becomes more effective with each passing month.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-yellow/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Want to work with me?</h2>
                <p className="text-zinc-400">Let's discuss how I can help your business grow. Limited availability - only 7 client spots per year.</p>
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
