import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <PageLayout>
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-6 h-6 text-accent-orange" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              Member Access
            </h1>
            <p className="text-zinc-400 mb-8">
              Access to our documentation, research papers, case studies, and other resources
              is available to approved military and defense organizations. Please contact us
              to request access credentials.
            </p>
            <Link href="/company/contact">
              <Button className="bg-accent-orange hover:bg-blue-600 text-black">
                Contact for Access
              </Button>
            </Link>
          </div>
        </div>
      </main>

    </PageLayout>
  )
}
