import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-white">Careers</h1>
        
        <div className="space-y-6 text-sm text-gray-400 leading-relaxed max-w-3xl">
          <p>
            Join us in building the future of compliant AI infrastructure. We're looking for talented 
            engineers, designers, and operators who are passionate about making compliance seamless 
            for developers.
          </p>
          
          <p>
            At Zygur, we believe in moving fast while maintaining the highest standards of security 
            and compliance. If you're excited about solving hard technical problems in a rapidly 
            growing space, we'd love to hear from you.
          </p>
          
          <p className="text-gray-500">
            Open positions will be posted here soon.
          </p>
          
          <div className="pt-8">
            <h2 className="text-xl font-bold mb-4 text-white">Interested in Joining?</h2>
            <p className="mb-4">
              Send your resume and a note about what you're interested in working on.
            </p>
            <a 
              href="mailto:careers@zygur.com" 
              className="inline-block border border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
