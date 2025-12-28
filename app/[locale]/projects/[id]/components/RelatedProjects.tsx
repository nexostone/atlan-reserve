'use client';

/**
 * RelatedProjects Component
 * Muestra proyectos relacionados al final de la página de detalle
 */

import { motion } from 'framer-motion';
import { ProjectCard } from '../../components/ProjectCard';
import { Project } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

interface RelatedProjectsProps {
  currentProjectId: string;
  projects: Project[];
  maxItems?: number;
}

export function RelatedProjects({ currentProjectId, projects, maxItems = 3 }: RelatedProjectsProps) {
  // Filtrar proyectos relacionados (excluyendo el actual)
  const relatedProjects = projects
    .filter((p) => p.id !== currentProjectId)
    .slice(0, maxItems);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="bg-pearl py-24 md:py-32">
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
            Explore More
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Other Developments
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {relatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
