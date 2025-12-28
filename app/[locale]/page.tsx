import { setRequestLocale, getTranslations } from 'next-intl/server';
import { VideoHero } from '@/app/components/hero/VideoHero';
import { ContactSection } from '@/app/components/contact';
import { ExperiencesCarousel } from '@/app/components/experiences';
import { experiences } from '@/data/experiences';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <main className="min-h-screen">
      <VideoHero
        videoUrl="https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Videos/Video-Provisional-Atlan-Reserve.mp4"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        primaryButton={{
          text: t('hero.primaryButton'),
          href: "/projects"
        }}
        secondaryButton={{
          text: t('hero.secondaryButton'),
          href: "/contact"
        }}
        overlayOpacity={0.9}
      />

      {/* Aquí irán más secciones */}
      <section className="container-luxury py-24 min-h-dvh flex flex-col items-center justify-start gap-4 bg-pearl">
        <h2 className="font-serif text-navy text-4xl md:text-6xl text-center mb-6 ">
          {t('welcome.title')}
        </h2>
        <p className="text-center mb-4 text-lg text-gray-600 max-w-3xl">
          {t('welcome.description')}
        </p>
        <Image alt='' src={"https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/panoramic-view-atlan-reserve.png"} width={1000} height={600}/>
      </section>

      {/* Experiences Carousel */}
      <ExperiencesCarousel experiences={experiences} />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
