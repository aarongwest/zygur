"use client";

export function CTA() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="p-12 text-center">
          <h2 className="text-3xl font-bold text-brand-grey mb-4">
            Here's The Reality.
          </h2>
          <p className="text-lg text-brand-grey mb-8 max-w-2xl mx-auto">
            Your competition is posting consistently. They're everywhere. You're nowhere. Every day you wait is a day they own more of your market. Pick your path. Let's go.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#pricing" 
              className="text-brand-grey px-8 py-4 text-sm font-bold hover:opacity-80 transition-opacity inline-block rounded"
            >
              I'll Build It (Hayli AI)
            </a>
            <a 
              href="#pricing" 
              className="text-brand-grey px-8 py-4 text-sm font-bold hover:opacity-80 transition-opacity inline-block rounded"
            >
              You Own It (Hire Zygur)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
