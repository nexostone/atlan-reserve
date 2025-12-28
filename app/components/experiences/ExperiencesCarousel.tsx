'use client';

/**
 * ExperiencesCarousel Component - Atlan Reserve
 * Carrusel horizontal de experiencias con scroll suave
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExperienceCard, Experience } from './ExperienceCard';
import { fadeInUp } from '@/lib/animations/variants';

interface ExperiencesCarouselProps {
  experiences: Experience[];
}

export function ExperiencesCarousel({ experiences }: ExperiencesCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position
  const checkScroll = () => {
    if (!containerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    const newScrollLeft = direction === 'left'
      ? containerRef.current.scrollLeft - scrollAmount
      : containerRef.current.scrollLeft + scrollAmount;

    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="mb-4 text-sm font-light uppercase tracking-widest text-champagne">
            Experiencias Exclusivas
          </p>
          <h2 className="font-serif text-4xl font-light text-navy md:text-5xl lg:text-6xl">
            Un Estilo de Vida Excepcional
          </h2>
          <div className="mt-6 h-px w-24 bg-champagne" />
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-steel">
            Descubre las experiencias, amenidades y servicios exclusivos que 
            hacen de Palo Alto un destino único en la Riviera Nayarit.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -top-20 right-0 z-10 hidden gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="flex h-12 w-12 items-center justify-center border border-ash bg-white text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-navy disabled:hover:border-ash"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="flex h-12 w-12 items-center justify-center border border-ash bg-white text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-navy disabled:hover:border-ash"
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={containerRef}
            className="scrollbar-hide -mx-6 flex gap-6 overflow-x-auto px-6 pb-4 md:-mx-8 md:px-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="w-[85vw] flex-shrink-0 sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw]"
              >
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollRight ? 1 : 0 }}
            className="mt-8 flex justify-center gap-2 md:hidden"
          >
            <span className="text-xs uppercase tracking-widest text-slate">
              Desliza para ver más
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 animate-pulse text-slate"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>

        {/* View All Link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center md:mt-16"
        >
          <a
            href="/experiences"
            className="group inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-light uppercase tracking-wide text-navy transition-all hover:border-champagne hover:text-champagne"
          >
            <span>Ver Todas las Experiencias</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
