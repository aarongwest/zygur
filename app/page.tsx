import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Architecture } from "@/components/Architecture";
import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Documentation } from "@/components/Documentation";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <Hero />
      <Architecture />
      <Comparison />
      <Features />
      <Pricing />
      <Documentation />
      <CTA />
      <Footer />
    </main>
  );
}
