import type { MetadataRoute } from 'next'
import { site } from '@/data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nombre} | Distribuidor Oficial Mercury`,
    short_name: 'Sanagustin',
    description: 'Motores fuera de borda Mercury, cascos, accesorios y atención personalizada.',
    start_url: '/',
    display: 'standalone',
    background_color: '#011721',
    theme_color: '#011721',
    lang: 'es-AR',
    categories: ['shopping', 'business'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
