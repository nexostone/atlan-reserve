'use client';

/**
 * PrinciplesSection Component
 * Principios guía y compromisos de Atlan Reserve
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const principles = [
  {
    title: 'Guiding Principles',
    description: 'Our work is anchored in a set of guiding principles that shape every decision we make. We pursue responsible growth grounded in disciplined execution, long-term vision, and a deep respect for the communities we serve. We emphasize sustainability, architectural integrity, and operational excellence, ensuring that every asset we develop or support enhances its surroundings and delivers shared prosperity.',
  },
  {
    title: 'Investing Commitment',
    description: 'We are committed to delivering long-term value through strategic investments that strengthen essential community infrastructure and elevate quality of life. Our approach prioritizes projects with measurable social impact—housing, education, health, and wellbeing—ensuring that each investment contributes to resilient communities and sustainable economic growth.',
  },
  {
    title: 'Environmental Stewards',
    description: 'As committed environmental stewards, we recognize the responsibility that comes with managing and enhancing irreplaceable natural landscapes. Our mandate is to safeguard the land, preserve its ecological integrity, and ensure that the Reserve remains a thriving, resilient environment for generations to come. We adopt conservation-driven planning, low-impact development practices, and long-term land management strategies.',
  },
];

export function PrinciplesSection() {
  return (
    <section className="bg-navy py-24 md:py-32">
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
            Our Foundation
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Principles & Commitment
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne" />
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-white/10 p-8 md:p-10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-6">
                {principle.title}
              </h3>
              <div className="h-px w-16 bg-champagne mb-6" />
              <p className="text-white/80 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
