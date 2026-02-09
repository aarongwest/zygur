import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-transparent text-brand-grey">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-brand-grey">Terms of Service</h1>
        
        <div className="space-y-6 text-sm text-brand-grey leading-relaxed max-w-3xl">
          <p className="text-xs text-brand-grey opacity-75">Last updated: January 2024</p>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Agreement to Terms</h2>
            <p>
              By accessing or using Zygur's services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Use License</h2>
            <p>
              Permission is granted to use Zygur's services for commercial and personal purposes 
              in accordance with your subscription plan. This license shall automatically terminate 
              if you violate any of these restrictions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Service Level Agreement</h2>
            <p>
              Zygur provides different SLA guarantees based on your subscription tier. Enterprise 
              customers receive 99.9% uptime guarantee with dedicated support.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Limitation of Liability</h2>
            <p>
              In no event shall Zygur Technologies Corp. be liable for any damages arising out of 
              the use or inability to use our services, even if we have been notified of the 
              possibility of such damages.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Contact</h2>
            <p>
              Questions about the Terms of Service should be sent to{" "}
              <a href="mailto:legal@zygur.com" className="text-white hover:underline">
                legal@zygur.com
              </a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
