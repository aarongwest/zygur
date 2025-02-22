'use client';

import { PageLayout } from "@/components/layout/page-layout"
import { RegistrationForm } from "@/components/registration-form"
import { useSearchParams } from "next/navigation"

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const verify = searchParams.get('verify') === 'true';
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Registration & Verification
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Register your organization with EHS, Inc. or verify an existing registration.
              Our certification badges demonstrate your commitment to environmental health and safety standards.
            </p>
            <RegistrationForm initialMode={verify ? 'verify' : 'register'} />
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
