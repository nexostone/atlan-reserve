import { setRequestLocale } from 'next-intl/server';
import { ExperiencesCarousel } from '@/app/components/experiences';
import { experiences } from '@/data/experiences';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ExperiencesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
              Experiencias Exclusivas
            </p>
            <h1 className="font-serif text-5xl font-light tracking-wide text-white md:text-6xl lg:text-7xl">
              Vive el Lujo
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-champagne" />
            <p className="mt-6 max-w-2xl text-lg font-light text-white/80 md:text-xl">
              Descubre todas las amenidades, servicios y experiencias 
              que hacen de Palo Alto un desarrollo excepcional
            </p>
          </div>
        </div>
      </section>

      {/* All Experiences Grid */}
      <section className="bg-pearl py-20 md:py-32">
        <div className="container-luxury">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {experiences.map((experience, index) => {
              const ExperienceCard = require('@/app/components/experiences/ExperienceCard').ExperienceCard;
              return (
                <div key={experience.id}>
                  <ExperienceCard experience={experience} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-20 md:py-32">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
            ¿Listo para Experimentar el Paraíso?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/80">
            Agenda una visita privada y descubre personalmente todo lo que 
            Palo Alto tiene para ofrecer
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 text-base font-light tracking-wide text-navy transition-all hover:bg-transparent hover:text-white"
            >
              Agendar Visita
            </a>
            <a
              href="/development"
              className="inline-flex items-center justify-center border border-white bg-transparent px-8 py-4 text-base font-light tracking-wide text-white transition-all hover:bg-white hover:text-navy"
            >
              Ver Desarrollo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
