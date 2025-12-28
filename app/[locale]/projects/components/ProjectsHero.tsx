'use client';

/**
 * ProjectsHero Component
 * Hero section para la página de proyectos
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';
import Image from 'next/image';

export function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-navy py-32 md:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full select-none">
        <Image
          src="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/villa-palo-alto.png"
          alt="Luxury Residence"
          fill
          className="object-cover opacity-60"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center "
        >
          <p className="mb-6 text-sm font-light uppercase tracking-widest text-champagne">
            Our Developments
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8">
            Curated Residences
          </h1>
          <div className="mx-auto h-px w-32 bg-champagne mb-12" />
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
            A collection of distinctive estates where architectural excellence meets natural beauty.
            Each residence is carefully designed to honor the land while providing unparalleled luxury and privacy.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent z-10" />
    </section>
  );
}
