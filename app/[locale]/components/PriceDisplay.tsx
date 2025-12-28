'use client';

import { useLocale } from 'next-intl';
import { formatCurrency, type Currency } from '@/lib/formatters';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

interface PriceDisplayProps {
  amount: number;
  currency?: Currency;
  className?: string;
}

export default function PriceDisplay({
  amount,
  currency = 'USD',
  className = '',
}: PriceDisplayProps) {
  const locale = useLocale() as Locale;

  return (
    <span className={className}>
      {formatCurrency(amount, currency, locale)}
    </span>
  );
}
