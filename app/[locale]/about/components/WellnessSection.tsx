'use client';

/**
 * WellnessSection Component
 * Sección de wellness, spa y deportes
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const wellnessFeatures = [
  {
    title: 'Atl Longevity Spa',
    description: 'Rooted in water, the Spa at Atlan Reserve is a sanctuary of renewal. Through hydrotherapy circuits, mineral pools, infrared sauna, and hyperbaric chamber, each ritual restores balance and serenity—guided by the elemental flow of water.',
    icon: '💧',
  },
  {
    title: 'Knowledge Archive & Learning Center',
    description: 'A haven for reflection and exchange, the Knowledge Center gathers minds from diverse disciplines to explore ecology, design, and philosophy. Here, ideas flow like water—shared, renewing, and ever-evolving.',
    icon: '📚',
  },
  {
    title: 'Sports Center',
    description: 'Surrounded by nature, the Sports Center at Atlan Reserve embodies movement and vitality. Tennis, padel, and basketball unfold within refined architecture that blends effortlessly with the landscape—spaces crafted for focus, energy, and connection.',
    icon: '🎾',
  },
];

export function WellnessSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
            Wellness
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Body Mind Soul
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-3"
        >
          {wellnessFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-navy mb-4">
                {feature.title}
              </h3>
              <div className="h-px w-12 bg-champagne mx-auto mb-6" />
              <p className="text-slate leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
