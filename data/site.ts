/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * ================================
 * Editá acá los datos del negocio. Todo el sitio los lee desde este archivo.
 * (Esta es la base sobre la que más adelante se conecta el panel de admin.)
 */

export const site = {
  nombre: 'Sanagustin Náutica',
  tagline: 'Distribuidor Oficial Mercury',
  url: 'https://sanagustin-nautica.vercel.app',

  // Ubicación
  direccion: 'Av. Aristobulo 9534',
  ciudad: 'Santa Fe',
  provincia: 'Santa Fe',
  pais: 'AR',

  // Horarios
  horario: 'Lunes a Viernes · 9:00 a 12:30 hs',
  horarioCorto: 'Lun–Vie: 9:00 a 12:30',
  horarioSchema: { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '09:00', cierra: '12:30' },

  // Contacto
  email: 'sanagustinnautica@gmail.com',

  // Asesores (WhatsApp). El teléfono va sin signos, formato internacional.
  asesores: [
    { nombre: 'Sergio',  rol: 'Asesoramiento', telefono: '543426487636', display: '+54 342 648-7636' },
    { nombre: 'Emanuel', rol: 'Asesoramiento', telefono: '543425111428', display: '+54 342 511-1428' },
  ],

  // Redes sociales (dejá vacío '' lo que no uses)
  social: {
    instagram: '',
    facebook: '',
  },

  // Consulta de Google Maps (se usa para el embed del mapa).
  // Si tenés la ubicación exacta, reemplazá por las coordenadas o el nombre del negocio en Maps.
  mapaQuery: 'Av. Aristobulo del Valle 9534, Santa Fe',

  // Fondo del hero. Cambialo cuando subas el archivo a /public:
  //   'none'  → gradiente animado (sin foto/video)
  //   'video' → usa /public/hero.mp4
  //   'image' → usa /public/hero.jpg
  heroMedia: 'none',
} as const

/** Genera un link de WhatsApp con mensaje pre-armado */
export function waLink(telefono: string, mensaje: string): string {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
}
