import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { experiences, getExperienceBySlug } from '@/data/experiences';
import { Button } from '@/app/components/ui/Button';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Generate static params for all experiences
export async function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export default async function ExperiencePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  // Get category label
  const categoryLabel = {
    amenity: 'Amenidad',
    experience: 'Experiencia',
    perk: 'Beneficio',
    service: 'Servicio',
  }[experience.category];

  // Get related experiences (same category, excluding current)
  const relatedExperiences = experiences
    .filter((exp) => exp.category === experience.category && exp.id !== experience.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-end">
          <div className="container-luxury pb-16 md:pb-20">
            <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
              {categoryLabel}
            </p>
            <h1 className="font-serif text-5xl font-light tracking-wide text-white md:text-6xl lg:text-7xl">
              {experience.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-light text-white/90 md:text-2xl">
              {experience.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-luxury">
          <div className="mx-auto max-w-4xl">
            {/* Description */}
            <div className="mb-16">
              <p className="text-2xl font-light leading-relaxed text-navy">
                {experience.description}
              </p>
            </div>

            {/* Detailed Information - Placeholder */}
            <div className="space-y-12">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-light text-navy md:text-4xl">
                  Características
                </h2>
                <div className="h-px w-20 bg-champagne" />
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="border border-ash p-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center border border-ash bg-pearl text-navy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-light text-navy">
                      Acceso Exclusivo
                    </h3>
                    <p className="text-sm font-light text-steel">
                      Disponible únicamente para residentes y propietarios de Palo Alto
                    </p>
                  </div>

                  <div className="border border-ash p-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center border border-ash bg-pearl text-navy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-light text-navy">
                      Disponibilidad
                    </h3>
                    <p className="text-sm font-light text-steel">
                      Servicio disponible todo el año con horarios flexibles
                    </p>
                  </div>

                  <div className="border border-ash p-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center border border-ash bg-pearl text-navy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-light text-navy">
                      Servicio Premium
                    </h3>
                    <p className="text-sm font-light text-steel">
                      Personal capacitado para brindar la mejor experiencia
                    </p>
                  </div>

                  <div className="border border-ash p-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center border border-ash bg-pearl text-navy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-light text-navy">
                      Calidad Garantizada
                    </h3>
                    <p className="text-sm font-light text-steel">
                      Estándares internacionales de servicio y excelencia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 border border-ash bg-pearl p-8 text-center md:p-12">
              <h3 className="mb-4 font-serif text-3xl font-light text-navy">
                ¿Interesado en esta experiencia?
              </h3>
              <p className="mb-8 text-lg font-light text-steel">
                Contáctanos para obtener más información y agendar una visita
              </p>
              <Button href="/contact" variant="primary" size="large">
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      {relatedExperiences.length > 0 && (
        <section className="bg-pearl py-20 md:py-32">
          <div className="container-luxury">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
                Descubre Más
              </p>
              <h2 className="font-serif text-4xl font-light text-navy md:text-5xl">
                Experiencias Relacionadas
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-champagne" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedExperiences.map((relatedExp, index) => {
                const ExperienceCard = require('@/app/components/experiences/ExperienceCard').ExperienceCard;
                return (
                  <div key={relatedExp.id}>
                    <ExperienceCard experience={relatedExp} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
