import Link from "next/link"
import { articles, getTagColor, ArticleTag } from "@/data/articles"

export function ArticleSidebar() {
  const groupedArticles = {
    tech: [...articles]
      .filter(article => article.tag === 'tech')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    services: [...articles]
      .filter(article => article.tag === 'services')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    other: [...articles]
      .filter(article => article.tag === 'other')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const tagLabels: Record<ArticleTag, string> = {
    tech: 'Tech Articles',
    services: 'Services',
    other: 'Other Articles'
  }

  return (
    <div className="bg-zinc-800/50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">All Articles</h2>
      <div className="space-y-8">
        {(Object.keys(groupedArticles) as ArticleTag[]).map(tag => (
          <div key={tag}>
            <h3 className="text-sm font-medium text-zinc-400 mb-3">{tagLabels[tag]}</h3>
            <div className="space-y-3">
              {groupedArticles[tag].map((article) => (
                <Link
                  key={article.slug}
                  href={`/ehs/${article.slug}`}
                  className="block hover:bg-zinc-700/50 p-3 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-shrink-0 flex items-center justify-center w-6 h-6">
                      <div className={`absolute inset-0 rounded-full ${getTagColor(article.tag).outer}`}></div>
                      <div className={`w-3 h-3 rounded-full ${getTagColor(article.tag).inner}`}></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-100 text-sm">{article.title}</h4>
                      <time className="block text-xs text-zinc-500 mt-0.5">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
