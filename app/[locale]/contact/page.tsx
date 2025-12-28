import { setRequestLocale } from 'next-intl/server';
import { ContactSection, ContactMap } from '@/app/components/contact';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-5xl font-light tracking-wide text-white md:text-6xl lg:text-7xl">
              Contacto
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-champagne" />
            <p className="mt-6 text-lg font-light text-white/80 md:text-xl">
              Tu refugio en el paraíso te espera
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <ContactMap />
    </main>
  );
}
