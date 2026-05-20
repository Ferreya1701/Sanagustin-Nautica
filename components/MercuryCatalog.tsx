'use client'
import { useState, useEffect } from 'react'
import ProductImage from './ProductImage'
import Reveal from './Reveal'
import { site, waLink } from '@/data/site'
import {
  type Familia,
  type Modelo,
  familiaInfo,
  modelos,
  filtros,
  descripcion,
  imgSources,
} from '@/data/motores'

function mensajeConsulta(m: Modelo) {
  return `Hola! Quisiera consultar el precio y disponibilidad del *Mercury ${m.hp} HP ${familiaInfo[m.fam].etiqueta}*. ¿Me pueden asesorar?`
}

export default function MercuryCatalog() {
  const [filtro, setFiltro] = useState<'Todos' | Familia>('Todos')
  const [sel, setSel] = useState<Modelo | null>(null)

  const visibles = filtro === 'Todos' ? modelos : modelos.filter((m) => m.fam === filtro)

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
        <Reveal as="div" className="catalog-header">
          <span className="section-label">Motores Fuera de Borda</span>
          <h2>Catálogo <em>Mercury</em></h2>
          <p>Distribuidores oficiales. Toda la gama Mercury, desde 2.5 HP hasta 600 HP. Tocá cada motor para ver el detalle y consultar precio.</p>
        </Reveal>

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

        <div className="catalog-grid">
          {visibles.map((m, i) => (
            <Reveal
              key={`${m.fam}-${m.hp}-${i}`}
              variant="up"
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="catalog-cell"
            >
            <div
              className="motor-card-v2"
              onClick={() => setSel(m)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSel(m)}
            >
              <div className="motor-card-img">
                <ProductImage sources={imgSources(m)} alt={`Mercury ${m.hp} HP ${familiaInfo[m.fam].etiqueta}`} size={38} />
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
            </Reveal>
          ))}
        </div>
      </div>

      {sel && (
        <div className="motor-modal-overlay" onClick={() => setSel(null)}>
          <div className="motor-modal" onClick={(e) => e.stopPropagation()}>
            <button className="motor-modal-close" onClick={() => setSel(null)} aria-label="Cerrar">×</button>

            <div className="motor-modal-img">
              <ProductImage sources={imgSources(sel)} alt={`Mercury ${sel.hp} HP ${familiaInfo[sel.fam].etiqueta}`} size={72} />
            </div>

            <div className="motor-modal-body">
              <span className={`motor-fam-badge fam-${sel.fam.replace(/\s+/g, '').toLowerCase()}`}>
                {familiaInfo[sel.fam].etiqueta}
              </span>
              <h3 className="motor-modal-title">Mercury {sel.hp} HP</h3>

              <div className="motor-modal-specs">
                <div className="motor-modal-spec"><span>Potencia</span><strong>{sel.hp} HP</strong></div>
                <div className="motor-modal-spec"><span>Configuración</span><strong>{sel.tipo}</strong></div>
                <div className="motor-modal-spec"><span>Línea</span><strong>{familiaInfo[sel.fam].etiqueta}</strong></div>
                <div className="motor-modal-spec"><span>Precio</span><strong>A consultar</strong></div>
              </div>

              <p className="motor-modal-desc">{descripcion(sel)}</p>

              <div className="motor-modal-btns">
                {site.asesores.map((a) => (
                  <a
                    key={a.nombre}
                    href={waLink(a.telefono, mensajeConsulta(sel))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`motor-modal-wa${a.nombre === site.asesores[1]?.nombre ? ' alt' : ''}`}
                  >
                    Consultar con {a.nombre}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
