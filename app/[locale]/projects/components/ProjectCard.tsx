'use client';

/**
 * ProjectCard Component
 * Tarjeta rectangular con hover elegante para cada proyecto
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { fadeInUp } from '@/lib/animations/variants';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    available: 'bg-green-600',
    'coming-soon': 'bg-champagne',
    'sold-out': 'bg-slate',
  };

  const statusText = {
    available: 'Available',
    'coming-soon': 'Coming Soon',
    'sold-out': 'Sold Out',
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden bg-white border border-ash hover:border-champagne transition-all duration-500"
    >
      <Link href={`/projects/${project.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-pearl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`${statusColors[project.status]} px-4 py-2 text-xs font-light uppercase tracking-wider text-white backdrop-blur-sm`}>
              {statusText[project.status]}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-champagne/90 px-4 py-2 text-xs font-light uppercase tracking-wider text-white backdrop-blur-sm">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Location */}
          <p className="mb-2 text-xs font-light uppercase tracking-widest text-champagne">
            {project.location}
          </p>

          {/* Title */}
          <h3 className="font-serif text-3xl md:text-4xl font-light text-navy mb-2 group-hover:text-champagne transition-colors duration-300">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-slate mb-4">
            {project.subtitle}
          </p>

          {/* Divider */}
          <div className="h-px w-16 bg-ash mb-4 group-hover:w-24 group-hover:bg-champagne transition-all duration-500" />

          {/* Description */}
          <p className="text-slate leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Size Info */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-ash">
            <div>
              <p className="text-xs uppercase tracking-wide text-champagne mb-1">
                Bedrooms
              </p>
              <p className="text-sm font-light text-navy">
                {project.size.bedrooms}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-champagne mb-1">
                Construction
              </p>
              <p className="text-sm font-light text-navy">
                {project.size.construction}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-champagne mb-1">
                Land Size
              </p>
              <p className="text-sm font-light text-navy">
                {project.size.landSize}
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="font-serif text-2xl font-light text-navy">
              {project.price}
            </p>
            
            {/* Arrow Icon */}
            <div className="flex h-10 w-10 items-center justify-center border border-navy text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
