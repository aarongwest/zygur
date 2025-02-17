import { PageLayout } from '@/components/layout/page-layout'

export default function Loading() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl animate-pulse">
          <div className="h-4 w-32 bg-zinc-800 rounded mb-8"></div>
          <div className="h-8 w-96 bg-zinc-800 rounded mb-4"></div>
          <div className="h-4 w-64 bg-zinc-800 rounded mb-12"></div>
          <div className="space-y-6">
            <div className="h-24 bg-zinc-800/50 rounded-lg"></div>
            <div className="h-24 bg-zinc-800/50 rounded-lg"></div>
            <div className="h-24 bg-zinc-800/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
