import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 min-h-screen text-zinc-100 relative">
        {/* Race car background with overlay for header and hero section */}
        <div className="absolute top-0 left-0 right-0 h-[850px] bg-[url('/911ed.webp')] bg-cover bg-[center_top_-100px] z-0">
          {/* Extended gradient overlay that fades the bottom of the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-0"></div>
          {/* Additional fade at the bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black via-black/90 to-transparent z-0"></div>
        </div>
        
        {/* Content on top of the background */}
        <div className="relative z-10">
          <Navigation />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}
