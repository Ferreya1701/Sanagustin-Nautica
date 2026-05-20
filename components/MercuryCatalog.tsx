'use client'
import { useState } from 'react'

const SERGIO = '543426487636'

type Familia = 'FourStroke' | 'Pro XS' | 'Verado' | 'SeaPro'

const familiaInfo: Record<Familia, { etiqueta: string; desc: string }> = {
  FourStroke: {
    etiqueta: '4 Tiempos',
    desc: 'Silenciosos, eficientes en combustible y confiables. Para uso recreativo, pesca y paseo.',
  },
  'Pro XS': {
    etiqueta: 'Pro XS',
    desc: 'Alto rendimiento para pesca deportiva. Máxima aceleración, velocidad y respuesta.',
  },
  Verado: {
    etiqueta: 'Verado',
    desc: 'Línea premium: máxima potencia, silencio y refinamiento para grandes embarcaciones.',
  },
  SeaPro: {
    etiqueta: 'SeaPro',
    desc: 'Uso comercial e intensivo. Durabilidad y confiabilidad reforzadas para trabajo diario.',
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

function waConsulta(modelo: Modelo) {
  const msg = `Hola! Quisiera consultar el precio y disponibilidad del *Mercury ${modelo.hp} HP ${familiaInfo[modelo.fam].etiqueta}*. ¿Me pueden asesorar?`
  return `https://wa.me/${SERGIO}?text=${encodeURIComponent(msg)}`
}

export default function MercuryCatalog() {
  const [filtro, setFiltro] = useState<'Todos' | Familia>('Todos')

  const visibles = filtro === 'Todos' ? modelos : modelos.filter((m) => m.fam === filtro)

  return (
    <section id="motores" className="catalog-section">
      <div className="container">
        <div className="catalog-header">
          <span className="section-label">Motores Fuera de Borda</span>
          <h2>Catálogo <em>Mercury</em></h2>
          <p>Distribuidores oficiales. Toda la gama Mercury, desde 2.5 HP hasta 600 HP. Consultá precio y disponibilidad de cada modelo.</p>
        </div>

        {/* Filtros por familia */}
        <div className="catalog-filters">
          {filtros.map((f) => (
            <button
              key={f}
              className={`catalog-filter${filtro === f ? ' active' : ''}`}
              onClick={() => setFiltro(f)}
            >
              {f === 'Todos' ? 'Todos' : familiaInfo[f].etiqueta}
            </button>
          ))}
        </div>

        {/* Descripción de la familia activa */}
        {filtro !== 'Todos' && (
          <p className="catalog-fam-desc">{familiaInfo[filtro].desc}</p>
        )}

        {/* Grid de modelos */}
        <div className="catalog-grid">
          {visibles.map((m, i) => (
            <div key={`${m.fam}-${m.hp}-${i}`} className="motor-card-v2">
              <span className={`motor-fam-badge fam-${m.fam.replace(/\s+/g, '').toLowerCase()}`}>
                {familiaInfo[m.fam].etiqueta}
              </span>
              <div className="motor-hp">
                {m.hp}<span>HP</span>
              </div>
              <div className="motor-tipo">{m.tipo}</div>
              <div className="motor-precio">
                <span className="motor-precio-label">Precio</span>
                <span className="motor-precio-valor">A consultar</span>
              </div>
              <a
                href={waConsulta(m)}
                target="_blank"
                rel="noopener noreferrer"
                className="motor-consultar"
              >
                Consultar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
