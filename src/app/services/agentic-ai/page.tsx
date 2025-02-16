import { PageLayout } from "@/components/layout/page-layout"

export default function AgenticAIPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Agentic Artificial Intelligence
        </h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Advanced AI solutions that transform raw data into actionable intelligence. Our AI systems automate complex processes while maintaining high accuracy and reliability.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Collection and Processing</h2>
            <p className="text-zinc-400 max-w-3xl">
              Comprehensive data collection and processing solutions powered by intelligent agents. Our systems efficiently gather, clean, and structure data from diverse sources, ensuring high-quality input for downstream AI applications. We handle complex data types while maintaining strict security and compliance standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Labeling and Classification</h2>
            <p className="text-zinc-400 max-w-3xl">
              Advanced AI-driven data labeling and classification systems. Our intelligent agents accurately categorize and label diverse datasets, from text and images to complex multimodal data. We combine machine learning with expert oversight to ensure exceptional accuracy and consistency in data annotation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Workflow Automation</h2>
            <p className="text-zinc-400 max-w-3xl">
              Intelligent workflow automation solutions that streamline operations. Our AI agents optimize and automate complex business processes, reducing manual effort while improving accuracy and efficiency. We design custom automation solutions that adapt to your specific operational needs and scale with your organization.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
