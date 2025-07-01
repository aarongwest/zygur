import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, ArrowRight, Users, BarChart2, Clock } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function CMOAsAServicePage() {
  return (
    <PageLayout>
      <Head>
        <title>CMO as a Service | Flexible Marketing Leadership Solutions | Zygur</title>
        <meta 
          name="description" 
          content="Flexible CMO-as-a-Service solutions that provide strategic marketing leadership, team development, and execution oversight tailored to your business needs." 
        />
        <meta name="keywords" content="cmo as a service, marketing leadership service, marketing executive on demand, cmo service" />
        <link rel="canonical" href="https://zygur.com/services/cmo-as-a-service" />
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              CMO as a Service - Flexible Marketing Leadership
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Strategic marketing leadership delivered as a service. Get the benefits of a Chief Marketing Officer
              with flexible engagement options designed to match your business needs and growth stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Book Your Strategy Call
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">What is CMO as a Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-zinc-300 mb-4">
                  CMO as a Service provides your business with strategic marketing leadership on a flexible, 
                  subscription basis. Unlike traditional consulting or project-based engagements, our CMO-as-a-Service 
                  model delivers ongoing executive marketing leadership without the commitment and cost of a 
                  full-time hire.
                </p>
                <p className="text-zinc-300">
                  Whether you need comprehensive marketing leadership a few days per week or targeted strategic 
                  guidance for specific initiatives, our service adapts to your exact needs while providing 
                  the continuity and accountability of a dedicated marketing executive.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Flexible Engagement Models</span>
                      <p className="text-sm text-zinc-400 mt-1">Scale marketing leadership up or down based on your needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Executive Expertise</span>
                      <p className="text-sm text-zinc-400 mt-1">Access seasoned marketing leadership at a fraction of the cost.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Faster Results</span>
                      <p className="text-sm text-zinc-400 mt-1">Immediately implement proven marketing strategies and systems.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Objective Perspective</span>
                      <p className="text-sm text-zinc-400 mt-1">Gain fresh insights from outside your organization.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Flexible CMO Service Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <div className="flex items-center mb-5">
                  <Users className="w-8 h-8 text-accent-orange mr-4" />
                  <h3 className="text-xl font-semibold">Part-Time CMO</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Ongoing, part-time marketing leadership (typically 1-2 days per week) integrated with your 
                  executive team. Includes strategic direction and hands-on management of your marketing 
                  function and team.
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  <strong className="text-zinc-200">Ideal for:</strong> Growth-stage businesses without a 
                  full-time CMO but needing experienced marketing leadership to drive strategy and execution.
                </p>
                <ul className="text-zinc-300 space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Regular executive team participation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Ongoing leadership and direction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Team management and development</span>
                  </li>
                </ul>
                <Link href="/pricing/fractional-cmo-cost">
                  <Button variant="outline" className="w-full">View Pricing Options</Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-b from-accent-orange/10 to-zinc-900/60 rounded-lg p-8">
                <div className="flex items-center mb-5">
                  <BarChart2 className="w-8 h-8 text-accent-orange mr-4" />
                  <h3 className="text-xl font-semibold">Strategic Advisor</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Regular, scheduled strategic oversight and guidance for your marketing efforts. Includes 
                  strategic planning, performance review, and direction for your internal team or agencies.
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  <strong className="text-zinc-200">Ideal for:</strong> Companies with internal marketing staff 
                  or agency relationships who need expert guidance and accountability without day-to-day management.
                </p>
                <ul className="text-zinc-300 space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Monthly or bi-weekly strategy sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Marketing performance reviews</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Strategic guidance and direction</span>
                  </li>
                </ul>
                <Link href="/pricing/fractional-cmo-cost">
                  <Button variant="outline" className="w-full">View Pricing Options</Button>
                </Link>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <div className="flex items-center mb-5">
                  <Clock className="w-8 h-8 text-accent-orange mr-4" />
                  <h3 className="text-xl font-semibold">Interim CMO</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Full-time, temporary marketing leadership to fill a gap during transitions or to help accelerate 
                  growth during a critical period. Includes comprehensive management of your marketing function.
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  <strong className="text-zinc-200">Ideal for:</strong> Organizations in transition (e.g., during CMO 
                  search), launching major initiatives, or needing intensive marketing support for a limited period.
                </p>
                <ul className="text-zinc-300 space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Full executive team integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Comprehensive marketing management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                    <span>Defined transition plan and timeline</span>
                  </li>
                </ul>
                <Link href="/pricing/fractional-cmo-cost">
                  <Button variant="outline" className="w-full">View Pricing Options</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Our CMO as a Service Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-zinc-900/50 p-5 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4 text-accent-orange font-bold">1</div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-zinc-400 text-sm">
                  We begin with a comprehensive assessment of your current marketing capabilities, challenges, and goals. 
                  This includes stakeholder interviews, competitive analysis, and review of existing marketing assets.
                </p>
              </div>
              
              <div className="bg-zinc-900/50 p-5 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4 text-accent-orange font-bold">2</div>
                <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                <p className="text-zinc-400 text-sm">
                  Based on our findings, we develop a tailored marketing strategy and roadmap aligned with your business objectives. 
                  This includes clear KPIs, resource requirements, and implementation timelines.
                </p>
              </div>
              
              <div className="bg-zinc-900/50 p-5 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4 text-accent-orange font-bold">3</div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-zinc-400 text-sm">
                  We execute the strategy according to your chosen engagement model. This may include direct management 
                  of marketing activities, oversight of internal teams or agencies, or strategic guidance and coaching.
                </p>
              </div>
              
              <div className="bg-zinc-900/50 p-5 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4 text-accent-orange font-bold">4</div>
                <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                <p className="text-zinc-400 text-sm">
                  We continuously measure results against established KPIs, refining strategies and tactics based on performance data. 
                  Regular reporting and reviews ensure transparency and accountability.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/call">
                <Button className="bg-accent-orange hover:bg-accent-orange/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Book Your Discovery Call
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Core Services Included</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Strategic Planning</span>
                    <p className="text-sm text-zinc-400 mt-1">Comprehensive marketing strategy aligned with business goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Team Leadership</span>
                    <p className="text-sm text-zinc-400 mt-1">Direction and development of marketing staff or agencies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Budget Management</span>
                    <p className="text-sm text-zinc-400 mt-1">Strategic allocation and optimization of marketing spend.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Performance Monitoring</span>
                    <p className="text-sm text-zinc-400 mt-1">KPI tracking, optimization, and executive reporting.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Executive Team Integration</span>
                    <p className="text-sm text-zinc-400 mt-1">Collaboration with leadership on business strategy.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-900/60 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Optional Add-on Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Fractional Marketing Team</span>
                    <p className="text-sm text-zinc-400 mt-1">Specialized resources that complement your CMO service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Marketing Technology Implementation</span>
                    <p className="text-sm text-zinc-400 mt-1">Selection and setup of marketing technology stack.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Marketing Operations Design</span>
                    <p className="text-sm text-zinc-400 mt-1">Systems and processes to improve marketing efficiency.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Talent Recruitment & Training</span>
                    <p className="text-sm text-zinc-400 mt-1">Help building your internal marketing capabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Agency Selection & Management</span>
                    <p className="text-sm text-zinc-400 mt-1">Help choosing and overseeing specialist agencies.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/services/fractional-marketing-team" className="text-accent-orange hover:text-accent-orange/80 flex items-center">
                  Learn about our Fractional Marketing Team <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">FAQs About CMO as a Service</h2>
            
            <div className="space-y-6">
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How does CMO as a Service differ from traditional consulting?</h3>
                <p className="text-zinc-300">
                  Unlike traditional consultants who typically deliver recommendations but aren't involved in implementation, 
                  our CMO-as-a-Service model provides ongoing leadership and accountability. We don't just tell you what to 
                  do—we help you do it. We become part of your leadership team, make decisions, manage resources, and take 
                  responsibility for results. While consultants are typically project-based with a clear end date, our service 
                  provides continuous, evolving support as your business needs change.
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How much time will you dedicate to our business?</h3>
                <p className="text-zinc-300">
                  This depends on your chosen engagement model. Part-time CMO engagements typically range from 1-2 days per week, 
                  while strategic advisor arrangements might involve 2-4 days per month. Interim CMO roles are usually full-time 
                  but for a defined period. We offer flexible arrangements that can be adjusted as your needs evolve. During our 
                  initial discovery, we'll recommend the appropriate time commitment based on your goals, complexity, and budget.
                  <Link href="/pricing/fractional-cmo-cost" className="text-accent-orange hover:underline"> View our service packages for more details.</Link>
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What industries do you specialize in?</h3>
                <p className="text-zinc-300">
                  We have particular expertise in B2B, technology, professional services, manufacturing, and e-commerce sectors. 
                  Our team brings experience from both specialized and general marketing leadership roles. Rather than being 
                  industry-generalists, we assign CMOs based on relevant industry experience and business model alignment. 
                  This ensures your fractional CMO understands the unique dynamics, buying processes, and metrics that matter in your specific market.
                  <Link href="/industries/b2b-fractional-cmo" className="text-accent-orange hover:underline"> Explore our industry-specific pages for more information.</Link>
                </p>
              </div>
              
              <div className="bg-zinc-900/60 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do we get started with CMO as a Service?</h3>
                <p className="text-zinc-300">
                  The process begins with a complimentary discovery call to understand your business, challenges, and goals. 
                  If there's a potential fit, we'll propose a comprehensive discovery engagement to assess your current marketing 
                  capabilities and develop a tailored strategy. This typically involves stakeholder interviews, competitive analysis, 
                  and review of existing marketing assets. Following this discovery phase, we'll recommend the appropriate service 
                  model and create a detailed implementation plan. Most clients can complete this process and begin active engagement 
                  within 2-4 weeks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-orange/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to transform your marketing leadership?</h2>
                <p className="text-zinc-300">Schedule a discovery call to discuss your marketing challenges and how our CMO as a Service model can help you achieve your growth objectives.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/80 text-zinc-900 font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Book Your Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
