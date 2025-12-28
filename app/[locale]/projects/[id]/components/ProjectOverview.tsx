'use client';

/**
 * ProjectOverview Component
 * Sección de descripción general y especificaciones
 */

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="bg-pearl py-24 md:py-32">
      <div className="container-luxury">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
              Overview
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-8">
              About This Development
            </h2>
            <div className="h-px w-20 bg-champagne mb-8" />
            <p className="text-lg text-slate leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Right Column - Specifications */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white border border-ash p-8 md:p-10">
              <h3 className="font-serif text-2xl font-light text-navy mb-8">
                Specifications
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start pb-4 border-b border-ash">
                  <span className="text-sm uppercase tracking-wide text-champagne">
                    Bedrooms
                  </span>
                  <span className="font-light text-navy text-lg">
                    {project.size.bedrooms}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-ash">
                  <span className="text-sm uppercase tracking-wide text-champagne">
                    Construction Size
                  </span>
                  <span className="font-light text-navy text-lg">
                    {project.size.construction}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-ash">
                  <span className="text-sm uppercase tracking-wide text-champagne">
                    Land Size
                  </span>
                  <span className="font-light text-navy text-lg">
                    {project.size.landSize}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-ash">
                  <span className="text-sm uppercase tracking-wide text-champagne">
                    Location
                  </span>
                  <span className="font-light text-navy text-lg text-right">
                    {project.location}
                  </span>
                </div>

                <div className="flex justify-between items-start pt-2">
                  <span className="text-sm uppercase tracking-wide text-champagne">
                    Price
                  </span>
                  <span className="font-serif text-navy text-2xl">
                    {project.price}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
