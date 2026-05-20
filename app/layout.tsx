import type { Metadata } from 'next'
import { Raleway, Oswald, Nunito_Sans, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { site } from '@/data/site'

const SITE_URL = site.url

const raleway = Raleway({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-raleway', display: 'swap' })
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oswald', display: 'swap' })
const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-nunito', display: 'swap' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-roboto-mono', display: 'swap' })

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
  name: site.nombre,
  description:
    'Distribuidor oficial de motores fuera de borda Mercury. Cascos, accesorios, usados seleccionados y atención personalizada.',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: `+${site.asesores[0].telefono}`,
  email: site.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.direccion,
    addressLocality: site.ciudad,
    addressRegion: site.provincia,
    addressCountry: site.pais,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.horarioSchema.dias,
      opens: site.horarioSchema.abre,
      closes: site.horarioSchema.cierra,
    },
  ],
  brand: { '@type': 'Brand', name: 'Mercury Marine' },
  sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
}

const fontVars = `${raleway.variable} ${oswald.variable} ${nunito.variable} ${robotoMono.variable}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVars} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#011721" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
