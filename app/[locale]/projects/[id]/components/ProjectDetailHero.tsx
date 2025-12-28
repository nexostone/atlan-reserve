'use client';

/**
 * ProjectDetailHero Component
 * Hero para página de detalle de proyecto
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { fadeInUp, fadeIn } from '@/lib/animations/variants';

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const statusColors = {
    available: 'bg-green-600',
    'coming-soon': 'bg-champagne',
    'sold-out': 'bg-slate',
  };

  const statusText = {
    available: 'Available Now',
    'coming-soon': 'Coming Soon',
    'sold-out': 'Sold Out',
  };

  return (
    <section className="relative min-h-screen flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury pb-16 md:pb-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className={`${statusColors[project.status]} px-6 py-3 text-sm font-light uppercase tracking-wider text-white inline-block`}>
              {statusText[project.status]}
            </span>
          </motion.div>

          {/* Location */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-light uppercase tracking-widest text-champagne"
          >
            {project.location}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4"
          >
            {project.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            {project.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="h-px w-32 bg-champagne mb-8"
          />

          {/* Price */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="font-serif text-3xl md:text-4xl font-light text-white"
          >
            {project.price}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1, 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/70">Scroll</span>
          <div className="h-8 w-px bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
