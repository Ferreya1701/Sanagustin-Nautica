'use client'
import { useState, useEffect } from 'react'
import ProductImage from './ProductImage'

const SERGIO = '543426487636'
const EMANUEL = '543425111428'

type Familia = 'FourStroke' | 'Pro XS' | 'Verado' | 'SeaPro'

const familiaInfo: Record<Familia, { etiqueta: string; desc: string; base: string }> = {
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

type Modelo = { fam: Familia; hp: string; tipo: string }

const modelos: Modelo[] = [
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

const filtros: ('Todos' | Familia)[] = ['Todos', 'FourStroke', 'Pro XS', 'Verado', 'SeaPro']

function tierUso(hp: number): string {
  if (hp <= 6) return 'Ideal para botes, gomones pequeños y como motor auxiliar. Liviano y fácil de transportar.'
  if (hp <= 20) return 'Perfecto para gomones, botes de pesca y embarcaciones livianas de uso recreativo.'
  if (hp <= 60) return 'Recomendado para lanchas medianas, semirrígidos y pesca costera.'
  if (hp <= 150) return 'Ideal para lanchas deportivas, cruisers y pesca embarcada de mayor porte.'
  return 'Potencia de alto rendimiento para grandes embarcaciones que exigen máxima velocidad y empuje.'
}

function descripcion(m: Modelo): string {
  return `${familiaInfo[m.fam].base} ${tierUso(parseFloat(m.hp))}`
}

function slug(m: Modelo): string {
  return `${m.fam.replace(/\s+/g, '').toLowerCase()}-${m.hp.replace('.', '-')}`
}

function waLink(phone: string, m: Modelo): string {
  const msg = `Hola! Quisiera consultar el precio y disponibilidad del *Mercury ${m.hp} HP ${familiaInfo[m.fam].etiqueta}*. ¿Me pueden asesorar?`
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
}

export default function MercuryCatalog() {
  const [filtro, setFiltro] = useState<'Todos' | Familia>('Todos')
  const [sel, setSel] = useState<Modelo | null>(null)

  const visibles = filtro === 'Todos' ? modelos : modelos.filter((m) => m.fam === filtro)

  // Cerrar modal con Escape + bloquear scroll de fondo
  useEffect(() => {
    if (!sel) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [sel])

  return (
    <section id="motores" className="catalog-section">
      <div className="container">
        <div className="catalog-header">
          <span className="section-label">Motores Fuera de Borda</span>
          <h2>Catálogo <em>Mercury</em></h2>
          <p>Distribuidores oficiales. Toda la gama Mercury, desde 2.5 HP hasta 600 HP. Tocá cada motor para ver el detalle y consultar precio.</p>
        </div>

        {/* Filtros por familia */}
        <div className="catalog-filters">
          {filtros.map((f) => {
            const count = f === 'Todos' ? modelos.length : modelos.filter((m) => m.fam === f).length
            return (
              <button
                key={f}
                className={`catalog-filter${filtro === f ? ' active' : ''}`}
                onClick={() => setFiltro(f)}
              >
                {f === 'Todos' ? 'Todos' : familiaInfo[f].etiqueta}
                <span className="catalog-filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        {filtro !== 'Todos' && <p className="catalog-fam-desc">{familiaInfo[filtro].desc}</p>}

        {/* Grid de modelos */}
        <div className="catalog-grid">
          {visibles.map((m, i) => (
            <div
              key={`${m.fam}-${m.hp}-${i}`}
              className="motor-card-v2"
              onClick={() => setSel(m)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSel(m)}
            >
              <div className="motor-card-img">
                <ProductImage slug={slug(m)} alt={`Mercury ${m.hp} HP ${familiaInfo[m.fam].etiqueta}`} size={38} />
                <span className={`motor-fam-badge fam-${m.fam.replace(/\s+/g, '').toLowerCase()}`}>
                  {familiaInfo[m.fam].etiqueta}
                </span>
              </div>
              <div className="motor-card-body">
                <div className="motor-hp">{m.hp}<span>HP</span></div>
                <div className="motor-tipo">{m.tipo}</div>
                <div className="motor-precio-valor">Precio a consultar</div>
                <span className="motor-vermas">Ver detalle →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      {sel && (
        <div className="motor-modal-overlay" onClick={() => setSel(null)}>
          <div className="motor-modal" onClick={(e) => e.stopPropagation()}>
            <button className="motor-modal-close" onClick={() => setSel(null)} aria-label="Cerrar">×</button>

            <div className="motor-modal-img">
              <ProductImage slug={slug(sel)} alt={`Mercury ${sel.hp} HP ${familiaInfo[sel.fam].etiqueta}`} size={72} />
            </div>

            <div className="motor-modal-body">
              <span className={`motor-fam-badge fam-${sel.fam.replace(/\s+/g, '').toLowerCase()}`}>
                {familiaInfo[sel.fam].etiqueta}
              </span>
              <h3 className="motor-modal-title">Mercury {sel.hp} HP</h3>

              <div className="motor-modal-specs">
                <div className="motor-modal-spec">
                  <span>Potencia</span><strong>{sel.hp} HP</strong>
                </div>
                <div className="motor-modal-spec">
                  <span>Configuración</span><strong>{sel.tipo}</strong>
                </div>
                <div className="motor-modal-spec">
                  <span>Línea</span><strong>{familiaInfo[sel.fam].etiqueta}</strong>
                </div>
                <div className="motor-modal-spec">
                  <span>Precio</span><strong>A consultar</strong>
                </div>
              </div>

              <p className="motor-modal-desc">{descripcion(sel)}</p>

              <div className="motor-modal-btns">
                <a href={waLink(SERGIO, sel)} target="_blank" rel="noopener noreferrer" className="motor-modal-wa">
                  Consultar con Sergio
                </a>
                <a href={waLink(EMANUEL, sel)} target="_blank" rel="noopener noreferrer" className="motor-modal-wa alt">
                  Consultar con Emanuel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
