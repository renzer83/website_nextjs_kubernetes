'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Shield,
  Workflow,
  BarChart3,
  Globe,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Leverage state-of-the-art machine learning models trained on diverse datasets for superior accuracy and performance.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process millions of requests per second with our optimized infrastructure and intelligent caching mechanisms.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and advanced security protocols to keep your data safe.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Design complex automation workflows with our intuitive drag-and-drop interface and pre-built templates.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Gain actionable insights with comprehensive dashboards and customizable reporting tools.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Integration',
    description: 'Connect seamlessly with 1000+ apps and services through our extensive API and integration library.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl glass border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
        {/* Gradient Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
          <Icon className="h-6 w-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
        <p className="text-gray-400 leading-relaxed">{feature.description}</p>

        {/* Arrow Icon */}
        <div className="mt-6 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="relative py-24 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-transparent to-secondary-950/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for
            <span className="gradient-text"> Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate, optimize, and scale your business operations with AI.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
