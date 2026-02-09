import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent text-brand-grey">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-brand-grey">Privacy Policy</h1>
        
        <div className="space-y-6 text-sm text-brand-grey leading-relaxed max-w-3xl">
          <p className="text-xs text-brand-grey opacity-75">Last updated: January 2024</p>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Overview</h2>
            <p>
              Zygur Technologies Corp. ("Zygur", "we", "us", or "our") is committed to protecting 
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including account information, 
              usage data, and compliance logs. All data is encrypted in transit and at rest.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              generate compliance reports, and communicate with you about your account.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including 
              encryption, access controls, and regular security audits. We are SOC2 Type II certified.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@zygur.com" className="text-white hover:underline">
                privacy@zygur.com
              </a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
