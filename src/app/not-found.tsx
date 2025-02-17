import { PageLayout } from '@/components/layout/page-layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-zinc-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
