import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <Hero />
      <UseCases />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
