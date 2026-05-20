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
  rangosHp,
  usos,
  usosDe,
  enRangoHp,
  descripcion,
  imgSources,
} from '@/data/motores'

function mensajeConsulta(m: Modelo) {
  return `Hola! Quisiera consultar el precio y disponibilidad del *Mercury ${m.hp} HP ${familiaInfo[m.fam].etiqueta}*. ¿Me pueden asesorar?`
}

function keyOf(m: Modelo) {
  return `${m.fam}-${m.hp}`
}

const MAX_COMPARA = 3

export default function MercuryCatalog() {
  const [filtro, setFiltro] = useState<'Todos' | Familia>('Todos')
  const [rango, setRango] = useState<string>('todos')
  const [uso, setUso] = useState<string>('Todos')
  const [sel, setSel] = useState<Modelo | null>(null)
  const [compara, setCompara] = useState<Modelo[]>([])
  const [showCompare, setShowCompare] = useState(false)

  const visibles = modelos.filter(
    (m) =>
      (filtro === 'Todos' || m.fam === filtro) &&
      enRangoHp(m, rango) &&
      (uso === 'Todos' || usosDe(m).includes(uso))
  )

  const hayFiltros = filtro !== 'Todos' || rango !== 'todos' || uso !== 'Todos'
  const limpiar = () => { setFiltro('Todos'); setRango('todos'); setUso('Todos') }

  // Bloquear scroll cuando hay un modal abierto
  const modalAbierto = !!sel || showCompare
  useEffect(() => {
    if (!modalAbierto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSel(null); setShowCompare(false) }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalAbierto])

  const isComparing = (m: Modelo) => compara.some((c) => keyOf(c) === keyOf(m))
  const toggleCompara = (m: Modelo) => {
    setCompara((prev) => {
      if (prev.some((c) => keyOf(c) === keyOf(m))) return prev.filter((c) => keyOf(c) !== keyOf(m))
      if (prev.length >= MAX_COMPARA) return prev
      return [...prev, m]
    })
  }

  return (
    <section id="motores" className="catalog-section">
      <div className="container">
        <Reveal as="div" className="catalog-header">
          <span className="section-label">Motores Fuera de Borda</span>
          <h2>Catálogo <em>Mercury</em></h2>
          <p>Distribuidores oficiales. Toda la gama Mercury, desde 2.5 HP hasta 600 HP. Tocá cada motor para ver el detalle, compará modelos y consultá precio.</p>
        </Reveal>

        {/* Filtro por familia */}
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

        {/* Filtros avanzados */}
        <div className="catalog-advanced">
          <label className="catalog-select">
            <span>Potencia</span>
            <select value={rango} onChange={(e) => setRango(e.target.value)}>
              {rangosHp.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </label>
          <label className="catalog-select">
            <span>Uso</span>
            <select value={uso} onChange={(e) => setUso(e.target.value)}>
              {usos.map((u) => (
                <option key={u} value={u}>{u === 'Todos' ? 'Todos los usos' : u}</option>
              ))}
            </select>
          </label>
          <span className="catalog-result-count">{visibles.length} modelos</span>
          {hayFiltros && (
            <button className="catalog-clear" onClick={limpiar}>Limpiar filtros ✕</button>
          )}
        </div>

        {filtro !== 'Todos' && <p className="catalog-fam-desc">{familiaInfo[filtro].desc}</p>}

        {/* Grid */}
        {visibles.length === 0 ? (
          <p className="catalog-empty">No hay modelos con esos filtros. <button onClick={limpiar}>Ver todos</button></p>
        ) : (
          <div className="catalog-grid">
            {visibles.map((m, i) => (
              <Reveal key={`${m.fam}-${m.hp}-${i}`} variant="up" delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} className="catalog-cell">
                <div
                  className={`motor-card-v2${isComparing(m) ? ' comparing' : ''}`}
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
                    <button
                      className={`motor-compare-btn${isComparing(m) ? ' active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleCompara(m) }}
                      title={isComparing(m) ? 'Quitar de comparar' : 'Agregar a comparar'}
                      aria-label="Comparar"
                    >
                      {isComparing(m) ? '✓ Comparando' : '+ Comparar'}
                    </button>
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
        )}
      </div>

      {/* Barra flotante de comparación */}
      {compara.length > 0 && (
        <div className="compare-bar">
          <div className="compare-bar-chips">
            <span className="compare-bar-title">Comparar:</span>
            {compara.map((m) => (
              <span key={keyOf(m)} className="compare-chip">
                {m.hp} HP {familiaInfo[m.fam].etiqueta}
                <button onClick={() => toggleCompara(m)} aria-label="Quitar">✕</button>
              </span>
            ))}
            {compara.length < MAX_COMPARA && (
              <span className="compare-hint">Podés sumar hasta {MAX_COMPARA}</span>
            )}
          </div>
          <div className="compare-bar-actions">
            <button className="compare-clear" onClick={() => setCompara([])}>Vaciar</button>
            <button
              className="compare-go"
              disabled={compara.length < 2}
              onClick={() => setShowCompare(true)}
            >
              Comparar ({compara.length})
            </button>
          </div>
        </div>
      )}

      {/* Modal de detalle */}
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
                <div className="motor-modal-spec"><span>Uso</span><strong>{usosDe(sel).join(', ')}</strong></div>
              </div>
              <p className="motor-modal-desc">{descripcion(sel)}</p>
              <div className="motor-modal-btns">
                {site.asesores.map((a, idx) => (
                  <a
                    key={a.nombre}
                    href={waLink(a.telefono, mensajeConsulta(sel))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`motor-modal-wa${idx === 1 ? ' alt' : ''}`}
                  >
                    Consultar con {a.nombre}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de comparación */}
      {showCompare && compara.length >= 2 && (
        <div className="motor-modal-overlay" onClick={() => setShowCompare(false)}>
          <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
            <button className="motor-modal-close" onClick={() => setShowCompare(false)} aria-label="Cerrar">×</button>
            <h3 className="compare-modal-title">Comparación de modelos</h3>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th></th>
                    {compara.map((m) => (
                      <th key={keyOf(m)}>
                        <div className="compare-th-img">
                          <ProductImage sources={imgSources(m)} alt={`Mercury ${m.hp} HP`} size={32} />
                        </div>
                        <span className={`motor-fam-badge fam-${m.fam.replace(/\s+/g, '').toLowerCase()}`}>
                          {familiaInfo[m.fam].etiqueta}
                        </span>
                        <div className="compare-th-name">Mercury {m.hp} HP</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Potencia</td>{compara.map((m) => <td key={keyOf(m)}><strong>{m.hp} HP</strong></td>)}</tr>
                  <tr><td>Configuración</td>{compara.map((m) => <td key={keyOf(m)}>{m.tipo}</td>)}</tr>
                  <tr><td>Línea</td>{compara.map((m) => <td key={keyOf(m)}>{familiaInfo[m.fam].etiqueta}</td>)}</tr>
                  <tr><td>Uso recomendado</td>{compara.map((m) => <td key={keyOf(m)}>{usosDe(m).join(', ')}</td>)}</tr>
                  <tr><td>Precio</td>{compara.map((m) => <td key={keyOf(m)}>A consultar</td>)}</tr>
                  <tr>
                    <td>Consultar</td>
                    {compara.map((m) => (
                      <td key={keyOf(m)}>
                        <a className="compare-wa" href={waLink(site.asesores[0].telefono, mensajeConsulta(m))} target="_blank" rel="noopener noreferrer">
                          WhatsApp →
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
