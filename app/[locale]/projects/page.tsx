'use client';

import { useState } from 'react';
import { ProjectsHero, ProjectsGrid, ProjectsFilter, ProjectsCTA } from './components';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filtrar proyectos según el filtro activo
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.status === activeFilter);

  return (
    <main className="min-h-screen">
      <ProjectsHero />
      <ProjectsFilter 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      <ProjectsGrid projects={filteredProjects} />
      <ProjectsCTA />
    </main>
  );
}
