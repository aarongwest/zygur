"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

import { ArticleTag, getTagColor } from "@/data/articles"

interface LeadMagnetFormProps {
  title?: string
  description?: string
  downloadUrl: string
  tag: ArticleTag
  customMagnet?: {
    name: string
    description: string
    url: string
  }
}

export function LeadMagnetForm({ 
  title = "Download 50+ Ready-to-Use Safety Topics",
  description = "Get instant access to our collection of toolbox talks, safety meeting topics, and training materials. Save hours of preparation time with our professionally crafted safety resources.",
  downloadUrl,
  tag,
  customMagnet
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Store download info in session storage
    sessionStorage.setItem('downloadUrl', customMagnet ? customMagnet.url : downloadUrl)
    sessionStorage.setItem('downloadName', customMagnet ? customMagnet.name : 'safety-topic-pdfs.zip')

    // Redirect to download page
    window.location.href = '/download'
    setLoading(false)
  }

  return (
    <div className={`bg-zinc-900 border-2 border-dashed ${getTagColor(tag).inner.replace('bg-', 'border-')} rounded-lg p-6`}>
      <h3 className="text-xl font-semibold text-zinc-100 mb-2">{title}</h3>
      <p className="text-zinc-400 mb-6">{customMagnet ? customMagnet.description : description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Company Name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="(555) 555-5555"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button
          type="submit"
          size="lg"
          className={`w-full !h-[3.5rem] !py-0 ${getTagColor(tag).inner} hover:opacity-90 transition-opacity text-lg font-bold [&>*]:!rounded-none`}
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : "Download Now"}
        </Button>

        <p className="text-xs text-zinc-500 text-center mt-4">
          By submitting this form, you agree to receive marketing emails from EHS, Inc. You can unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}
