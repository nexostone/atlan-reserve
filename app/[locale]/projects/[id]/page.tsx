import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/data/projects';
import {
  ProjectDetailHero,
  ProjectOverview,
  ProjectFeatures,
  ProjectInquiry,
  RelatedProjects,
} from './components';

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  // Buscar el proyecto por ID
  const project = projects.find((p) => p.id === id);

  // Si no existe el proyecto, mostrar 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectDetailHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectInquiry project={project} />
      <RelatedProjects currentProjectId={id} projects={projects} />
    </main>
  );
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ${project.subtitle} | Atlan Reserve`,
    description: project.description,
  };
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
