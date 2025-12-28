'use client';

/**
 * ExperienceCard Component - Atlan Reserve
 * Tarjeta cuadrada individual para experiencias y perks
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp } from '@/lib/animations/variants';

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  slug: string;
  category: 'amenity' | 'experience' | 'perk' | 'service';
}

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-square w-full overflow-hidden bg-navy"
    >
      <Link href={`/experiences/${experience.slug}`} className="block h-full w-full">
        {/* Image */}
        <div className="relative h-full w-full">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="mb-3"
          >
            <span className="inline-block border border-white/30 bg-white/10 px-3 py-1 text-xs font-light uppercase tracking-widest text-white backdrop-blur-sm">
              {experience.category === 'amenity' && 'Amenidad'}
              {experience.category === 'experience' && 'Experiencia'}
              {experience.category === 'perk' && 'Beneficio'}
              {experience.category === 'service' && 'Servicio'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="mb-2 font-serif text-2xl font-light text-white md:text-3xl"
          >
            {experience.title}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="mb-4 text-sm font-light text-white/80"
          >
            {experience.subtitle}
          </motion.p>

          {/* Arrow Icon - appears on hover */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 0, x: -10 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          >
            <span className="text-sm font-light uppercase tracking-wide">
              Descubrir
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Link>
    </motion.div>
  );
}
