# Internacionalización (i18n) - Atlan Reserve

## Configuración

Este proyecto usa `next-intl` v3.26.2 con Next.js 16.1.1 (App Router).

### Estructura de archivos

```
atlan-reserve/
├── i18n/
│   ├── config.ts        # Configuración base (locales, defaultLocale)
│   ├── routing.ts       # Configuración de routing con defineRouting
│   ├── request.ts       # Configuración de request con getRequestConfig
│   └── navigation.ts    # APIs de navegación (Link, useRouter, etc.)
├── messages/
│   ├── en.json          # Traducciones en inglés
│   └── es.json          # Traducciones en español
├── app/
│   ├── layout.tsx       # Layout raíz (pasa children directamente)
│   ├── page.tsx         # Página raíz (redirect al defaultLocale)
│   └── [locale]/
│       ├── layout.tsx   # Layout con NextIntlClientProvider
│       ├── page.tsx     # Página principal
│       └── components/
│           ├── LanguageSwitcher.tsx
│           └── PriceDisplay.tsx
├── middleware.ts        # Middleware para routing de locales
└── types/
    └── i18n.d.ts        # Tipos para autocompletado de traducciones
```

### Locales soportados

- `es` - Español (por defecto)
- `en` - English

### Uso

#### En Server Components

```tsx
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  
  const t = useTranslations('namespace');
  
  return <h1>{t('key')}</h1>;
}
```

#### En Client Components

```tsx
'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Component() {
  const t = useTranslations('namespace');
  const locale = useLocale();
  
  return <p>{t('key')}</p>;
}
```

#### Navegación

```tsx
import { Link, useRouter, usePathname } from '@/i18n/navigation';

// Link con locale automático
<Link href="/about">About</Link>

// Cambiar locale programáticamente
const router = useRouter();
const pathname = usePathname();
router.replace(pathname, { locale: 'en' });
```

### Agregar un nuevo locale

1. Agregar el locale a `i18n/config.ts`:
   ```ts
   export const locales = ['en', 'es', 'fr'] as const;
   ```

2. Crear el archivo de mensajes en `messages/fr.json`

3. Actualizar el LanguageSwitcher si es necesario

### Configuración de URL

Con `localePrefix: 'as-needed'` en `i18n/routing.ts`:
- URLs del locale por defecto: `/`, `/about`, `/contact`
- URLs de otros locales: `/en/`, `/en/about`, `/en/contact`
