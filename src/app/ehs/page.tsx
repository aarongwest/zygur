import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Metadata } from "next"
import { articles } from "@/data/articles"

export const metadata: Metadata = {
  title: "EHS Articles | EHS, Inc.",
  description: "Expert insights and guidance on environmental health and safety management.",
}

export default function Articles() {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">EHS Articles</h1>
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/ehs/${article.slug}`}
                className="block p-6 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2"
                    style={{ backgroundColor: article.color }}
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-zinc-400">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
