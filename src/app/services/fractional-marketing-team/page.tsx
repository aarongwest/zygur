import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, ArrowRight, Users, Box, Puzzle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function FractionalMarketingTeamPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional Marketing Team | On-Demand Marketing Department | Zygur</title>
        <meta 
          name="description" 
          content="Access a complete, on-demand marketing department with our fractional marketing team. Strategic leadership plus specialized execution without the overhead of full-time hires." 
        />
        <meta name="keywords" content="fractional marketing team, on-demand marketing department, marketing team as a service, outsourced marketing specialists" />
        <link rel="canonical" href="https://zygur.com/services/fractional-marketing-team" />
      </Head>
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Fractional Marketing Team: Your On-Demand Marketing Department
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Access a complete, on-demand marketing department led by a fractional CMO and supported
              by specialized marketing professionals. Get strategic leadership plus skilled execution
              without the overhead of full-time hires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Book Your Strategy Call
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">What is a Fractional Marketing Team?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-zinc-300 mb-4">
                  A Fractional Marketing Team provides your business with access to specialized marketing talent on a 
                  flexible, part-time basis. Unlike hiring full-time employees or working with multiple agencies, 
                  our model delivers a cohesive team of marketing specialists working under unified leadership.
                </p>
                <p className="text-zinc-300">
                  This approach combines the strategic direction of a <Link href="/services/cmo-as-a-service" className="text-neon-green hover:underline">fractional CMO</Link> with 
                  the specialized execution capabilities of experienced marketing professionals across various disciplines—all 
                  at a fraction of the cost of building an in-house team or managing multiple agency relationships.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Specialized Expertise</span>
                      <p className="text-sm text-zinc-400 mt-1">Access to specialists across all marketing disciplines.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Flexible Resources</span>
                      <p className="text-sm text-zinc-400 mt-1">Scale up or down as your marketing needs change.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Cost-Effective</span>
                      <p className="text-sm text-zinc-400 mt-1">Significant savings compared to full-time hires.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Unified Strategy</span>
                      <p className="text-sm text-zinc-400 mt-1">Cohesive execution aligned with business goals.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">How Our Fractional Marketing Team Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center mb-5">
                  <Users className="w-8 h-8 text-neon-green mr-4" />
                  <h3 className="text-xl font-semibold">Strategic Leadership</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Your engagement is led by an experienced fractional CMO who develops your marketing strategy, 
                  aligns activities with business goals, and provides ongoing leadership and accountability.
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  This ensures that all specialists are working cohesively toward your specific business objectives 
                  rather than executing disconnected tactics without strategic alignment.
                </p>
                <ul className="text-zinc-300 space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Strategic planning and direction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Ongoing performance monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Executive updates and reporting</span>
                  </li>
                </ul>
                <Link href="/services/cmo-as-a-service">
                  <Button variant="outline" className="w-full">Learn About Our CMO Services</Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-b from-neon-green/10 to-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center mb-5">
                  <Box className="w-8 h-8 text-neon-green mr-4" />
                  <h3 className="text-xl font-semibold">Specialized Execution</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Based on your strategic needs, we assemble a team of specialized marketing professionals who 
                  provide hands-on execution across various marketing disciplines and campaigns.
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  Each specialist brings deep expertise in their specific area, allowing you to access senior-level 
                  talent across multiple disciplines without having to hire separate full-time employees.
                </p>
                <ul className="text-zinc-300 space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Campaign implementation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Content and creative production</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Technical marketing execution</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-8">
                <div className="flex items-center mb-5">
                  <Puzzle className="w-8 h-8 text-neon-green mr-4" />
                  <h3 className="text-xl font-semibold">Flexible Engagement</h3>
                </div>
                <p className="text-zinc-300 mb-4">
                  Your team's composition and time allocation adjust based on your evolving marketing needs, business 
                  stage, and budget constraints, providing ultimate flexibility.
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  This allows you to scale marketing resources up during growth phases or product launches, and 
                  scale down during maintenance periods—all without the hiring, training, and retention challenges.
                </p>
                <ul className="text-zinc-300 space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Custom team composition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Adjustable time commitments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                    <span>Scalable resource allocation</span>
                  </li>
                </ul>
                <Link href="/pricing/fractional-cmo-cost">
                  <Button variant="outline" className="w-full">View Pricing Options</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Available Specialist Roles</h2>
            <p className="text-zinc-300 mb-8">
              Our fractional marketing team includes specialists across all core marketing disciplines. 
              Based on your specific needs, we'll customize a team that provides expertise in the 
              areas most critical to your business goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neon-green">Strategy & Leadership</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Fractional CMO</span>
                      <p className="text-sm text-zinc-400 mt-1">Strategic leadership and marketing direction</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Marketing Strategist</span>
                      <p className="text-sm text-zinc-400 mt-1">Campaign planning and optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Marketing Operations</span>
                      <p className="text-sm text-zinc-400 mt-1">Systems and process management</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neon-green">Content & Creative</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Content Strategist</span>
                      <p className="text-sm text-zinc-400 mt-1">Editorial planning and production</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Creative Director</span>
                      <p className="text-sm text-zinc-400 mt-1">Brand identity and visual storytelling</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Copywriter</span>
                      <p className="text-sm text-zinc-400 mt-1">Persuasive marketing messaging</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neon-green">Digital & Technical</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Digital Marketing Manager</span>
                      <p className="text-sm text-zinc-400 mt-1">Multi-channel campaign execution</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">SEO/SEM Specialist</span>
                      <p className="text-sm text-zinc-400 mt-1">Search visibility and optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zinc-100">Analytics & Measurement</span>
                      <p className="text-sm text-zinc-400 mt-1">Performance tracking and reporting</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/call">
                <Button className="bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Discuss Your Team Needs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Advantages Over In-House Hiring</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Significant Cost Savings</span>
                    <p className="text-sm text-zinc-400 mt-1">Typically 60-70% less than the cost of full-time employees with similar experience levels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Immediate Expertise</span>
                    <p className="text-sm text-zinc-400 mt-1">Skip the lengthy recruitment, training, and onboarding processes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Reduced Management Burden</span>
                    <p className="text-sm text-zinc-400 mt-1">No employee benefits, HR concerns, or performance management issues.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Senior-Level Talent Access</span>
                    <p className="text-sm text-zinc-400 mt-1">Work with experienced specialists who might be unaffordable as full-time hires.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Advantages Over Multiple Agencies</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Unified Strategy</span>
                    <p className="text-sm text-zinc-400 mt-1">One cohesive team rather than multiple vendors with conflicting priorities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Reduced Overhead</span>
                    <p className="text-sm text-zinc-400 mt-1">No agency markup fees or account management costs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Greater Accountability</span>
                    <p className="text-sm text-zinc-400 mt-1">Direct access to the specialists doing the work, not account managers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-100 font-medium">Business-First Approach</span>
                    <p className="text-sm text-zinc-400 mt-1">Solutions aligned with business goals, not agency service offerings.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">FAQs About Fractional Marketing Teams</h2>
            
            <div className="space-y-6">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How is pricing structured for a fractional marketing team?</h3>
                <p className="text-zinc-300">
                  We offer flexible pricing options based on your specific needs and budget. This typically includes a base package 
                  for fractional CMO leadership plus additional specialist resources allocated according to your requirements. 
                  Most clients choose either a monthly retainer model with defined scopes of work or project-based engagements 
                  for specific initiatives. The investment is significantly less than hiring comparable full-time talent, 
                  with typical engagements ranging from $5,000-$15,000 per month depending on team size and time allocation.
                  <Link href="/pricing/fractional-cmo-cost" className="text-neon-green hover:underline"> View our detailed pricing information.</Link>
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you ensure consistency with a fractional team?</h3>
                <p className="text-zinc-300">
                  Consistency is maintained through three key mechanisms: First, your fractional CMO provides ongoing leadership and 
                  oversight across all specialists and activities. Second, we implement structured processes, documentation, and 
                  collaboration tools to ensure alignment. Third, we maintain consistent team members throughout your engagement whenever 
                  possible, avoiding the revolving door of talent common with agencies. Additionally, all team members work within 
                  established brand guidelines, strategy documents, and communication frameworks specific to your business.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you work with our existing marketing staff?</h3>
                <p className="text-zinc-300">
                  Absolutely. In fact, many clients use our fractional team to complement their existing marketing capabilities. 
                  We can fill specific expertise gaps, provide strategic oversight, or augment capacity during growth phases or 
                  special projects. Your fractional CMO will work closely with your internal team members, providing mentorship, 
                  direction, and support to maximize their effectiveness. We're equally comfortable leading your entire marketing 
                  function or working alongside your existing team in a collaborative model.
                  <Link href="/services/cmo-as-a-service" className="text-neon-green hover:underline"> Learn more about our leadership approach.</Link>
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What's the typical engagement process and timeline?</h3>
                <p className="text-zinc-300">
                  The process begins with a discovery call to understand your business, challenges, and goals. If there's a potential fit, 
                  we conduct a more comprehensive assessment to determine the optimal team structure and resource allocation. We then 
                  propose a custom team composition and engagement model. Once approved, we assemble your team, conduct a thorough 
                  onboarding and strategy development process, and begin implementation. Most clients can complete this process and 
                  begin active work within 2-3 weeks. Typical engagements last 6-12 months, though many clients maintain ongoing 
                  relationships that evolve over time.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-neon-green/20 to-blue-500/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to build your custom marketing team?</h2>
                <p className="text-zinc-300">Schedule a consultation to discuss your marketing challenges and how our fractional team model can provide the expertise you need at a fraction of the cost.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-5 px-6">
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
