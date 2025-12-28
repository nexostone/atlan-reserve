'use client';

/**
 * ProjectInquiry Component
 * Sección de contacto específica del proyecto
 */

import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/Button';
import { fadeInUp } from '@/lib/animations/variants';
import { Project } from '@/data/projects';

interface ProjectInquiryProps {
  project: Project;
}

export function ProjectInquiry({ project }: ProjectInquiryProps) {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
              Inquire
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
              Schedule Your Private Tour
            </h2>
            <div className="mx-auto h-px w-24 bg-champagne mb-8" />
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              Experience {project.title} firsthand. Our team will guide you through this exceptional property 
              and answer any questions about ownership at Atlan Reserve.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button
                href={`/contact?project=${project.id}`}
                variant="primary"
                size="large"
              >
                Request Information
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="large"
              >
                Schedule Visit
              </Button>
            </div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-12 border-t border-white/10"
            >
              <div className="grid gap-8 md:grid-cols-3 text-center">
                <div>
                  <p className="text-xs uppercase tracking-widest text-champagne mb-2">
                    Phone
                  </p>
                  <a href="tel:+1234567890" className="text-white/90 hover:text-champagne transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-champagne mb-2">
                    Email
                  </p>
                  <a href="mailto:sales@atlanreserve.com" className="text-white/90 hover:text-champagne transition-colors">
                    sales@atlanreserve.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-champagne mb-2">
                    Location
                  </p>
                  <p className="text-white/90">
                    Eagle Mountain, Costalegre
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
