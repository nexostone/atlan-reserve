'use client';

/**
 * ProjectsFilter Component
 * Filtros opcionales para proyectos (status, precio, etc.)
 */

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

interface FilterOption {
  label: string;
  value: string;
}

const statusFilters: FilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Available', value: 'available' },
  { label: 'Coming Soon', value: 'coming-soon' },
];

interface ProjectsFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectsFilter({ activeFilter, onFilterChange }: ProjectsFilterProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white border-y border-ash py-6"
    >
      <div className="container-luxury">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-sm font-light uppercase tracking-wide text-slate">
            Filter by:
          </span>
          
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-6 py-2 text-sm font-light tracking-wide transition-all border ${
                activeFilter === filter.value
                  ? 'bg-navy text-white border-navy'
                  : 'bg-transparent text-navy border-ash hover:border-navy'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
