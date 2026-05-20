/**
 * CATÁLOGO DE MOTORES MERCURY
 * ============================
 * Editá acá los modelos, familias y descripciones.
 * Para agregar un modelo: sumá un objeto al array `modelos`.
 * Las fotos van en /public/motores/ (ver COMO-CARGAR-FOTOS.txt).
 */

export type Familia = 'FourStroke' | 'Pro XS' | 'Verado' | 'SeaPro'

export const familiaInfo: Record<Familia, { etiqueta: string; desc: string; base: string }> = {
  FourStroke: {
    etiqueta: '4 Tiempos',
    desc: 'Silenciosos, eficientes en combustible y confiables. Para uso recreativo, pesca y paseo.',
    base: 'Motor de 4 tiempos con inyección electrónica de combustible (EFI), marcha suave y silenciosa y un consumo notablemente bajo. Tecnología Mercury que combina confiabilidad, durabilidad y bajo mantenimiento.',
  },
  'Pro XS': {
    etiqueta: 'Pro XS',
    desc: 'Alto rendimiento para pesca deportiva. Máxima aceleración, velocidad y respuesta.',
    base: 'Desarrollado para la pesca deportiva y el máximo rendimiento. Excelente relación peso-potencia, aceleración instantánea, mayor velocidad punta y respuesta inmediata al acelerador.',
  },
  Verado: {
    etiqueta: 'Verado',
    desc: 'Línea premium: máxima potencia, silencio y refinamiento para grandes embarcaciones.',
    base: 'La línea premium de Mercury: máxima potencia, refinamiento y el funcionamiento más silencioso de su categoría. Dirección hidráulica integrada y tecnología de gran cilindrada para las embarcaciones más exigentes.',
  },
  SeaPro: {
    etiqueta: 'SeaPro',
    desc: 'Uso comercial e intensivo. Durabilidad y confiabilidad reforzadas para trabajo diario.',
    base: 'Construido para uso comercial e intensivo. Componentes reforzados y mayor durabilidad para soportar largas jornadas de trabajo en el agua, con la confiabilidad que exige el uso profesional.',
  },
}

export type Modelo = { fam: Familia; hp: string; tipo: string }

export const modelos: Modelo[] = [
  // ── FourStroke (4 Tiempos) ──
  { fam: 'FourStroke', hp: '2.5', tipo: 'Portátil' },
  { fam: 'FourStroke', hp: '3.5', tipo: 'Portátil' },
  { fam: 'FourStroke', hp: '4', tipo: 'Portátil' },
  { fam: 'FourStroke', hp: '5', tipo: 'Portátil' },
  { fam: 'FourStroke', hp: '6', tipo: 'Portátil' },
  { fam: 'FourStroke', hp: '8', tipo: 'Liviano' },
  { fam: 'FourStroke', hp: '9.9', tipo: 'Liviano' },
  { fam: 'FourStroke', hp: '15', tipo: 'Liviano' },
  { fam: 'FourStroke', hp: '20', tipo: 'Liviano' },
  { fam: 'FourStroke', hp: '25', tipo: 'Mediano' },
  { fam: 'FourStroke', hp: '30', tipo: 'Mediano' },
  { fam: 'FourStroke', hp: '40', tipo: 'Mediano' },
  { fam: 'FourStroke', hp: '50', tipo: 'Mediano' },
  { fam: 'FourStroke', hp: '60', tipo: 'Mediano' },
  { fam: 'FourStroke', hp: '75', tipo: 'Alto' },
  { fam: 'FourStroke', hp: '90', tipo: 'Alto' },
  { fam: 'FourStroke', hp: '115', tipo: 'Alto' },
  { fam: 'FourStroke', hp: '150', tipo: 'Alto' },
  { fam: 'FourStroke', hp: '175', tipo: 'V6' },
  { fam: 'FourStroke', hp: '200', tipo: 'V6' },
  { fam: 'FourStroke', hp: '225', tipo: 'V6' },
  { fam: 'FourStroke', hp: '250', tipo: 'V8' },
  { fam: 'FourStroke', hp: '300', tipo: 'V8' },
  // ── Pro XS ──
  { fam: 'Pro XS', hp: '115', tipo: 'Pesca deportiva' },
  { fam: 'Pro XS', hp: '150', tipo: 'Pesca deportiva' },
  { fam: 'Pro XS', hp: '175', tipo: 'V6' },
  { fam: 'Pro XS', hp: '200', tipo: 'V8' },
  { fam: 'Pro XS', hp: '225', tipo: 'V8' },
  { fam: 'Pro XS', hp: '250', tipo: 'V8' },
  { fam: 'Pro XS', hp: '300', tipo: 'V8' },
  // ── Verado ──
  { fam: 'Verado', hp: '250', tipo: 'V8' },
  { fam: 'Verado', hp: '300', tipo: 'V8' },
  { fam: 'Verado', hp: '350', tipo: 'V10' },
  { fam: 'Verado', hp: '400', tipo: 'V10' },
  { fam: 'Verado', hp: '600', tipo: 'V12' },
  // ── SeaPro (Comercial) ──
  { fam: 'SeaPro', hp: '15', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '25', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '40', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '60', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '75', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '90', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '115', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '150', tipo: 'Comercial' },
  { fam: 'SeaPro', hp: '200', tipo: 'V6' },
  { fam: 'SeaPro', hp: '225', tipo: 'V8' },
  { fam: 'SeaPro', hp: '250', tipo: 'V8' },
  { fam: 'SeaPro', hp: '300', tipo: 'V8' },
  { fam: 'SeaPro', hp: '500', tipo: 'V10' },
]

export const filtros: ('Todos' | Familia)[] = ['Todos', 'FourStroke', 'Pro XS', 'Verado', 'SeaPro']

/** Rangos de potencia para el filtro avanzado */
export const rangosHp = [
  { id: 'todos', label: 'Toda potencia', min: 0, max: Infinity },
  { id: 'r1', label: 'Hasta 20 HP', min: 0, max: 20 },
  { id: 'r2', label: '25 a 60 HP', min: 21, max: 60 },
  { id: 'r3', label: '75 a 150 HP', min: 61, max: 150 },
  { id: 'r4', label: '175 HP o más', min: 151, max: Infinity },
] as const

export const usos = ['Todos', 'Pesca', 'Deportivo', 'Recreativo', 'Crucero', 'Comercial'] as const

/** Usos recomendados de cada modelo (derivado de familia + potencia) */
export function usosDe(m: Modelo): string[] {
  if (m.fam === 'SeaPro') return ['Comercial', 'Recreativo']
  if (m.fam === 'Pro XS') return ['Pesca', 'Deportivo']
  if (m.fam === 'Verado') return ['Crucero', 'Deportivo']
  const hp = parseFloat(m.hp)
  if (hp <= 20) return ['Pesca', 'Recreativo']
  if (hp <= 90) return ['Pesca', 'Recreativo', 'Deportivo']
  return ['Deportivo', 'Crucero']
}

export function enRangoHp(m: Modelo, rangoId: string): boolean {
  const r = rangosHp.find((x) => x.id === rangoId) ?? rangosHp[0]
  const hp = parseFloat(m.hp)
  return hp >= r.min && hp <= r.max
}

function tierUso(hp: number): string {
  if (hp <= 6) return 'Ideal para botes, gomones pequeños y como motor auxiliar. Liviano y fácil de transportar.'
  if (hp <= 20) return 'Perfecto para gomones, botes de pesca y embarcaciones livianas de uso recreativo.'
  if (hp <= 60) return 'Recomendado para lanchas medianas, semirrígidos y pesca costera.'
  if (hp <= 150) return 'Ideal para lanchas deportivas, cruisers y pesca embarcada de mayor porte.'
  return 'Potencia de alto rendimiento para grandes embarcaciones que exigen máxima velocidad y empuje.'
}

export function descripcion(m: Modelo): string {
  return `${familiaInfo[m.fam].base} ${tierUso(parseFloat(m.hp))}`
}

export function famSlug(m: Modelo): string {
  return m.fam.replace(/\s+/g, '').toLowerCase()
}

export function modelSlug(m: Modelo): string {
  return `${famSlug(m)}-${m.hp.replace('.', '-')}`
}

/** Fuentes de imagen en orden: modelo → familia → (placeholder) */
export function imgSources(m: Modelo): string[] {
  return [modelSlug(m), famSlug(m)]
}
