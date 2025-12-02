'use client';

import { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'For individuals',
    monthlyPrice: 29,
    annualPrice: 23.2,
    popular: false,
    features: [
      { name: 'Up to 10,000 API calls/month', included: true },
      { name: 'Basic AI models', included: true },
      { name: 'Email support', included: true },
      { name: 'Community access', included: true },
      { name: 'Standard documentation', included: true },
      { name: 'Advanced AI models', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'For teams',
    monthlyPrice: 99,
    annualPrice: 79.2,
    popular: true,
    features: [
      { name: 'Up to 100,000 API calls/month', included: true },
      { name: 'All AI models (basic & advanced)', included: true },
      { name: 'Priority support', included: true },
      { name: 'Team collaboration (up to 10 users)', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: null,
    annualPrice: null,
    popular: false,
    features: [
      { name: 'Unlimited API calls', included: true },
      { name: 'All AI models + custom training', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Enterprise-grade analytics', included: true },
      { name: 'Custom integrations & APIs', included: true },
      { name: '99.99% SLA guarantee', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
  },
];

const faqs = [
  {
    question: 'Can I change my plan later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.',
  },
  {
    question: 'What happens if I exceed my API limit?',
    answer: 'If you exceed your monthly API limit, you can either upgrade your plan or purchase additional API calls at a pay-as-you-go rate.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. Contact our support team for refund requests.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.',
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to our powerful AI platform.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-lg ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors hover:bg-gray-600"
              aria-label="Toggle billing period"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-transform ${
                  isAnnual ? 'translate-x-8' : ''
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl backdrop-blur-lg bg-white/5 p-8 border transition-all hover:transform hover:scale-105 ${
                tier.popular
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/20'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400">{tier.description}</p>
              </div>

              <div className="mb-8">
                {tier.monthlyPrice !== null ? (
                  <>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-gray-500 mt-2">
                        Billed annually (${(tier.annualPrice * 12).toFixed(0)}/year)
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-4xl font-bold text-white">Custom</div>
                )}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all mb-8 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tier.monthlyPrice !== null ? 'Get Started' : 'Contact Sales'}
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Compare Features
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full backdrop-blur-lg bg-white/5 rounded-2xl border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-left text-white font-semibold">Feature</th>
                  {pricingTiers.map((tier, index) => (
                    <th key={index} className="py-4 px-6 text-center text-white font-semibold">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingTiers[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-800 last:border-0">
                    <td className="py-4 px-6 text-gray-300">
                      {pricingTiers[0].features[featureIndex].name}
                    </td>
                    {pricingTiers.map((tier, tierIndex) => (
                      <td key={tierIndex} className="py-4 px-6 text-center">
                        {tier.features[featureIndex].included ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/5 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 p-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers building the future with NexusAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 NexusAI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
