import { PageLayout } from "@/components/layout/page-layout"

export default function DefenseMilitaryPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Defense & Military Solutions
        </h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Advanced software solutions engineered for modern defense and military operations. Our systems enhance operational capabilities while ensuring robust security and reliability.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Command and Control Software</h2>
            <p className="text-zinc-400 max-w-3xl">
              State-of-the-art communications software designed for military operations. Our solutions provide secure, real-time command and control capabilities, enabling seamless coordination across units and ensuring operational efficiency in mission-critical scenarios.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Surveillance, Reconnaissance, and Simulation Software</h2>
            <p className="text-zinc-400 max-w-3xl">
              Cutting-edge computer vision and AI-powered software for enhanced situational awareness. Our systems provide advanced surveillance capabilities, intelligent reconnaissance tools, and sophisticated simulation environments for training and strategic planning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Analytics and Decision-Making Software</h2>
            <p className="text-zinc-400 max-w-3xl">
              Sophisticated analytics platforms that transform complex data into actionable intelligence. Our software empowers military leaders with data-driven insights and decision support tools, enabling faster and more informed strategic decisions in dynamic operational environments.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
