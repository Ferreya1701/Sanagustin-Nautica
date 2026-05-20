import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://sanagustin-nautica.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sanagustin Náutica | Distribuidor Oficial Mercury · Santa Fe',
  description:
    'Distribuidor oficial de motores fuera de borda Mercury en Santa Fe. Toda la gama FourStroke, Pro XS, Verado y SeaPro. Cascos, accesorios, usados seleccionados y atención personalizada. Av. Aristobulo 9534.',
  keywords: [
    'motores fuera de borda',
    'Mercury',
    'distribuidor oficial Mercury',
    'motores Mercury Santa Fe',
    'náutica Santa Fe',
    'cascos',
    'accesorios marinos',
    'usados náuticos',
    'Sanagustin Náutica',
    'Aristobulo del Valle',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Sanagustin Náutica | Distribuidor Oficial Mercury',
    description: 'Motores Mercury, cascos, accesorios y atención personalizada en Santa Fe.',
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'Sanagustin Náutica',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanagustin Náutica | Distribuidor Oficial Mercury',
    description: 'Motores Mercury, cascos, accesorios y atención personalizada en Santa Fe.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Sanagustin Náutica',
  description:
    'Distribuidor oficial de motores fuera de borda Mercury. Cascos, accesorios, usados seleccionados y atención personalizada.',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: '+543426487636',
  email: 'sanagustinnautica@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Aristobulo 9534',
    addressLocality: 'Santa Fe',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '12:30',
    },
  ],
  brand: { '@type': 'Brand', name: 'Mercury Marine' },
  sameAs: [] as string[],
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
        <meta name="theme-color" content="#011721" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
