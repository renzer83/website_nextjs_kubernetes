'use client';

import { useEffect, useRef } from 'react';
import {
  Zap,
  MessageSquare,
  TrendingUp,
  Link2,
  Activity,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Zap,
    title: 'AI Workflow Automation',
    description:
      'Streamline your business processes with intelligent automation that learns and adapts to your workflow patterns.',
    details: [
      'Automated task routing and prioritization',
      'Smart decision-making algorithms',
      'Seamless integration with existing tools',
      'Reduce manual work by up to 80%',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description:
      'Advanced NLP capabilities that understand context, sentiment, and intent to deliver human-like interactions.',
    details: [
      'Multi-language support (100+ languages)',
      'Sentiment analysis and emotion detection',
      'Context-aware responses',
      'Real-time translation capabilities',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Leverage machine learning models to forecast trends, identify opportunities, and make data-driven decisions.',
    details: [
      'Advanced forecasting models',
      'Anomaly detection and alerts',
      'Custom KPI tracking',
      'Interactive data visualizations',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    icon: Link2,
    title: 'Smart Integrations',
    description:
      'Connect NexusAI with your favorite tools and platforms for a unified, powerful ecosystem.',
    details: [
      '500+ pre-built integrations',
      'Custom API endpoints',
      'Webhook support',
      'Real-time data synchronization',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    icon: Activity,
    title: 'Real-time Monitoring',
    description:
      'Stay informed with comprehensive monitoring and analytics that provide instant insights into your AI operations.',
    details: [
      'Live performance dashboards',
      'Custom alert configurations',
      'Detailed audit logs',
      'Usage analytics and reporting',
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    icon: Sparkles,
    title: 'Custom AI Models',
    description:
      'Train and deploy your own AI models tailored to your specific business needs and industry requirements.',
    details: [
      'No-code model training',
      'Transfer learning capabilities',
      'Model versioning and A/B testing',
      'Enterprise-grade security',
    ],
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function FeaturesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-slate-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 observe opacity-0">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 observe opacity-0 delay-100">
              Powerful AI{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Features
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 observe opacity-0 delay-200">
              Discover the cutting-edge capabilities that make NexusAI the most
              advanced artificial intelligence platform for modern businesses.
            </p>

            <div className="flex flex-wrap gap-4 justify-center observe opacity-0 delay-300">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.id}
                className={`observe opacity-0 flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    {feature.title}
                  </h2>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mt-1`}
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="ml-4 text-gray-300 text-lg">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${feature.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <div className="relative">
                    {/* Glass Card */}
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden">
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 rounded-full bg-gradient-to-br ${feature.gradient}`}
                            ></div>
                            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                          </div>
                          <div className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                            Live Demo
                          </div>
                        </div>

                        {/* Animated Elements */}
                        <div className="space-y-4">
                          {[...Array(4)].map((_, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-4 animate-pulse"
                              style={{
                                animationDelay: `${idx * 0.2}s`,
                              }}
                            >
                              <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="h-4 bg-white/20 rounded-full mb-2"></div>
                                <div className="h-3 bg-white/10 rounded-full w-2/3"></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold bg-gradient-to-br ${feature.gradient} text-transparent bg-clip-text`}
                            >
                              99.9%
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Uptime
                            </div>
                          </div>
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold bg-gradient-to-br ${feature.gradient} text-transparent bg-clip-text`}
                            >
                              &lt;100ms
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Response
                            </div>
                          </div>
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold bg-gradient-to-br ${feature.gradient} text-transparent bg-clip-text`}
                            >
                              24/7
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Support
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full filter blur-2xl opacity-30`}
                    ></div>
                    <div
                      className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full filter blur-2xl opacity-20`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="observe opacity-0 relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
              Join thousands of companies already using NexusAI to automate
              workflows, gain insights, and drive growth.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center text-white">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 NexusAI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
