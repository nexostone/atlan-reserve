import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// El plugin busca por defecto en ./i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Configuración adicional si es necesaria
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexostone-media.s3.us-east-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
