'use client';

/**
 * ProjectsCTA Component
 * Call to action al final de la página de proyectos
 */

import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/Button';
import { fadeInUp } from '@/lib/animations/variants';

export function ProjectsCTA() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-luxury">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Begin Your Journey
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne mb-8" />
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            Each residence at Atlan Reserve represents a unique opportunity to become part of an exclusive community 
            dedicated to preserving nature's beauty while enjoying unparalleled luxury.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="large"
            >
              Schedule a Visit
            </Button>
            <Button
              href="/about"
              variant="secondary"
              size="large"
            >
              Learn More About Atlan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
