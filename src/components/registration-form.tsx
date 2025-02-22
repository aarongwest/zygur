'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface RegistrationFormProps {
  initialMode?: 'register' | 'verify';
}

export function RegistrationForm({ initialMode = 'register' }: RegistrationFormProps) {
  const [formType, setFormType] = useState<'register' | 'verify'>(initialMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: formType === 'register' ? 'New Registration Request' : 'Registration Verification Request'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', country: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFormType('register')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            formType === 'register'
              ? 'bg-blue-500 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setFormType('verify')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            formType === 'verify'
              ? 'bg-blue-500 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          Verify Registration
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-200 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-100"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-100"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-200 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-100"
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-zinc-200 mb-2">
            Country of Registration
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-100"
          >
            <option value="">Select a country</option>
            <option value="US">United States (US)</option>
            <option value="CA">Canada (CA)</option>
            <option value="AU">Australia (AU)</option>
            <option value="EU">European Union (EU)</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-200 mb-2">
            {formType === 'register' ? 'Additional Information' : 'Verification Details'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-100"
            placeholder={formType === 'register' 
              ? "Please provide any additional information about your registration request..."
              : "Please provide any details to help verify the registration..."}
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            {status === 'loading' ? 'Sending...' : formType === 'register' ? 'Submit Registration' : 'Verify Registration'}
          </Button>
        </div>

        {status === 'success' && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-500 text-sm">
              {formType === 'register'
                ? 'Registration request sent successfully! We\'ll be in touch shortly.'
                : 'Verification request sent successfully! We\'ll process your request and respond shortly.'}
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-500 text-sm">Failed to send request. Please try again.</p>
          </div>
        )}
      </form>
    </div>
  );
}
