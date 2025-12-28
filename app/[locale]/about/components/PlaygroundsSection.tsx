'use client';

/**
 * PlaygroundsSection Component
 * Sección de actividades en agua, montaña y aire
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const playgrounds = [
  {
    title: 'Water Playground',
    description: 'Set on crystal waters, Atlan invites endless discovery. From sailing and waterskiing to paddle boarding, kayaking, and bass fishing, every experience flows with the lake\'s rhythm—a living playground of movement, light, and stillness.',
    gradient: 'from-blue-900/20 to-blue-600/20',
  },
  {
    title: 'Mountain Playground',
    description: 'Rising above the lake, Atlan\'s mountain playground inspires pure exploration. Trails weave through forests and ridge lines for hiking, biking, and horseback riding, leading to panoramic views that celebrate freedom, elevation, and the quiet majesty of the land.',
    gradient: 'from-green-900/20 to-green-600/20',
  },
  {
    title: 'Air Playground',
    description: 'From hydroplane flights and gliding sessions to paramotoring and disc golf above the treetops, every experience moves with the wind\'s quiet power—where altitude becomes its own horizon and flight becomes pure serenity.',
    gradient: 'from-sky-900/20 to-sky-600/20',
  },
];

export function PlaygroundsSection() {
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
            Adventure
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Elemental Playgrounds
          </h2>
          <div className="mx-auto h-px w-24 bg-champagne" />
        </motion.div>

        {/* Playgrounds Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {playgrounds.map((playground, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-gradient-to-br ${playground.gradient} p-8 md:p-10 border border-ash backdrop-blur-sm`}
            >
              <h3 className="font-serif text-3xl font-light text-navy mb-6">
                {playground.title}
              </h3>
              <div className="h-px w-16 bg-champagne mb-6" />
              <p className="text-slate leading-relaxed">
                {playground.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
