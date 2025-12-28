'use client';

/**
 * VisionSection Component
 * Sección de visión y misión de Atlan Reserve
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export function VisionSection() {
  return (
    <section className="bg-pearl py-24 md:py-32">
      <div className="container-luxury">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Column - Quote */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-2 border-champagne pl-8"
          >
            <blockquote className="font-serif text-3xl md:text-4xl font-light text-navy leading-relaxed">
              "A private club community for vision questers shaped by the spirit of land preservation and temple living."
            </blockquote>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6">
              Custodians of the Rare
            </h2>
            <div className="h-px w-20 bg-champagne mb-8" />
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                ATLAN is an invitation-only private club — a RESERVE where serenity, stewardship, and legacy
                converge. More than a destination, it is a covenant between people and place, uniting a discreet
                community devoted to preserving and regenerating extraordinary landscapes.
              </p>
              <p>
                ATLAN is conceived to honor and preserve its natural surroundings — a rare harmony of architectural refinement
                and ecological integrity. Defined by space, privacy, and reverence for the land. ATLAN's presence spans
                landscapes of profound beauty — chosen not to be transformed, but to transform those who belong.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
