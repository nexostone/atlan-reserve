'use client';

/**
 * LocationSection Component
 * Sección de ubicación y conectividad de Atlan Reserve
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const connectivityData = {
  air: [
    { from: 'Punta Mita to Atlan Reserve', time: '24 min' },
    { from: 'Careyes to Atlan Reserve', time: '15 min' },
    { from: 'Mexico City to Atlan Reserve', time: '90 min' },
  ],
  earth: [
    { from: 'Puerto Vallarta to Atlan Reserve', time: '120 min' },
    { from: 'Careyes to Atlan Reserve', time: '60 min' },
    { from: 'Chalacatepec Airport', time: '30 min' },
  ],
};

export function LocationSection() {
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
            Location
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Eagle Mountain
          </h2>
          <p className="text-xl font-light text-navy mb-2">
            An Oasis within Costalegre Mexico
          </p>
          <div className="mx-auto h-px w-24 bg-champagne mb-8" />
          <p className="text-lg text-slate max-w-4xl mx-auto leading-relaxed">
            Set within a mystical mist forest in Costalegre—Mexico's top safe haven for prime real estate—offers a blend of natural
            beauty, serenity, and exclusivity. This rare destination combines sustainable development with pristine landscapes,
            reflecting a commitment to responsible land stewardship.
          </p>
        </motion.div>

        {/* Connectivity Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 mt-20"
        >
          {/* Air Connectivity */}
          <motion.div
            variants={fadeInUp}
            className="bg-pearl p-8 md:p-12"
          >
            <h3 className="font-serif text-3xl font-light text-navy mb-8 flex items-center gap-4">
              <span className="text-champagne">✈</span>
              Air
            </h3>
            <div className="space-y-6">
              {connectivityData.air.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-ash pb-4">
                  <span className="text-slate">{item.from}</span>
                  <span className="font-light text-navy text-lg">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Earth Connectivity */}
          <motion.div
            variants={fadeInUp}
            className="bg-pearl p-8 md:p-12"
          >
            <h3 className="font-serif text-3xl font-light text-navy mb-8 flex items-center gap-4">
              <span className="text-champagne">🚗</span>
              Earth
            </h3>
            <div className="space-y-6">
              {connectivityData.earth.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-ash pb-4">
                  <span className="text-slate">{item.from}</span>
                  <span className="font-light text-navy text-lg">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate leading-relaxed max-w-3xl mx-auto">
            Nestled in the heart of the highly desirable Mexican Pacific, between Riviera Nayarit and Costa Alegre, ATLAN stands as the
            ultimate oasis, offering unparalleled natural beauty and exclusivity - one of the most extraordinary destinations in all of Mexico.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
