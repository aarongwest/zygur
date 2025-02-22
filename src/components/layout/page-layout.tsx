import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
