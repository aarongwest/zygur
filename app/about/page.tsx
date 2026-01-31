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
            Zygur Technologies Corp. is building the compliance layer for cloud GPU infrastructure. 
            We enable developers in regulated industries to leverage the power of modern AI while 
            maintaining full compliance with SOC2, HIPAA, and GDPR requirements.
          </p>
          
          <p>
            Founded in 2024, our mission is to eliminate the friction between innovation and compliance. 
            We believe that developers shouldn't have to choose between moving fast and staying compliant.
          </p>
          
          <p>
            Our platform automatically routes GPU workloads to the most cost-effective provider while 
            generating tamper-proof audit logs that satisfy even the most stringent regulatory requirements.
          </p>
          
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
