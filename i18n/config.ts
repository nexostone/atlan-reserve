// Lista de locales soportados
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

// Locale por defecto
export const defaultLocale: Locale = 'es';
