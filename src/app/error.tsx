'use client'

import { useEffect } from 'react'
import { PageLayout } from '@/components/layout/page-layout'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <button
            className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
