import { setRequestLocale } from 'next-intl/server';
import { ContactSection, ContactMap } from '@/app/components/contact';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full select-none">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Atlan Reserve"
            fill
            className="object-cover opacity-60"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy" />
        </div>

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
