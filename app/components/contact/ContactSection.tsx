'use client';

/**
 * ContactSection Component - Atlan Reserve
 * Sección principal de contacto con diseño minimalista en dos columnas
 */

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { fadeInUp } from '@/lib/animations/variants';

export function ContactSection() {
  const t = useTranslations('home.contact');
  
  return (
    <section className="bg-pearl py-20 md:py-32">
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
            {t('label')}
          </p>
          <h2 className="font-serif text-4xl font-light text-navy md:text-5xl lg:text-6xl">
            {t('title')}
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-champagne" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <ContactInfo />
          </div>

          {/* Right Column - Contact Form */}
          <div className="border border-ash bg-white p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
