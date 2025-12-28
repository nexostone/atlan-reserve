import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// La página raíz redirige al locale por defecto
// El middleware maneja esto normalmente, pero esto es un fallback
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
