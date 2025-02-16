import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 min-h-screen text-zinc-100">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  )
}
