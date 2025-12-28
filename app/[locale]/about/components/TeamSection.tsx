'use client';

/**
 * TeamSection Component
 * Sección del equipo de desarrollo, arquitectos y diseñadores
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const teamMembers = [
  {
    name: 'Taller G',
    role: 'Master Plan Development',
    description: 'A leading architectural practice with 30 years of experience across Latin America, recognized for landmark projects such as El Bosque and Chapultepec Uno in Mexico City and for designing top hospitality assets throughout the Mexican Pacific.',
    url: 'https://taller-g.com/',
  },
  {
    name: 'CFDV - Carlos Fernández del Valle',
    role: 'Architecture',
    description: 'Brings a distinguished architectural legacy defined by disciplined precision, balanced proportion, and material purity. His vision for Atlan Reserve aligns sophistication with natural serenity, creating architecturally significant residences that merge art, structure, and landscape.',
    url: null,
  },
  {
    name: 'Wood Atelier - Simon Hamui',
    role: 'Interior Design & Curation',
    description: 'A Design and Architecture Studio based in Mexico & Aspen specializing in comprehensive interior architecture projects and the creation of custom-made furniture. Seamlessly integrates design and production with specialized workshops.',
    url: 'https://www.simonhamui.com/',
  },
  {
    name: 'Gloria Cortina',
    role: 'Interior Design & Curation',
    description: 'Her artistic expressiveness is particularly evident in the special pieces she creates for her Collectible Design series. These pieces have functional qualities but are always originally conceived as unique forms of sculptural or allegorical art.',
    url: 'https://gloriacortina.com/',
  },
  {
    name: 'Hajj Designless',
    role: 'Interior Design & Curation',
    description: 'Renowned for his craftsmanship and stewardship of quality, guided by tradition and an unwavering pursuit of excellence. Focused on the finest materials and timeless detailing, creating homes that are unique, enduring, and deeply connected to their natural setting.',
    url: 'https://www.hajjdesignless.com',
  },
  {
    name: 'F.W.P. Studio',
    role: 'Interior Design & Curation',
    description: 'Based in New York and Paris, one of the most recognized interior curation studios, renowned for its exceptional antique furnishings and timeless design sensibility. Blending art curation with refined living.',
    url: null,
  },
  {
    name: 'Christopher King',
    role: 'Living Atelier & Palm Beach Showroom',
    description: 'Brings world-class design curation to Atlan through a strategic partnership that establishes our exclusive showroom on Worth Avenue in Palm Beach. As a globally recognized ambassador of Italian bespoke craftsmanship, he elevates the project with curated, made-to-order villa outfitting.',
    url: 'https://bychristopherking.com/',
  },
];

const developers = [
  {
    name: 'M2 Equity Holdings',
    description: 'A leading development firm that prioritizes synergy as the foundation of its projects. Balancing timeless architecture with structural and material durability. Committed to innovation and sustainability, we build legacy developments that stand the test of time.',
  },
  {
    name: 'M Fundatio',
    description: 'A Swiss / Mexican family office specializing in real estate investment and development, focused on building long-term value through strategic acquisitions, stewardship of land, and the creation of distinctive, best-in-class assets.',
  },
];

export function TeamSection() {
  return (
    <section className="bg-pearl py-24 md:py-32">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
            Our Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Development Team
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne" />
        </motion.div>

        {/* Developers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2 mb-20"
        >
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white border border-ash p-8 md:p-10"
            >
              <h3 className="font-serif text-3xl font-light text-navy mb-6">
                {developer.name}
              </h3>
              <div className="h-px w-16 bg-champagne mb-6" />
              <p className="text-slate leading-relaxed">
                {developer.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Architects & Designers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white border border-ash p-6 md:p-8 hover:border-champagne transition-colors duration-300"
            >
              <div className="mb-4">
                <h3 className="font-serif text-xl md:text-2xl font-light text-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-wide text-champagne">
                  {member.role}
                </p>
              </div>
              <div className="h-px w-12 bg-ash mb-4" />
              <p className="text-sm text-slate leading-relaxed mb-4">
                {member.description}
              </p>
              {member.url && (
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy hover:text-champagne transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
