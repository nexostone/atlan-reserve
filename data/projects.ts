/**
 * Projects Data - Atlan Reserve
 * Información de todos los proyectos de desarrollo
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  features: string[];
  size: {
    bedrooms: string;
    construction: string;
    landSize: string;
  };
  price: string;
  image: string;
  status: 'available' | 'coming-soon' | 'sold-out';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'palo-alto',
    title: 'Pa\'Lo Alto',
    subtitle: 'Master Plan Development',
    location: 'Eagle Mountain, Costalegre',
    description: 'The crown jewel of Atlan Reserve. An exclusive collection of residences set within a mystical mist forest, offering unparalleled privacy and connection with nature. Each estate is a masterpiece of architectural refinement and ecological harmony.',
    features: [
      'Mountain Mist Forest Climate',
      'Private Lake Access',
      'Exclusive Art Museum',
      'Longevity Spa & Wellness Center',
      'Farm-to-Table Dining',
      'Heliport & Hydroplane Access',
    ],
    size: {
      bedrooms: '4-12',
      construction: '1,000 - 4,400 m²',
      landSize: '0.4 - 4.4 Ha',
    },
    price: 'From $8M USD',
    image: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/palo-alto-master-plan.jpg',
    status: 'available',
    featured: true,
  },
  {
    id: 'lake-estates',
    title: 'Lake Estates',
    subtitle: 'Waterfront Residences',
    location: 'Atlan Reserve',
    description: 'Exceptional waterfront estates offering direct access to the pristine lake. These residences blend seamlessly with the natural landscape, providing tranquil living spaces with breathtaking water views.',
    features: [
      'Direct Lake Access',
      'Private Docks',
      'Water Sports Club',
      'Sunset Terraces',
      'Native Gardens',
      'Fishing Club Membership',
    ],
    size: {
      bedrooms: '4-6',
      construction: '1,000 - 1,800 m²',
      landSize: '0.4 - 0.8 Ha',
    },
    price: 'From $8M USD',
    image: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/lake-estates.jpg',
    status: 'available',
  },
  {
    id: 'sky-ranch',
    title: 'Sky Ranch',
    subtitle: 'Mountain Ridge Estates',
    location: 'Atlan Reserve',
    description: 'Perched on the highest points of the reserve, these estates offer panoramic views of mountains, valleys, and the lake below. A sanctuary in the clouds for those seeking elevation and perspective.',
    features: [
      'Panoramic Mountain Views',
      'Observatory Access',
      'Hiking Trail Network',
      'Private Helipads',
      'Meditation Spaces',
      'Ultra-Private Setting',
    ],
    size: {
      bedrooms: '6',
      construction: '1,800 m²',
      landSize: '0.8 Ha',
    },
    price: '$28M USD',
    image: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/sky-ranch.jpg',
    status: 'available',
  },
  {
    id: 'river-estates',
    title: 'River Estates',
    subtitle: 'Riverside Sanctuaries',
    location: 'Atlan Reserve',
    description: 'Nestled along the crystal-clear river that flows through the reserve, these estates offer a unique connection to flowing water and riparian ecosystems. Perfect for nature enthusiasts seeking serenity.',
    features: [
      'Riverside Location',
      'Natural Swimming Pools',
      'Fly Fishing Access',
      'Bird Watching',
      'Meditation Gardens',
      'Organic Farm Proximity',
    ],
    size: {
      bedrooms: '4-6',
      construction: '1,000 - 1,500 m²',
      landSize: '0.4 - 0.6 Ha',
    },
    price: 'From $8M USD',
    image: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/river-estates.jpg',
    status: 'available',
  },
  {
    id: 'haciendas',
    title: 'Haciendas',
    subtitle: 'Grand Estate Living',
    location: 'Atlan Reserve',
    description: 'The pinnacle of luxury living at Atlan Reserve. These expansive haciendas offer unparalleled space, privacy, and amenities for multigenerational families and discerning collectors.',
    features: [
      'Expansive Grounds',
      'Private Staff Quarters',
      'Wine Cellars',
      'Art Galleries',
      'Guest Villas',
      'Equestrian Facilities',
    ],
    size: {
      bedrooms: '8-12',
      construction: '2,400 - 4,400 m²',
      landSize: '2.2 - 4.4 Ha',
    },
    price: 'From $40M USD',
    image: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/haciendas.jpg',
    status: 'available',
  },
  {
    id: 'lake-ranch',
    title: 'Lake Ranch',
    subtitle: 'Ultra-Exclusive Compound',
    location: 'Atlan Reserve',
    description: 'The most exclusive offering at Atlan Reserve. A private compound offering complete privacy and luxury on an unprecedented scale. Limited availability.',
    features: [
      'Private Compound',
      'Multiple Structures',
      'Complete Privacy',
      'Dedicated Staff',
      'Custom Design',
      'Unlimited Potential',
    ],
    size: {
      bedrooms: '8-12',
      construction: 'Custom',
      landSize: '5+ Ha',
    },
    price: 'Price Upon Request',
    image: 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Images/lake-ranch.jpg',
    status: 'coming-soon',
  },
];
