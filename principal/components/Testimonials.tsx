'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    company: 'TechCorp',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'NexusAI has revolutionized how we handle automation. The time savings are incredible, and the AI capabilities continue to impress us every day.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at InnovateLab',
    company: 'InnovateLab',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    content: 'The best AI automation platform we\'ve used. It\'s intuitive, powerful, and the support team is always there when we need them.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director at ScaleUp',
    company: 'ScaleUp',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    content: 'We\'ve automated 80% of our repetitive tasks with NexusAI. It\'s been a game-changer for our team\'s productivity and morale.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CEO at FutureFlow',
    company: 'FutureFlow',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    content: 'The ROI has been phenomenal. We\'ve reduced operational costs by 40% while improving service quality. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Engineering at DataDrive',
    company: 'DataDrive',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    content: 'NexusAI\'s integration capabilities are outstanding. We connected all our tools in days, not months. The platform just works.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Founder at StartupHub',
    company: 'StartupHub',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    content: 'As a startup, we needed enterprise-grade automation without the complexity. NexusAI delivered exactly that.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="relative h-full p-8 rounded-2xl glass border border-white/10 hover:border-primary-500/50 transition-all duration-300">
        {/* Quote Icon */}
        <Quote className="absolute top-6 right-6 h-12 w-12 text-primary-500/20" />

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-300 mb-6 leading-relaxed italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/20 via-transparent to-primary-950/20" />

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
            Loved by Teams
            <span className="gradient-text"> Around the World</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about transforming their workflows with NexusAI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Tesla'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
