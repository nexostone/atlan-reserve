import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Manrope, Inter } from "next/font/google";
import { routing } from '@/i18n/routing';
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validar que el locale es soportado
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Habilitar static rendering
  setRequestLocale(locale);

  // Obtener los mensajes para el locale actual
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
