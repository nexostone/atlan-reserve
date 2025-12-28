import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// El plugin busca por defecto en ./i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Configuración adicional si es necesaria
};

export default withNextIntl(nextConfig);
