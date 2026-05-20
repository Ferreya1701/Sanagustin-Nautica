import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sanagustin Náutica | Motores Fuera de Borda · Cascos · Accesorios',
  description:
    'Distribuidores oficiales de motores fuera de borda Mercury, Yamaha y más. Cascos, accesorios marinos, usados seleccionados y atención personalizada. Av. Aristobulo 9534.',
  keywords: 'motores fuera de borda, cascos náuticos, accesorios marinos, usados náuticos, Sanagustin Nautica, Aristobulo del Valle',
  openGraph: {
    title: 'Sanagustin Náutica',
    description: 'Tu concesionario náutico de confianza. Motores · Cascos · Accesorios.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700;800;900&family=Oswald:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2285%22>🚤</text></svg>"
        />
        <meta name="theme-color" content="#011721" />
      </head>
      <body>{children}</body>
    </html>
  )
}
