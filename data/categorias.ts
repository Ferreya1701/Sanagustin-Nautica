/**
 * CATEGORÍAS (paneles expandibles del inicio)
 * ============================================
 * Editá acá el texto, orden y destino de cada panel.
 * `icon` debe ser un nombre válido del componente Icon.
 * `target` es la sección a la que lleva el botón (#motores, #contacto, etc.).
 */

export type Categoria = {
  id: string
  label: string
  labelShort: string
  number: string
  icon: 'motor' | 'casco' | 'accesorio' | 'usado' | 'atencion'
  description: string
  cta: string
  target: string
  bg: string
}

export const categorias: Categoria[] = [
  {
    id: 'accesorios',
    label: 'Aceites &\nAccesorios',
    labelShort: 'Aceites & Accesorios',
    number: '01',
    icon: 'accesorio',
    description:
      'Aceites marinos de primera línea, repuestos originales, equipamiento de seguridad y todo lo que necesitás para mantener tu embarcación en óptimas condiciones.',
    cta: 'Consultar',
    target: '#contacto',
    bg: 'linear-gradient(160deg, #0f3a5c 0%, #011721 100%)',
  },
  {
    id: 'motores',
    label: 'Motores\nFuera de Borda',
    labelShort: 'Motores F/B',
    number: '02',
    icon: 'motor',
    description:
      'Distribuidores oficiales Mercury. Toda la gama, de 2.5 HP a 600 HP, para toda aplicación: pesca, deportivo, recreativo y trabajo.',
    cta: 'Ver catálogo',
    target: '#motores',
    bg: 'linear-gradient(160deg, #0a1e2e 0%, #0f4363 100%)',
  },
  {
    id: 'cascos',
    label: 'Cascos',
    labelShort: 'Cascos',
    number: '03',
    icon: 'casco',
    description:
      'Amplio stock de embarcaciones: runabouts, semi-rígidos, lanchas de pesca y más. Modelos para cada actividad y presupuesto.',
    cta: 'Consultar',
    target: '#contacto',
    bg: 'linear-gradient(160deg, #061a27 0%, #0f4363 100%)',
  },
  {
    id: 'usados',
    label: 'Usados\nSeleccionados',
    labelShort: 'Usados',
    number: '04',
    icon: 'usado',
    description:
      'Embarcaciones y motores usados con inspección técnica completa. Todos los usados tienen garantía de calidad Sanagustin Náutica.',
    cta: 'Consultar',
    target: '#contacto',
    bg: 'linear-gradient(160deg, #0f2d42 0%, #011721 100%)',
  },
  {
    id: 'atencion',
    label: 'Atención\nPersonalizada',
    labelShort: 'Atención',
    number: '05',
    icon: 'atencion',
    description:
      'Asesoramiento especializado para encontrar la combinación perfecta de motor y embarcación. Financiación, patentamiento y soporte técnico.',
    cta: 'Contactarnos',
    target: '#contacto',
    bg: 'linear-gradient(160deg, #1d1d1b 0%, #0f4363 100%)',
  },
]
