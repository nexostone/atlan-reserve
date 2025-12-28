// Tipos para las traducciones
type Messages = typeof import('../messages/es.json');

declare global {
  // Usa el tipo Messages para autocompletado en useTranslations
  interface IntlMessages extends Messages {}
}

export {};
