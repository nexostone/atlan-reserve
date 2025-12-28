'use client';

/**
 * Header Component - Atlan Reserve
 * Header minimalista con logo animado que cambia al hacer scroll
 * Sticky header con backdrop blur elegante y menú mobile animado
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const FULL_LOGO_URL = 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Logos/full-logo-atlan-reserve.png';
const SMALL_LOGO_URL = 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Logos/small-logo-atlan-reserve.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      const threshold = 100; // Pixels para activar el cambio

      // Detectar dirección del scroll
      const isScrollingDown = latest > prevScrollY;

      // Cambiar logo si pasamos el threshold
      if (latest > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setPrevScrollY(latest);
    });
  }, [scrollY, prevScrollY]);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Variantes de animación para slide up/down
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
    }),
  };

  return (
    <>
      <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-pearl/60 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="container-luxury flex items-center justify-between py-3 md:py-4">
        {/* Logo con animación de intercambio */}
        <Link href="/" className="relative overflow-hidden w-1/4 h-12">
          <AnimatePresence mode="wait" custom={isScrolled ? 1 : -1}>
            {!isScrolled ? (
              <motion.div
                key="full-logo"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative h-8 w-auto md:h-12 "
              >
                <Image
                  src={FULL_LOGO_URL}
                  alt="Atlan Reserve"
                  width={200}
                  height={64}
                  className="h-full w-auto object-contain filter brightness-0 invert"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                key="small-logo"
                custom={-1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative h-10 w-auto md:h-12"
              >
                <Image
                  src={SMALL_LOGO_URL}
                  alt="Atlan Reserve"
                  width={48}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/experiences">Experiencias</NavLink>
          <NavLink href="/projects">Desarrollos</NavLink>
          <NavLink href="/about">Acerca de</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/reservations"
            className={`hidden md:block px-6 py-2 text-sm font-light tracking-wide transition-all border ${isScrolled
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
              }`}
          >
            Ubicación
          </Link>

          {/* Mobile Menu Button - Solo visible cuando el menú está cerrado */}
          {!isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden flex flex-col gap-1.5 p-2 relative z-50 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              aria-label="Abrir menú"
            >
              <motion.span
                className="block h-px w-6 bg-current origin-center"
              />
              <motion.span
                className="block h-px w-6 bg-current"
              />
              <motion.span
                className="block h-px w-6 bg-current origin-center"
              />
            </button>
          )}
        </div>
      </div>
      </motion.header>

      {/* Mobile Menu Overlay - FUERA del header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Close Button - Fixed fuera del header */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="md:hidden fixed top-6 right-6 z-[80] flex flex-col gap-1.5 p-2 text-white"
              aria-label="Cerrar menú"
            >
              <motion.span
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: 45, y: 7 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="block h-px w-6 bg-current origin-center"
              />
              <motion.span
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="block h-px w-6 bg-current"
              />
              <motion.span
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: -45, y: -7 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="block h-px w-6 bg-current origin-center"
              />
            </motion.button>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-navy/30 z-[70] md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1 items-start justify-between h-full pb-4">
                  <div className='w-full'>
                  <MobileNavLink
                    href="/experiences"
                    onClick={toggleMobileMenu}
                    delay={0.1}
                  >
                    Experiencias
                  </MobileNavLink>
                  <MobileNavLink
                    href="/projects"
                    onClick={toggleMobileMenu}
                    delay={0.15}
                  >
                    Desarrollos
                  </MobileNavLink>
                  <MobileNavLink
                    href="/about"
                    onClick={toggleMobileMenu}
                    delay={0.2}
                  >
                    Acerca de
                  </MobileNavLink>
                  <MobileNavLink
                    href="/contact"
                    onClick={toggleMobileMenu}
                    delay={0.25}
                  >
                    Contacto
                  </MobileNavLink>
                  </div>
                  {/* Social Links */}
                  <div className="mt-8 flex justify-center gap-4">
                    <SocialLink
                      href="https://instagram.com"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </SocialLink>
                    <SocialLink
                      href="https://facebook.com"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                    </SocialLink>
                    <SocialLink
                      href="https://twitter.com"
                      aria-label="Twitter"
                    >
                      <TwitterIcon />
                    </SocialLink>
                  </div>
                </nav>
                

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mt-auto pt-8 border-t border-white/10"
                >
                  <Link
                    href="/reservations"
                    onClick={toggleMobileMenu}
                    className="block w-full px-6 py-3 text-center text-sm font-light tracking-wide border border-white text-white hover:bg-white hover:text-navy transition-all"
                  >
                    Ubicación
                  </Link>

                  
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Componente auxiliar para links de navegación
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  return (
    <Link
      href={href}
      className={`relative text-sm font-light tracking-wide transition-colors group ${isScrolled
          ? 'text-black hover:text-gray-600'
          : 'text-white hover:text-white/80'
        }`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-black' : 'bg-white'
            }`}
        />
      </span>
    </Link>
  );
}

// Componente auxiliar para links del menú mobile
function MobileNavLink({
  href,
  children,
  onClick,
  delay = 0
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block py-4 text-2xl font-light text-white tracking-wide border-b border-white/10 hover:text-champagne transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
}

// Componente auxiliar para links de redes sociales
function SocialLink({
  href,
  children,
  'aria-label': ariaLabel
}: {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-all hover:border-white hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}

// Iconos de redes sociales (SVG)
function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
