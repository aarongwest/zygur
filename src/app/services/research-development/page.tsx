import { PageLayout } from "@/components/layout/page-layout"

export default function ResearchDevelopmentPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Research & Development
        </h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Pushing the boundaries of technological innovation through systematic research and development. We transform emerging concepts into tangible solutions.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Emerging Tech Discovery</h2>
            <p className="text-zinc-400 max-w-3xl">
              Our dedicated research teams continuously explore and evaluate emerging technologies, identifying breakthrough opportunities that can revolutionize industries. We maintain a pulse on technological advancements across quantum computing, artificial intelligence, and advanced engineering.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Concept Testing and Vetting</h2>
            <p className="text-zinc-400 max-w-3xl">
              We employ rigorous methodologies to test and validate new technological concepts. Our comprehensive vetting process ensures that only the most promising and viable solutions move forward, saving valuable resources and accelerating development cycles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Prototype Design and Development</h2>
            <p className="text-zinc-400 max-w-3xl">
              Transform concepts into reality with our advanced prototyping capabilities. We specialize in rapid iteration and development of functional prototypes, allowing for quick validation and refinement of innovative solutions before full-scale implementation.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
