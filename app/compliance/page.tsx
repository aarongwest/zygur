import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-transparent text-brand-grey">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-brand-grey">Compliance</h1>
        
        <div className="space-y-6 text-sm text-brand-grey leading-relaxed max-w-3xl">
          <p>
            Zygur is built from the ground up to help organizations maintain compliance across 
            multiple regulatory frameworks while leveraging cloud GPU infrastructure.
          </p>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Supported Frameworks</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-brand-grey font-medium mb-2">SOC 2 Type II</h3>
                <p>
                  Zygur is SOC 2 Type II certified. We undergo annual audits to ensure our security 
                  controls meet the highest standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-brand-grey font-medium mb-2">HIPAA</h3>
                <p>
                  Our HIPAA compliance mode ensures all PHI is handled according to HIPAA requirements. 
                  Business Associate Agreements (BAA) are available for Enterprise customers.
                </p>
              </div>
              
              <div>
                <h3 className="text-brand-grey font-medium mb-2">GDPR</h3>
                <p>
                  We provide data residency controls, right to erasure, and data portability to help 
                  you comply with GDPR requirements.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-brand-grey">Audit Reports</h2>
            <p>
              Generate compliance reports with a single command. Our audit logs are tamper-proof 
              and include all necessary information for regulatory audits.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-3 text-black dark:text-white">Questions?</h2>
            <p>
              Contact our compliance team at{" "}
              <a href="mailto:compliance@zygur.com" className="text-white hover:underline">
                compliance@zygur.com
              </a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
