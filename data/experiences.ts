/**
 * Experiences Data - Atlan Reserve
 * Datos de experiencias, amenidades y perks del desarrollo
 * 
 * TODO: Reemplazar URLs de imágenes con las reales del proyecto
 * TODO: Mover a base de datos (Supabase) para gestión dinámica
 */

import { Experience } from '@/app/components/experiences';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Beach Club Privado',
    subtitle: 'Acceso exclusivo a la playa',
    description: 'Disfruta de nuestro beach club privado con servicio de conserjería, camastros de lujo y gastronomía de clase mundial frente al océano Pacífico.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    slug: 'beach-club-privado',
    category: 'amenity',
  },
  {
    id: '2',
    title: 'Spa & Wellness',
    subtitle: 'Santuario de bienestar',
    description: 'Centro de spa con tratamientos holísticos, yoga al amanecer, meditación guiada y terapias rejuvenecedoras inspiradas en tradiciones ancestrales.',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    slug: 'spa-wellness',
    category: 'amenity',
  },
  {
    id: '3',
    title: 'Golf Championship',
    subtitle: 'Campos diseñados por Jack Nicklaus',
    description: 'Acceso preferencial a campos de golf championship en Punta Mita, con vistas espectaculares al océano y servicio de caddie profesional.',
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
    slug: 'golf-championship',
    category: 'experience',
  },
  {
    id: '4',
    title: 'Gastronomía Gourmet',
    subtitle: 'Restaurantes de autor',
    description: 'Tres restaurantes exclusivos con chefs reconocidos internacionalmente, cocina de la granja a la mesa y cenas privadas bajo las estrellas.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    slug: 'gastronomia-gourmet',
    category: 'amenity',
  },
  {
    id: '5',
    title: 'Expediciones Marinas',
    subtitle: 'Aventuras en el Pacífico',
    description: 'Excursiones privadas de pesca deportiva, avistamiento de ballenas, snorkel en las Islas Marietas y paseos en yate al atardecer.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    slug: 'expediciones-marinas',
    category: 'experience',
  },
  {
    id: '6',
    title: 'Concierge 24/7',
    subtitle: 'Servicio personalizado',
    description: 'Equipo de concierge disponible las 24 horas para organizar experiencias personalizadas, reservaciones y atender cualquier necesidad.',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    slug: 'concierge-247',
    category: 'service',
  },
  {
    id: '7',
    title: 'Fitness Center',
    subtitle: 'Entrenamiento de élite',
    description: 'Gimnasio equipado con tecnología de punta, entrenadores personales certificados y clases grupales de alto rendimiento.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    slug: 'fitness-center',
    category: 'amenity',
  },
  {
    id: '8',
    title: 'Kids Club',
    subtitle: 'Diversión para los más pequeños',
    description: 'Club infantil con programas educativos, actividades recreativas supervisadas y espacios diseñados especialmente para niños.',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    slug: 'kids-club',
    category: 'amenity',
  },
  {
    id: '9',
    title: 'Wine Cellar',
    subtitle: 'Cava de vinos premium',
    description: 'Cava privada con selección curada de vinos internacionales, catas exclusivas y almacenamiento personalizado para residentes.',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    slug: 'wine-cellar',
    category: 'perk',
  },
  {
    id: '10',
    title: 'Seguridad Premium',
    subtitle: 'Tranquilidad absoluta',
    description: 'Sistema de seguridad 24/7 con vigilancia perimetral, acceso controlado y tecnología de última generación para tu paz mental.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    slug: 'seguridad-premium',
    category: 'service',
  },
];

// Función helper para obtener experiencias por categoría
export const getExperiencesByCategory = (category: Experience['category']) => {
  return experiences.filter((exp) => exp.category === category);
};

// Función helper para obtener una experiencia por slug
export const getExperienceBySlug = (slug: string) => {
  return experiences.find((exp) => exp.slug === slug);
};
