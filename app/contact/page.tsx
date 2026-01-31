import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Contact Us</h1>
        
        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          <p>
            Have questions about Zygur? Want to discuss your compliance requirements? 
            We're here to help.
          </p>
          
          <div className="pt-4 space-y-4">
            <div>
              <h3 className="text-black dark:text-white font-medium mb-2">Sales Inquiries</h3>
              <a href="mailto:sales@zygur.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                sales@zygur.com
              </a>
            </div>
            
            <div>
              <h3 className="text-black dark:text-white font-medium mb-2">General Support</h3>
              <a href="mailto:support@zygur.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                support@zygur.com
              </a>
            </div>
            
            <div>
              <h3 className="text-black dark:text-white font-medium mb-2">Careers</h3>
              <a href="mailto:careers@zygur.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                careers@zygur.com
              </a>
            </div>
          </div>
          
          <div className="pt-8">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Schedule a Demo</h2>
            <p className="mb-4">
              See how Zygur can help your team move faster while staying compliant.
            </p>
            <a 
              href="mailto:sales@zygur.com?subject=Demo Request" 
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
