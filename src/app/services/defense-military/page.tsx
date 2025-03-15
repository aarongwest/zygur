import { PageLayout } from "@/components/layout/page-layout"

export default function DefenseMilitaryPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Software Development
        </h1>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Custom software solutions and systems designed to meet your specific business needs. Our development team creates robust, scalable applications with a focus on user experience and performance.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Software Solutions</h2>
            <p className="text-zinc-400 max-w-3xl">
              Tailored software applications built to address your unique business challenges. Our development team works closely with you to understand your requirements and deliver solutions that streamline operations, enhance productivity, and drive growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">System Architecture and Integration</h2>
            <p className="text-zinc-400 max-w-3xl">
              Comprehensive system design and integration services that connect your existing technologies with new solutions. We create scalable architectures that support your current needs while providing flexibility for future growth and technological advancements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Enterprise Application Development</h2>
            <p className="text-zinc-400 max-w-3xl">
              Powerful enterprise applications that transform business processes and enhance operational efficiency. Our enterprise solutions feature robust security, seamless integration capabilities, and intuitive interfaces designed for maximum user adoption and productivity.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
