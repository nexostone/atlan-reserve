import { setRequestLocale } from 'next-intl/server';
import {
  HeroSection,
  VisionSection,
  LocationSection,
  AmenitiesSection,
  MuseumSection,
  WellnessSection,
  PlaygroundsSection,
  PrinciplesSection,
  TeamSection,
} from './components';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <LocationSection />
      <AmenitiesSection />
      <MuseumSection />
      <WellnessSection />
      <PlaygroundsSection />
      <PrinciplesSection />
      <TeamSection />
    </main>
  );
}
