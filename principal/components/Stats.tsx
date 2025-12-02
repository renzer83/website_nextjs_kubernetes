'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'Trusted by teams worldwide',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    value: '50M+',
    label: 'Automations Run',
    description: 'Tasks completed successfully',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    value: '2.5M',
    label: 'Hours Saved',
    description: 'Time reclaimed for teams',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Success Rate',
    description: 'Reliable automation delivery',
    color: 'from-green-500 to-emerald-500',
  },
];

const Stats = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-primary-950/10 to-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by the Best,
            <span className="gradient-text"> Built for Scale</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies automating their workflows with NexusAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-2xl glass border border-white/10 hover:border-primary-500/50 transition-all duration-300 text-center">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
