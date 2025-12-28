'use client';

/**
 * ProjectsGrid Component
 * Grid de proyectos con tarjetas rectangulares
 */

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/data/projects';
import { staggerContainer } from '@/lib/animations/variants';

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  // Separar el proyecto destacado del resto
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="bg-pearl py-24 md:py-32">
      <div className="container-luxury">
        {/* Featured Project - Full Width */}
        {featuredProject && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="mb-12 text-center">
              <p className="text-sm font-light uppercase tracking-widest text-champagne">
                Featured Development
              </p>
            </div>
            <ProjectCard project={featuredProject} />
          </motion.div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <div className="mb-12 text-center">
              <div className="h-px w-full bg-ash mb-12" />
              <p className="text-sm font-light uppercase tracking-widest text-champagne">
                Available Residences
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
