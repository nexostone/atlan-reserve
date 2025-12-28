'use client';

/**
 * Footer Component - Atlan Reserve
 * Footer minimalista y elegante con navegación, info de contacto y redes sociales
 */

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/variants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { LanguageSelector } from '@/app/components/LanguageSelector';

const FULL_LOGO_URL = 'https://nexostone-media.s3.us-east-2.amazonaws.com/atlan-reserve/Logos/full-logo-atlan-reserve.png';

export function Footer() {
  const t = useTranslations();
  const { ref, controls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="relative bg-ink text-white"
    >
      {/* Divider Line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container-luxury">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-24"
        >
          {/* Column 1: Logo & Description */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src={FULL_LOGO_URL}
                alt="Atlan Reserve"
                width={180}
                height={60}
                className="h-auto w-44 object-contain filter brightness-0 invert"
              />
            </Link>
            <p className="font-inter text-sm font-light leading-relaxed text-white/70">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={staggerItem}>
            <h3 className="font-cormorant mb-6 text-xl font-light tracking-wide">
              {t('footer.navigation')}
            </h3>
            <nav className="space-y-3">
              <FooterLink href="/experiences">{t('navigation.experiences')}</FooterLink>
              <FooterLink href="/properties">{t('navigation.properties')}</FooterLink>
              <FooterLink href="/about">{t('navigation.about')}</FooterLink>
              <FooterLink href="/contact">{t('navigation.contact')}</FooterLink>
              <FooterLink href="/reservations">{t('navigation.reservations')}</FooterLink>
            </nav>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={staggerItem}>
            <h3 className="font-cormorant mb-6 text-xl font-light tracking-wide">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3 font-inter text-sm font-light text-white/70">
              <p>
                Punta de Mita<br />
                Nayarit, México
              </p>
              <p>
                <a 
                  href="tel:+523221234567" 
                  className="transition-colors hover:text-white"
                >
                  +52 322 123 4567
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@atlanreserve.com" 
                  className="transition-colors hover:text-white"
                >
                  info@atlanreserve.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Column 4: Newsletter & Social */}
          <motion.div variants={staggerItem}>
            <h3 className="font-cormorant mb-6 text-xl font-light tracking-wide">
              {t('footer.stayConnected')}
            </h3>
            
            {/* Newsletter */}
            <form className="mb-6">
              <div className="flex border border-white/20">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 bg-transparent px-4 py-3 font-inter text-sm font-light text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white px-6 font-inter text-sm font-light text-black transition-colors hover:bg-white/90"
                >
                  {t('footer.subscribe')}
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex gap-4">
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
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="font-inter text-xs font-light text-white/50">
              {t('footer.copyright', { year: currentYear })}
            </p>

            {/* Language Selector & Legal Links */}
            <div className="flex items-center gap-6">
              <LanguageSelector />
              
              <div className="flex gap-6 font-inter text-xs font-light text-white/50">
                <Link href="/privacy" className="transition-colors hover:text-white/80">
                  {t('footer.privacy')}
                </Link>
                <Link href="/terms" className="transition-colors hover:text-white/80">
                  {t('footer.terms')}
                </Link>
                <Link href="/cookies" className="transition-colors hover:text-white/80">
                  {t('footer.cookies')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Componente auxiliar para links del footer
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group block font-inter text-sm font-light text-white/70 transition-colors hover:text-white"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
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
