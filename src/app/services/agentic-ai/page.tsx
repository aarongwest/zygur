import { PageLayout } from "@/components/layout/page-layout"

export default function AgenticAIPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          AI Automation
        </h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Intelligent automation and data processing solutions that transform your business operations. Our AI systems streamline workflows, analyze complex data, and deliver actionable insights.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Intelligent Automation Systems</h2>
            <p className="text-zinc-400 max-w-3xl">
              Advanced automation solutions that streamline your business processes. Our intelligent systems reduce manual workloads, minimize errors, and accelerate operations through AI-powered workflows that adapt to your specific business requirements and integrate seamlessly with your existing infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Processing and Analytics</h2>
            <p className="text-zinc-400 max-w-3xl">
              Comprehensive data processing and analytics solutions that transform raw information into valuable insights. Our systems efficiently collect, clean, and analyze data from multiple sources, providing you with actionable intelligence to drive informed decision-making and strategic planning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Machine Learning Integration</h2>
            <p className="text-zinc-400 max-w-3xl">
              Seamless integration of machine learning capabilities into your business applications. Our solutions leverage advanced algorithms to enable predictive analytics, pattern recognition, and continuous improvement through learning systems that evolve with your business and deliver increasingly valuable results over time.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
