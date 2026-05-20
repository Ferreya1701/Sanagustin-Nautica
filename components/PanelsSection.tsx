'use client'
import { useState, useEffect, useRef } from 'react'
import Icon from './Icon'
import { categorias } from '@/data/categorias'

export default function PanelsSection() {
  const [active, setActive] = useState(1) // motores activo por defecto
  const sectionRef = useRef<HTMLElement>(null)

  // Activación de panel desde el navbar
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail
      const idx = categorias.findIndex((p) => p.id === id)
      if (idx >= 0) setActive(idx)
    }
    window.addEventListener('sann:activate-panel', handler)
    return () => window.removeEventListener('sann:activate-panel', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section id="categorias" className="panels-section" ref={sectionRef}>
        {categorias.map((p, i) => (
          <div
            key={p.id}
            className={`panel${active === i ? ' active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
            aria-label={p.labelShort}
          >
            <div className="panel-bg" style={{ background: p.bg }} />
            <div className="panel-overlay" />
            <span className="panel-number">{p.number}</span>
            <span className="panel-label-vertical">{p.labelShort}</span>

            <div className="panel-content">
              <span className="panel-content-icon">
                <Icon name={p.icon} size={36} />
              </span>
              <h2 className="panel-content-title">
                <span>{p.number} — Categoría</span>
                {p.label.split('\n').map((line, idx) => (
                  <span
                    key={idx}
                    style={{ display: 'block', fontStyle: 'normal', fontSize: 'inherit', letterSpacing: 'inherit', color: 'var(--white)', fontFamily: 'inherit', textTransform: 'inherit', fontWeight: 'inherit' }}
                  >
                    {line}
                  </span>
                ))}
              </h2>
              <div className="panel-divider" />
              <p className="panel-content-desc">{p.description}</p>
              <button
                className="btn btn-outline"
                onClick={(e) => {
                  e.stopPropagation()
                  scrollTo(p.target)
                }}
              >
                {p.cta} →
              </button>
            </div>
          </div>
        ))}
      </section>

      <div className="panels-dots">
        {categorias.map((p, i) => (
          <button
            key={p.id}
            className={`panels-dot${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={p.labelShort}
          />
        ))}
      </div>
    </>
  )
}
