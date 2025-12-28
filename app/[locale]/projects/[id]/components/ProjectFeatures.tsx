'use client';

/**
 * ProjectFeatures Component
 * Lista de características y amenidades del proyecto
 */

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

interface ProjectFeaturesProps {
  project: Project;
}

export function ProjectFeatures({ project }: ProjectFeaturesProps) {
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
            Features
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Exclusive Amenities
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 border border-ash bg-pearl hover:bg-white hover:border-champagne transition-all duration-300"
            >
              <span className="text-champagne mt-1 text-lg">✦</span>
              <span className="text-navy font-light leading-relaxed">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
