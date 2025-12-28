import { setRequestLocale } from 'next-intl/server';
import { VideoHero } from '@/app/components/hero/VideoHero';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <VideoHero
        videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
        title="Palo Alto"
        subtitle="Punta de Mita"
        primaryButton={{
          text: "Explorar",
          href: "/experiences"
        }}
        secondaryButton={{
          text: "Solicitar Información",
          href: "/reservations"
        }}
        overlayOpacity={0.9}
      />

      {/* Aquí irán más secciones */}
      <section className="container-luxury py-24 min-h-dvh flex flex-col items-center justify-center gap-4">
        <h2 className="font-serif text-4xl md:text-6xl text-center mb-8 ">
          Welcome to Paradise
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl">
          Experience unparalleled luxury in the heart of nature.
          Atlan Reserve offers exclusive experiences tailored to your desires.
        </p>
      </section>
    </main>
  );
}
