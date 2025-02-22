import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

'use client'

export default function DownloadPage() {
  const router = useRouter()
  const [error, setError] = useState(false)

  const handleDownload = () => {
    const downloadUrl = sessionStorage.getItem('downloadUrl')
    const downloadName = sessionStorage.getItem('downloadName')

    if (downloadUrl) {
      const downloadLink = document.createElement("a")
      downloadLink.href = downloadUrl
      downloadLink.download = downloadName || 'safety-topic-pdfs.zip'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      return true
    }
    return false
  }

  useEffect(() => {
    // Check if download info exists
    const downloadUrl = sessionStorage.getItem('downloadUrl')
    if (!downloadUrl) {
      setError(true)
      // Redirect to home after 3 seconds if no download info
      const timeout = setTimeout(() => {
        router.push('/')
      }, 3000)
      return () => clearTimeout(timeout)
    }

    // Trigger download
    handleDownload()
  }, [router])

  if (error) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
              <h1 className="text-3xl font-bold text-zinc-100 mb-4">Download Not Found</h1>
              <p className="text-zinc-400 mb-8">
                We couldn't find your download information. Redirecting you to the home page...
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border-2 border-dashed border-emerald-500 rounded-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-zinc-100 mb-4">Your Safety Topics Are Ready!</h1>
            <p className="text-zinc-400 mb-8">
              Your collection of 50+ safety topics and toolbox talks is downloading automatically. 
              If it doesn't start, click the button below. We've also emailed you a backup download link.
            </p>

            <div className="space-y-6">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-emerald-500 hover:opacity-90 w-full transition-opacity"
              >
                Download Safety Topics
              </button>

              <div className="border-t border-zinc-800 pt-6">
                <h2 className="text-xl font-semibold text-zinc-100 mb-4">What's Next?</h2>
                <p className="text-zinc-400 mb-6">
                  Want to make the most of these safety topics? Our EHS experts can help you:
                </p>
                <ul className="text-left text-zinc-400 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Customize topics for your industry
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Create an effective safety meeting schedule
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Track and document safety training
                  </li>
                </ul>
                <Link
                  href="/call"
                  className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-emerald-500 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white w-full transition-colors"
                >
                  Schedule Free Safety Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
