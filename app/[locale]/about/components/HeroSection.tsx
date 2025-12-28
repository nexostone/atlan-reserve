'use client';

/**
 * HeroSection Component - About Page
 * Sección hero con título principal y descripción de Atlan Reserve
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-navy py-32">
      <div className="container-luxury">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="mb-6 text-sm font-light uppercase tracking-widest text-champagne">
            About Atlan Reserve
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8">
            The Art of Nature Perfected by Design
          </h1>
          <div className="mx-auto h-px w-32 bg-champagne mb-12" />
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
            Located in the heart of the Mexican Pacific, Atlan Reserve spans over 3,000 hectares of protected
            wilderness — a private reserve where nature, privacy, and design exist in quiet harmony. Surrounded by
            lakes, rivers, mountains, and jungles, residents live immersed in untouched beauty, yet remain
            connected through world-class hospitality, wellness, and adventure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
