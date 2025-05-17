import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, X, DollarSign, Clock, Target, Users, Zap } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function FractionalCMOvsAgencyPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional CMO vs Marketing Agency: Which Is Right For You? | Zygur</title>
        <meta 
          name="description" 
          content="Trying to decide between a fractional CMO and a marketing agency? This comparison breaks down the costs, benefits, and ideal use cases for each to help you make the right choice for your business." 
        />
        <meta name="keywords" content="fractional cmo vs agency, marketing agency or fractional cmo, outsourced cmo vs agency, marketing leadership options" />
        <link rel="canonical" href="https://zygur.com/compare/fractional-cmo-vs-agency" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What's the difference between a fractional CMO and a marketing agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A fractional CMO is an experienced marketing executive who works part-time for your company, providing strategic direction and leadership, while a marketing agency is a team of specialists who execute marketing tactics and campaigns. The key difference is that a fractional CMO focuses on strategy, leadership, and alignment with business goals, whereas an agency primarily delivers execution of specific marketing activities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a fractional CMO more expensive than a marketing agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not necessarily. While fractional CMO rates ($2,000-$7,000 monthly) might seem comparable to some agency retainers, the value equation is different. Agencies often require larger budgets for execution ($10,000-$20,000+ monthly), whereas a fractional CMO can help optimize your existing resources and make strategic decisions about where to invest for maximum ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When should I choose a fractional CMO over an agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose a fractional CMO when you need strategic direction, marketing leadership, and business alignment rather than just tactical execution. A fractional CMO is ideal when you: need to develop a comprehensive marketing strategy, want to build and lead an internal marketing team, require C-suite level thinking about your marketing initiatives, or need to connect marketing activities directly to business outcomes and ROI."
                  }
                }
              ]
            }
          `}
        </script>
      </Head>
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center text-sm text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
                Marketing Leadership Options
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Fractional CMO vs Marketing Agency: Which Is Right For Your Business?
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Deciding between a <Link href="/resources/what-is-a-fractional-cmo" className="text-neon-green hover:underline">fractional CMO</Link> and 
              a marketing agency isn't just about cost — it's about finding the right fit for your 
              unique business challenges. I've worked as both, and I'll help you understand the key 
              differences and make the right choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Summary Section */}
          <div className="bg-zinc-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">The Key Differences at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neon-green">Fractional CMO</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Strategic leadership and direction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">C-suite level expertise and alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Direct business outcome focus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Team building and leadership</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Limited execution bandwidth</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Marketing Agency</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Tactical execution at scale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Specialized skills in multiple areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Production capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Limited business alignment</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-zinc-300">Account management vs. leadership</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Perfect Combination</h3>
                <p className="text-zinc-400 mb-4">
                  In many cases, the ideal solution is to have both — a 
                  <Link href="/" className="text-neon-green hover:underline"> fractional CMO</Link> who provides 
                  strategic direction and leadership, working with specialized agencies for execution.
                </p>
                <p className="text-zinc-400">
                  As your fractional CMO, I can both develop strategy and help select, manage, and 
                  maximize the value of agency partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Detailed Comparison: Fractional CMO vs Marketing Agency</h2>
            
            {/* Cost Comparison */}
            <div className="bg-zinc-800/50 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-semibold">Cost Structure</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neon-green mb-3">Fractional CMO</h4>
                  <p className="text-zinc-400 mb-4">
                    Typically ranges from <Link href="/pricing/fractional-cmo-cost" className="text-neon-green hover:underline">$2,000-$7,000 per month</Link> depending 
                    on experience and time commitment (usually 1-3 days per week). This is a significant 
                    savings compared to a full-time CMO's salary ($150,000-$300,000+ annually), while 
                    still providing executive-level expertise.
                  </p>
                  <p className="text-zinc-400">
                    <strong>Cost efficiency:</strong> A fractional CMO helps optimize your existing marketing 
                    spend and resources, often identifying cost savings or redirecting budget to higher-ROI 
                    activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Marketing Agency</h4>
                  <p className="text-zinc-400 mb-4">
                    Agency retainers typically start around $3,000-$5,000 monthly for small businesses but 
                    can quickly escalate to $10,000-$20,000+ monthly for more comprehensive services. 
                    This often doesn't include media spend or production costs.
                  </p>
                  <p className="text-zinc-400">
                    <strong>Additional considerations:</strong> Agencies often have minimums, setup fees, 
                    and require ongoing commitments. They may also mark up third-party services or 
                    media buys, adding to the total cost.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Focus & Expertise */}
            <div className="bg-zinc-800/50 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-semibold">Focus & Expertise</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neon-green mb-3">Fractional CMO</h4>
                  <p className="text-zinc-400 mb-4">
                    A fractional CMO brings <strong>strategic leadership</strong> and focuses on aligning marketing 
                    with business objectives. They're experienced executives who've "been there, done that" 
                    across multiple companies and situations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Business strategy alignment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Cross-functional leadership</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Marketing team building & development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Broad strategic expertise across channels</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Marketing Agency</h4>
                  <p className="text-zinc-400 mb-4">
                    Agencies excel at <strong>tactical execution</strong> and typically specialize in specific 
                    areas or channels. They provide access to specialists and production capabilities 
                    that would be difficult to maintain in-house.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Specialized channel expertise (paid media, SEO, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Creative production capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Campaign execution and management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">Platform-specific technical knowledge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Integration & Commitment */}
            <div className="bg-zinc-800/50 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-semibold">Integration & Commitment</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neon-green mb-3">Fractional CMO</h4>
                  <p className="text-zinc-400 mb-4">
                    A fractional CMO is part of your leadership team. They attend executive meetings, 
                    understand the nuances of your business, and align closely with your company culture 
                    and values.
                  </p>
                  <p className="text-zinc-400 mb-2">
                    <strong>Working relationship:</strong> Works as a member of your team, dedicated to your 
                    business goals with direct alignment to your company's success.
                  </p>
                  <p className="text-zinc-400">
                    <strong>Commitment:</strong> Typically 3-6 month initial engagements that often extend to 
                    long-term relationships (1-3+ years), evolving with your business needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Marketing Agency</h4>
                  <p className="text-zinc-400 mb-4">
                    Agencies are external partners managed through account managers. While they learn 
                    about your business, they're ultimately separate entities serving multiple clients 
                    simultaneously.
                  </p>
                  <p className="text-zinc-400 mb-2">
                    <strong>Working relationship:</strong> Client-vendor relationship with varying levels of 
                    integration; typically managed through regular check-ins and reports.
                  </p>
                  <p className="text-zinc-400">
                    <strong>Commitment:</strong> Usually requires 6-12 month contracts, with potential change 
                    fees or early termination penalties.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Results & Timeline */}
            <div className="bg-zinc-800/50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-semibold">Results & Timeline</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neon-green mb-3">Fractional CMO</h4>
                  <p className="text-zinc-400 mb-4">
                    A fractional CMO delivers strategic impact that builds over time, with initial 
                    strategy development in the first 30-60 days and increasing returns as 
                    implementations take hold. The focus is on sustainable, long-term growth.
                  </p>
                  <p className="text-zinc-400">
                    <strong>Typical results include:</strong> Improved marketing ROI, clearer strategic direction, 
                    better team performance, and closer alignment between marketing activities and 
                    business outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Marketing Agency</h4>
                  <p className="text-zinc-400 mb-4">
                    Agencies typically deliver campaign or channel-specific results that can sometimes 
                    show quicker tactical wins but may lack strategic cohesion without proper oversight.
                  </p>
                  <p className="text-zinc-400">
                    <strong>Typical results include:</strong> Increased campaign performance, higher quality creative 
                    assets, channel-specific improvements, and tactical execution at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Choose Each Option */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">When to Choose Each Option</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-neon-green/10 to-zinc-800/50 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Choose a Fractional CMO When...</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You need strategic marketing leadership but can't justify a full-time CMO salary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Your marketing efforts lack clear direction, strategy, or business alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You're not seeing ROI from your current marketing activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You need to build and develop an internal marketing team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You need a marketing leader who can sit at the executive table</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You want to optimize your existing marketing investments</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/" className="text-neon-green hover:text-neon-green/80 flex items-center">
                    Learn more about fractional CMO services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-400/10 to-zinc-800/50 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Choose a Marketing Agency When...</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You have a clear strategy but need execution help in specific channels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You need specialized expertise you don't have in-house (paid search, SEO, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You need production capabilities (design, video, etc.) at scale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You have a marketing leader who can direct and manage agency work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You need to rapidly ramp up marketing activities in specific areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">You prefer to outsource entire functions rather than build in-house</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-zinc-400 text-sm italic">
                    Note: I often help clients select, manage, and get better results from agency partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Ideal Approach */}
          <div className="bg-gradient-to-r from-purple-500/20 to-neon-green/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">The Ideal Approach: Best of Both Worlds</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-zinc-300 mb-4">
                  Many of my most successful clients leverage both a fractional CMO and targeted agency partnerships. 
                  This combination provides the perfect balance of strategic direction and execution capabilities.
                </p>
                <p className="text-zinc-300 mb-6">
                  As your <Link href="/" className="text-neon-green hover:underline">fractional CMO</Link>, I can:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Develop your overarching marketing strategy and roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Help select the right specialized agencies for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Manage agency relationships to ensure strategic alignment</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Translate business goals into clear agency briefs and expectations</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-neon-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-zinc-300">Objectively evaluate agency performance against business metrics</span>
                  </li>
                </ul>
                <p className="text-zinc-300">
                  This approach gives you strategic leadership that's aligned with your business goals, 
                  combined with specialized execution capabilities — often at a lower total cost than 
                  trying to do everything with agencies alone.
                </p>
              </div>
              <div className="md:w-1/3 bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Case Study: The Hybrid Approach</h3>
                <p className="text-zinc-400 mb-4">
                  A B2B software company was spending $15,000/month with a full-service agency but 
                  wasn't seeing results. After bringing me on as their fractional CMO:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">We replaced the general agency with three specialized partners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Total agency spend reduced to $8,000/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Lead quality improved by 47%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Sales pipeline increased by 82%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-neon-green/20 to-blue-500/20 rounded-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Still not sure which option is right for you?</h2>
                <p className="text-zinc-400">Schedule a consultation to discuss your specific business needs and get personalized advice.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-neon-green hover:bg-neon-green/80 text-zinc-900 font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Your Call
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What's the difference between a fractional CMO and a marketing agency?</h3>
                <p className="text-zinc-400">
                  A <Link href="/resources/what-is-a-fractional-cmo" className="text-neon-green hover:underline">fractional CMO</Link> is an experienced marketing executive who works part-time 
                  for your company, providing strategic direction and leadership, while a marketing agency 
                  is a team of specialists who execute marketing tactics and campaigns. The key difference 
                  is that a fractional CMO focuses on strategy, leadership, and alignment with business goals, 
                  whereas an agency primarily delivers execution of specific marketing activities.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is a fractional CMO more expensive than a marketing agency?</h3>
                <p className="text-zinc-400">
                  Not necessarily. While fractional CMO rates ($2,000-$7,000 monthly) might seem 
                  comparable to some agency retainers, the value equation is different. Agencies often 
                  require larger budgets for execution ($10,000-$20,000+ monthly), whereas a 
                  <Link href="/pricing/fractional-cmo-cost" className="text-neon-green hover:underline"> fractional CMO</Link> can 
                  help optimize your existing resources and make strategic decisions about where to invest for maximum ROI.
                </p>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">When should I choose a fractional CMO over an agency?</h3>
                <p className="text-zinc-400">
                  Choose a fractional CMO when you need strategic direction, marketing leadership, and 
                  business alignment rather than just tactical execution. A fractional CMO is ideal when you:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Need to develop a comprehensive marketing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Want to build and lead an internal marketing team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Require C-suite level thinking about your marketing initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Need to connect marketing activities directly to business outcomes and ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
