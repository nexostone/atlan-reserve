'use client';

import { useTranslations } from 'next-intl';
import { useCurrency } from '@/hooks/useCurrency';
import { CURRENCIES, type Currency } from '@/lib/formatters';

export default function CurrencySwitcher() {
  const t = useTranslations('currency');
  const { selectedCurrency, setSelectedCurrency, locale } = useCurrency();

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm text-gray-600 font-inter mr-2">
        {locale === 'es' ? 'Moneda:' : 'Currency:'}
      </span>
      {(Object.keys(CURRENCIES) as Currency[]).map((currency) => (
        <button
          key={currency}
          onClick={() => handleCurrencyChange(currency)}
          className={`px-3 py-1 rounded-md transition-colors text-sm ${
            selectedCurrency === currency
              ? 'bg-navy text-white font-medium'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={`Switch to ${currency}`}
        >
          {currency}
        </button>
      ))}
    </div>
  );
}
