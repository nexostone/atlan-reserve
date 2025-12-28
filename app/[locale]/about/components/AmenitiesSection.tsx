'use client';

/**
 * AmenitiesSection Component
 * Sección de amenidades y servicios de Atlan Reserve
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const amenities = [
  'Mountain Mist forest unique climate in Region',
  'Lake and rivers',
  'Private members fishing club',
  'Private hydroplane landing dock and heliport islands',
  '33+ Miles of hiking and biking trails',
  'Lake and Mountain Club Houses',
  'Learning & Innovation Center',
  'Pa\'am Private Art Museum',
  'James Turell Meditation Center',
  'Atl Spa and Longevity Center',
  'Temazcal',
  'Yoga Rooms',
  'Sports Center (Tennis, Padel, Esgrima)',
  'Farm-to-table restaurants Flora Farms',
  'Aquatic Club',
  'Electric Boats & Sailing',
  'Organic farm',
  'Cigar club',
  'Beach Club',
];

export function AmenitiesSection() {
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
            Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Life at Atlan Reserve
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne mb-8" />
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Life at ATLAN blends nature and luxury, offering top-tier amenities that let you dive into your favorite activities. Each
            day brings new moments to explore, unwind, and enjoy the best of our surroundings.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start gap-3 p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <span className="text-champagne mt-1 text-sm">◦</span>
              <span className="text-white/90 font-light leading-relaxed">{amenity}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
