'use client'

import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import { articles, getTagColor, ArticleTag } from "@/data/articles"
import { ArrowRight } from "lucide-react"
import { useSearchParams } from "next/navigation"

type SortOption = 'date-new' | 'date-old' | 'alpha-asc' | 'alpha-desc'

export default function Articles() {
  const searchParams = useSearchParams()
  const tagParam = searchParams.get('tag') as ArticleTag | null
  const [selectedTag, setSelectedTag] = useState<ArticleTag | 'all'>(tagParam || 'all')

  // Update selected tag when URL param changes
  useEffect(() => {
    if (tagParam) {
      setSelectedTag(tagParam)
    }
  }, [tagParam])
  const [sortBy, setSortBy] = useState<SortOption>('date-new')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = [...articles]

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(article => article.tag === selectedTag)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      )
    }

    // Sort articles
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-new':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'date-old':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'alpha-asc':
          return a.title.localeCompare(b.title)
        case 'alpha-desc':
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })
  }, [selectedTag, sortBy, searchQuery])

  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-bold">EHS Solutions</h1>

          {/* Filters */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center bg-zinc-800/50 p-4 rounded-lg">
            {/* Tag filters */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === 'all'
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTag('tech')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === 'tech'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20'
                }`}
              >
                Tech
              </button>
              <button
                onClick={() => setSelectedTag('services')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === 'services'
                    ? 'bg-fuchsia-500 text-white'
                    : 'bg-fuchsia-500/10 text-fuchsia-500 hover:bg-fuchsia-500/20'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setSelectedTag('products')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === 'products'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setSelectedTag('other')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === 'other'
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20'
                }`}
              >
                Other
              </button>
            </div>

            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <option value="date-new">Newest First</option>
              <option value="date-old">Oldest First</option>
              <option value="alpha-asc">A-Z</option>
              <option value="alpha-desc">Z-A</option>
            </select>

            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
          </div>

          {/* Articles list */}
          <div className="space-y-6">
            {filteredAndSortedArticles.map((article) => (
              <article key={article.slug} className="bg-zinc-800/50 rounded-lg overflow-hidden">
                <Link
                  href={`/ehs/${article.slug}`}
                  className="block p-6 hover:bg-zinc-700/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-1">
                      <div className="relative flex items-center justify-center w-10 h-10">
                        <div className={`absolute inset-0 rounded-full ${getTagColor(article.tag).outer}`}></div>
                        <div className={`w-5 h-5 rounded-full ${getTagColor(article.tag).inner}`}></div>
                      </div>
                      <h2 className="text-xl font-semibold text-zinc-100">{article.title}</h2>
                      </div>
                      <time className="block text-sm text-zinc-500 mb-2">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <p className="text-zinc-300">{article.excerpt}</p>
                    </div>
                    <ArrowRight className="text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0 ml-4" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
