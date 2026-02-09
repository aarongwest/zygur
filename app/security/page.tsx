import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-transparent text-brand-grey">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-brand-grey">Security & Compliance</h1>
        
        <div className="space-y-6 text-sm text-brand-grey leading-relaxed max-w-3xl">
          <p>
            Security and compliance are at the core of everything we build at Zygur. We understand 
            that our customers trust us with their most sensitive workloads and data.
          </p>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Certifications</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>SOC 2 Type II certified</li>
              <li>HIPAA compliant with BAA available</li>
              <li>GDPR compliant</li>
              <li>ISO 27001 (in progress)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Data Protection</h2>
            <p>
              All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use industry-leading 
              key management systems and rotate encryption keys regularly.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Infrastructure Security</h2>
            <p>
              Our infrastructure is built on AWS with multi-region redundancy. We implement defense-in-depth 
              strategies including network segmentation, intrusion detection, and regular penetration testing.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Audit Logging</h2>
            <p>
              Every action in Zygur is logged with tamper-proof audit trails. Logs are retained for 
              7 years for Enterprise customers and can be exported at any time.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Report a Vulnerability</h2>
            <p>
              If you discover a security vulnerability, please report it to{" "}
              <a href="mailto:security@zygur.com" className="text-white hover:underline">
                security@zygur.com
              </a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
