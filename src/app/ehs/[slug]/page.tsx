import { PageLayout } from "@/components/layout/page-layout"
import { articles } from "@/data/articles"

export default function Article({ params }: { params: { slug: string } }) {
  const article = articles.find(article => article.slug === params.slug)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-zinc-400">{article.excerpt}</p>
      </div>
    </PageLayout>
  )
}
