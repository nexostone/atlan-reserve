import "./globals.css";

// Este layout raíz es mínimo - toda la lógica de internacionalización
// está manejada por el middleware y el layout de [locale]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
