'use client';

/**
 * MuseumSection Component
 * Sección del museo A'AM y experiencias culturales
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export function MuseumSection() {
  return (
    <section className="bg-pearl py-24 md:py-32">
      <div className="container-luxury">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
              Art & Culture
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6">
              A'AM
            </h2>
            <p className="text-xl font-light text-navy mb-8">
              Atlan Art Museum
            </p>
            <div className="h-px w-20 bg-champagne mb-8" />
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                Home to the developer's private collection, A'AM the ATLAN Art Museum is an intimate expression of culture, legacy, and
                place. Thoughtfully integrated into the natural landscape, it invites a contemplative journey where art and nature coexist in quiet
                harmony.
              </p>
              <p>
                Showcasing an exceptional assemblage of rare Pre-Hispanic works and significant Contemporary pieces, the
                museum reflects a profound commitment to artistic excellence and cultural preservation.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Dining */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-ash p-8 md:p-12"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-light text-navy mb-6">
              Pauls
            </h3>
            <div className="h-px w-16 bg-champagne mb-6" />
            <p className="text-lg text-slate leading-relaxed">
              Italian, Mexican, and French high cuisine come together under the mastery of Chef Paul, whose approach elevates
              tradition through precision, creativity, and soul; uncompromising ingredient selection sourcing the finest ingredients
              locally and globally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
