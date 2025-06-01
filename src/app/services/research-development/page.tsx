import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, BarChart, Database, Code, ShoppingBag, Briefcase } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function IndustrySolutionsPage() {
  return (
    <PageLayout>
      <Head>
        <title>Fractional CMO for Industry-Specific Solutions | Zygur</title>
        <meta 
          name="description" 
          content="Looking for a fractional CMO who understands your industry? Our specialized fractional CMO services for SaaS, manufacturing, professional services, and e-commerce deliver industry-specific marketing strategies that drive growth." 
        />
        <meta name="keywords" content="fractional cmo for saas, fractional cmo for manufacturing, industry specific marketing, b2b fractional cmo, professional services marketing" />
        <link rel="canonical" href="https://zygur.com/services/research-development" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Industry-Specific Fractional CMO Solutions",
              "description": "Specialized marketing leadership for different industries",
              "provider": {
                "@type": "Person",
                "name": "Aaron West"
              },
              "serviceType": "Fractional CMO",
              "serviceOutput": "Industry-optimized marketing strategy and execution"
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
                <span className="w-2 h-2 rounded-full bg-accent-orange mr-2"></span>
                Industry-Specific Solutions
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Industry-Specific Fractional CMO Solutions
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Every industry has unique marketing challenges and opportunities. As your 
              <Link href="/" className="text-accent-orange hover:underline"> fractional CMO</Link>, I bring 
              specialized expertise across multiple industries to deliver customized strategies 
              that drive growth for your specific market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/call">
                <Button className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/80 text-zinc-900 font-medium py-3 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Discuss Your Industry Needs
                </Button>
              </Link>
            </div>
          </div>

          {/* Industries Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Specialized Fractional CMO Services by Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80/70 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-accent-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">SaaS Fractional CMO</h3>
                </div>
                <p className="text-zinc-400 mb-6">
                  Software-as-a-Service companies face unique challenges in product-led growth, 
                  customer acquisition costs, and churn reduction. My SaaS marketing expertise 
                  helps you optimize your entire funnel.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Product-led growth strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Free trial and freemium optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Churn reduction and customer retention</span>
                  </li>
                </ul>
                <div className="border-t border-zinc-700 pt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">Average Client Results</p>
                    <p className="text-xs text-zinc-500">32% Increase in LTV:CAC Ratio</p>
                  </div>
                  <Link href="/industries/saas-fractional-cmo" className="text-accent-orange hover:text-accent-orange group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80/70 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold">Manufacturing Fractional CMO</h3>
                </div>
                <p className="text-zinc-400 mb-6">
                  Manufacturing companies must balance traditional marketing with digital transformation. 
                  My approach combines classic industrial marketing expertise with modern digital strategies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Technical content marketing for complex products</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Supply chain and distributor marketing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-yellow mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Digital transformation of traditional sales processes</span>
                  </li>
                </ul>
                <div className="border-t border-zinc-700 pt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">Average Client Results</p>
                    <p className="text-xs text-zinc-500">47% More Qualified Sales Opportunities</p>
                  </div>
                  <Link href="/industries/manufacturing-fractional-cmo" className="text-accent-yellow hover:text-rose-400 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80/70 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Services Fractional CMO</h3>
                </div>
                <p className="text-zinc-400 mb-6">
                  Professional services firms need to establish authority, generate leads, and 
                  nurture long client relationships. My approach focuses on thought leadership 
                  and relationship-driven marketing.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Thought leadership & authority building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Referral marketing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">High-value lead generation systems</span>
                  </li>
                </ul>
                <div className="border-t border-zinc-700 pt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">Average Client Results</p>
                    <p className="text-xs text-zinc-500">138% Increase in High-Value Consultations</p>
                  </div>
                  <Link href="/industries/professional-services-fractional-cmo" className="text-amber-500 hover:text-amber-400 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-dark-green/60 rounded-lg p-8 hover:bg-dark-green/80/70 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4">
                    <ShoppingBag className="w-6 h-6 text-accent-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">E-commerce Fractional CMO</h3>
                </div>
                <p className="text-zinc-400 mb-6">
                  E-commerce businesses need to drive qualified traffic, optimize conversion rates, 
                  and maximize customer lifetime value. My approach balances acquisition with retention.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Omnichannel marketing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Conversion rate optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent-orange mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">Customer retention & loyalty programs</span>
                  </li>
                </ul>
                <div className="border-t border-zinc-700 pt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">Average Client Results</p>
                    <p className="text-xs text-zinc-500">29% Higher Average Order Value</p>
                  </div>
                  <Link href="/industries/ecommerce-fractional-cmo" className="text-accent-orange hover:text-accent-orange group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Industry Strengths */}
          <div className="bg-dark-green/60 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Industry Expertise Matters</h2>
            <p className="text-zinc-400 mb-8">
              When you hire a <Link href="/resources/what-is-a-fractional-cmo" className="text-accent-orange hover:underline">fractional CMO</Link> with 
              experience in your specific industry, you gain access to specialized knowledge 
              that generalist marketers simply don't have. This translates to faster results 
              and more effective strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-3">Industry-Specific Metrics</h3>
                <p className="text-sm text-zinc-400">
                  I understand the key performance indicators that truly matter in your industry, 
                  beyond generic marketing metrics. This ensures we focus on the measurements that 
                  drive real business growth in your specific market context.
                </p>
              </div>
              
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-3">Competitive Positioning</h3>
                <p className="text-sm text-zinc-400">
                  With deep industry knowledge, I can effectively position your brand against competitors 
                  and identify unique value propositions that resonate with your specific audience's 
                  pain points and needs.
                </p>
              </div>
              
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-semibold mb-3">Industry-Specific Challenges</h3>
                <p className="text-sm text-zinc-400">
                  I bring specialized insight into your industry's unique challenges and market dynamics, 
                  allowing us to anticipate obstacles and capitalize on opportunities that generalist 
                  marketers might miss.
                </p>
              </div>
            </div>
          </div>

          {/* Industry-Specific Results */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Industry-Specific Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent-orange">SaaS Client Results</h3>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">63%</p>
                    <p className="text-sm text-zinc-400">Reduction in Customer Acquisition Cost</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">2.8x</p>
                    <p className="text-sm text-zinc-400">Increase in Trial-to-Paid Conversion</p>
                  </div>
                </div>
                <div className="border-t border-zinc-700 pt-4">
                  <p className="text-sm text-zinc-400 italic">
                    "Aaron understood our SaaS business model intuitively. His marketing strategy 
                    dramatically improved our unit economics and growth rate."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">Professional Services Results</h3>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">41%</p>
                    <p className="text-sm text-zinc-400">More Qualified Consultations</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">$37K</p>
                    <p className="text-sm text-zinc-400">Average Increase in Client Value</p>
                  </div>
                </div>
                <div className="border-t border-zinc-700 pt-4">
                  <p className="text-sm text-zinc-400 italic">
                    "Our professional services firm struggled with marketing until Aaron stepped in. 
                    His industry knowledge helped us attract higher-value clients."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-orange/20 to-accent-orange/20 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Get industry-specific marketing expertise</h2>
                <p className="text-zinc-400">Schedule a call to discuss your industry's unique marketing challenges and opportunities.</p>
              </div>
              <Link href="/call">
                <Button className="w-full md:w-auto bg-zinc-900 hover:bg-dark-green/80 text-white border border-zinc-700 font-medium py-5 px-6">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Your Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Industry Selection Guide */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Not Sure Which Industry Solution Is Right for You?</h2>
            <p className="text-zinc-400 mb-6">
              Even if your business doesn't fit neatly into one of these industry categories, my 
              <Link href="/" className="text-accent-orange hover:underline"> fractional CMO</Link> approach 
              can be tailored to your specific situation. Let's discuss your unique needs and create 
              a custom marketing strategy.
            </p>
            <Link href="/resources/what-is-a-fractional-cmo" className="inline-flex items-center text-accent-orange hover:text-accent-orange/80">
              Learn more about how a fractional CMO works <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
