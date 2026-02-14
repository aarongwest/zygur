import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-brand-grey">
      <Navigation />
      <Hero />
      <Products />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
