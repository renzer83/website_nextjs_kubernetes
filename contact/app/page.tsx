'use client';

import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import OfficeLocations from '@/components/OfficeLocations';
import SocialLinks from '@/components/SocialLinks';
import FAQLinks from '@/components/FAQLinks';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information - Takes 1 column */}
          <div className="space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <OfficeLocations />
      </section>

      {/* FAQ Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-12 pb-20">
        <FAQLinks />
      </section>
    </div>
  );
}
