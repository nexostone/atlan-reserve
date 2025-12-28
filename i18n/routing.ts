import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  // Lista de todos los locales soportados
  locales: locales,
  
  // Locale por defecto
  defaultLocale: defaultLocale,
  
  // Prefijo del locale en la URL
  localePrefix: 'as-needed'
});
