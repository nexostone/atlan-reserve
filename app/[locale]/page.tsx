import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import LanguageSwitcher from './components/LanguageSwitcher';
import PriceDisplay from './components/PriceDisplay';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);
  
  // Habilitar static rendering
  setRequestLocale(locale);
  
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      {/* Selector de idioma en la parte superior */}
      <div className="absolute top-8 right-8">
        <LanguageSwitcher />
      </div>

      {/* Contenido principal */}
      <h1 className="text-4xl text-navy font-manrope font-light">
        Atlan Reserve
      </h1>
      
      <p className="text-lg text-slate font-inter font-light">
        {tCommon('welcome')}
      </p>
      
      <div className="mt-8 text-center max-w-2xl">
        <h2 className="text-3xl text-navy font-manrope font-medium mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-slate font-inter mb-8">
          {t('subtitle')}
        </p>
        
        {/* Botón CTA */}
        <button className="bg-navy text-white px-8 py-3 rounded-lg font-manrope font-medium hover:bg-opacity-90 transition-all">
          {t('cta')}
        </button>
      </div>

      {/* Ejemplo de precios con diferentes monedas */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-manrope font-medium text-navy mb-4">
          Ejemplos de Precios
        </h3>
        <div className="flex flex-col gap-3 text-left">
          <div className="flex justify-between gap-8">
            <span className="text-slate font-inter">Villa de lujo (USD):</span>
            <PriceDisplay amount={2500} currency="USD" className="font-manrope font-medium text-navy" />
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-slate font-inter">Villa de lujo (MXN):</span>
            <PriceDisplay amount={45000} currency="MXN" className="font-manrope font-medium text-navy" />
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-slate font-inter">Villa de lujo (EUR):</span>
            <PriceDisplay amount={2300} currency="EUR" className="font-manrope font-medium text-navy" />
          </div>
        </div>
      </div>
    </div>
  );
}
