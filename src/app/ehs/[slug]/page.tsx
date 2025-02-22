import { PageLayout } from "@/components/layout/page-layout"
import { ArticleSidebar } from "@/components/layout/article-sidebar"
import { LeadMagnetForm } from "@/components/lead-magnet-form"
import { articles } from "@/data/articles"
import { Metadata } from "next"
import Link from "next/link"

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(article => article.slug === params.slug)
  
  if (!article) {
    return {
      title: "Article Not Found | EHS, Inc.",
      description: "The requested article could not be found."
    }
  }

  return {
    title: `${article.title} | EHS, Inc.`,
    description: article.excerpt,
    keywords: `${article.title.toLowerCase()}, ehs, safety management, health and safety, ${article.tag}, safety topics bundle`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: ['EHS, Inc.'],
      tags: [article.tag],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    }
  }
}

// All articles use the safety topics bundle
function getCustomLeadMagnet(slug: string): { name: string; description: string; url: string } | undefined {
  return undefined
}

export default function Article({ params }: { params: { slug: string } }) {
  const article = articles.find(article => article.slug === params.slug)
  const customMagnet = getCustomLeadMagnet(params.slug)

  if (!article) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-zinc-400 mb-8">The article you're looking for could not be found.</p>
          <Link
            href="/ehs"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Articles
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
            <time className="block text-sm text-zinc-500 mb-4">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <p className="text-zinc-400 mb-8">{article.excerpt}</p>
            <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content.replace(/200\+/g, '50+') }} />
            {article.tag === 'products' && (
              <div className="mt-12">
                <LeadMagnetForm 
                  downloadUrl={`/downloads/products/${article.slug}.pdf`}
                  tag={article.tag}
                />
              </div>
            )}
            <div className="mt-8 flex gap-4">
              <Link
                href="/ehs"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Articles
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-8">
            {article.tag === 'products' && (
              <LeadMagnetForm 
                downloadUrl={`/downloads/products/${article.slug}.pdf`}
                tag={article.tag}
              />
            )}
            {article.tag !== 'products' && (
              <LeadMagnetForm 
                downloadUrl="/safety-topic-pdfs.zip"
                customMagnet={customMagnet}
                tag={article.tag}
              />
            )}
            <ArticleSidebar />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
