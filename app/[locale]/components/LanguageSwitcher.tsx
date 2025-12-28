'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    // Navegar a la misma ruta pero con el nuevo locale
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2 items-center">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLanguageChange(loc)}
          className={`px-3 py-1 rounded-md transition-colors ${
            locale === loc
              ? 'bg-navy text-white font-medium'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={`Switch to ${languageNames[loc]}`}
        >
          {languageNames[loc]}
        </button>
      ))}
    </div>
  );
}
