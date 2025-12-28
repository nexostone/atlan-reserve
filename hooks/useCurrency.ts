'use client';

import { useLocale } from 'next-intl';
import { useState, useCallback } from 'react';
import { formatCurrency, type Currency } from '@/lib/formatters';

/**
 * Hook para manejar conversión y formateo de monedas
 * En el futuro, puedes agregar tasas de cambio en tiempo real
 */
export function useCurrency() {
  const locale = useLocale() as 'es' | 'en';
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');

  // Tasas de cambio estáticas (puedes reemplazar con una API)
  const exchangeRates: Record<Currency, number> = {
    USD: 1,
    MXN: 18.5, // 1 USD = 18.5 MXN (ejemplo)
    EUR: 0.92, // 1 USD = 0.92 EUR (ejemplo)
  };

  /**
   * Convierte una cantidad de una moneda a otra
   */
  const convert = useCallback(
    (amount: number, from: Currency, to: Currency): number => {
      if (from === to) return amount;
      const usdAmount = amount / exchangeRates[from];
      return usdAmount * exchangeRates[to];
    },
    [exchangeRates]
  );

  /**
   * Formatea una cantidad en la moneda seleccionada
   */
  const format = useCallback(
    (amount: number, currency?: Currency): string => {
      return formatCurrency(amount, currency || selectedCurrency, locale);
    },
    [locale, selectedCurrency]
  );

  /**
   * Formatea y convierte una cantidad
   */
  const formatAndConvert = useCallback(
    (amount: number, from: Currency, to?: Currency): string => {
      const targetCurrency = to || selectedCurrency;
      const convertedAmount = convert(amount, from, targetCurrency);
      return format(convertedAmount, targetCurrency);
    },
    [convert, format, selectedCurrency]
  );

  return {
    selectedCurrency,
    setSelectedCurrency,
    convert,
    format,
    formatAndConvert,
    exchangeRates,
    locale,
  };
}
