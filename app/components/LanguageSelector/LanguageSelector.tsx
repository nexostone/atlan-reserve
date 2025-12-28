'use client';

/**
 * Language Selector Component - Atlan Reserve
 * Selector de idioma minimalista para el footer
 */

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/config';

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  
  const currentLocale = (params.locale as Locale) || 'es';

  const handleLanguageChange = (locale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <div className="flex items-center gap-3">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          disabled={isPending}
          className={`
            font-inter text-xs font-light transition-all duration-300
            ${
              currentLocale === locale
                ? 'text-white'
                : 'text-white/50 hover:text-white/80'
            }
            ${isPending ? 'cursor-wait opacity-50' : 'cursor-pointer'}
          `}
          aria-label={`Cambiar idioma a ${LANGUAGE_NAMES[locale]}`}
        >
          {LANGUAGE_NAMES[locale]}
        </button>
      ))}
      
      {/* Separador visual */}
      <div className="h-3 w-px bg-white/20" />
    </div>
  );
}
