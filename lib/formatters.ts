import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

/**
 * Mapeo de locales de la app a locales de Intl
 */
const localeToIntl: Record<Locale, string> = {
  es: 'es-MX',
  en: 'en-US',
};

/**
 * Formatea un número como moneda según el locale
 * @param amount - Cantidad a formatear
 * @param currency - Código de moneda (USD, MXN, EUR)
 * @param locale - Locale para el formato (es, en)
 * @returns Cadena formateada con el símbolo de moneda
 */
export function formatCurrency(
  amount: number,
  currency: Currency = 'USD',
  locale: Locale = 'es'
): string {
  return new Intl.NumberFormat(localeToIntl[locale], {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formatea una fecha según el locale
 * @param date - Fecha a formatear
 * @param locale - Locale para el formato (es, en)
 * @param options - Opciones de formateo de Intl.DateTimeFormat
 * @returns Cadena formateada
 */
export function formatDate(
  date: Date | string,
  locale: Locale = 'es',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat(localeToIntl[locale], defaultOptions).format(dateObj);
}

/**
 * Formatea un número según el locale
 * @param value - Número a formatear
 * @param locale - Locale para el formato (es, en)
 * @param options - Opciones de formateo de Intl.NumberFormat
 * @returns Cadena formateada
 */
export function formatNumber(
  value: number,
  locale: Locale = 'es',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(localeToIntl[locale], options).format(value);
}

/**
 * Tipos de moneda soportados
 */
export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar', nameEs: 'Dólar Estadounidense' },
  MXN: { symbol: '$', name: 'Mexican Peso', nameEs: 'Peso Mexicano' },
  EUR: { symbol: '€', name: 'Euro', nameEs: 'Euro' },
} as const;

export type Currency = keyof typeof CURRENCIES;
