import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">About Zygur</h1>
        
        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          <p>
            Zygur is a <strong className="text-black dark:text-white">temporal workflow engine</strong> that compiles declarative 
            automation definitions into distributed, auditable execution across cloud infrastructure. We maintain cryptographic 
            state graphs (Merkle trees) proving exactly what ran, when, and with what result—designed specifically for regulated 
            industries requiring audit trails.
          </p>
          
          <div className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">The Three-Layer Architecture</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-base font-semibold mb-2 text-black dark:text-white">Layer 1: Zygur (Infrastructure)</h3>
                <p className="mb-3">
                  The universal compliance runtime. A workflow compiler and temporal state engine that runs as a Go binary 
                  in the cloud, orchestrating external compute (Replicate, Lambda, Vast) while maintaining compliance audit chains.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Use Cases:</strong> HealthTech (HIPAA), FinTech (SOX/PCI), LegalTech (eDiscovery), GRC (SOC2), Factory Operations
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-base font-semibold mb-2 text-black dark:text-white">Layer 2: GERTY (Application)</h3>
                <p className="mb-3">
                  Specialized automation platform for Governance, Risk, Compliance (GRC), Factory Operations, and HR workflows. 
                  Built on Zygur with pre-built templates and a declarative workflow marketplace.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Use Cases:</strong> SOC2 evidence collection, predictive maintenance, compliance training tracking, automated audits
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-base font-semibold mb-2 text-black dark:text-white">Layer 3: EHS, Inc. (Service)</h3>
                <p className="mb-3">
                  Human consulting practice using GERTY-on-Zygur to deliver Environmental Health & Safety services. 
                  Provides domain expertise and serves as Customer Zero for the platform.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Services:</strong> OSHA compliance audits, EPA environmental reporting, industrial hygiene monitoring
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Core Innovation</h2>
            <p>
              Zygur doesn't own GPUs or data centers. We own the <strong className="text-black dark:text-white">state topology</strong>—the 
              mathematical graph proving job continuity across time. We are "Temporal.io for regulated AI + Cromwell for compliance."
            </p>
          </div>
          
          <div className="pt-8">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Contact Sales</h2>
            <p className="mb-4">
              Interested in learning more about Zygur for your organization?
            </p>
            <a 
              href="mailto:sales@zygur.com" 
              className="inline-block border border-black dark:border-white text-black dark:text-white px-6 py-3 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
