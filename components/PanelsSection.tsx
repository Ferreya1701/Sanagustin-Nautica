'use client'
import { useState, useEffect, useRef } from 'react'

const panels = [
  {
    id: 'accesorios',
    label: 'Aceites &\nAccesorios',
    labelShort: 'Aceites & Accesorios',
    number: '01',
    icon: '🔧',
    description:
      'Aceites marinos de primera línea, repuestos originales, equipamiento de seguridad y todo lo que necesitás para mantener tu embarcación en óptimas condiciones.',
    cta: 'Ver Accesorios',
    href: '#accesorios',
    bg: 'linear-gradient(160deg, #0f3a5c 0%, #011721 100%)',
    accent: '#c8cded',
  },
  {
    id: 'motores',
    label: 'Motores\nFuera de Borda',
    labelShort: 'Motores F/B',
    number: '02',
    icon: '⚡',
    description:
      'Distribuidores oficiales de las mejores marcas. Motores de 2,5 HP hasta 350 HP para toda aplicación: pesca, deportivo, recreativo y trabajo.',
    cta: 'Ver Motores',
    href: '#motores',
    bg: 'linear-gradient(160deg, #0a1e2e 0%, #0f4363 100%)',
    accent: '#c8cded',
  },
  {
    id: 'cascos',
    label: 'Cascos',
    labelShort: 'Cascos',
    number: '03',
    icon: '🚤',
    description:
      'Amplio stock de embarcaciones: runabouts, semi-rígidos, lanchas de pesca y más. Modelos para cada actividad y presupuesto.',
    cta: 'Ver Cascos',
    href: '#cascos',
    bg: 'linear-gradient(160deg, #061a27 0%, #0f4363 100%)',
    accent: '#c8cded',
  },
  {
    id: 'usados',
    label: 'Usados\nSeleccionados',
    labelShort: 'Usados',
    number: '04',
    icon: '✅',
    description:
      'Embarcaciones y motores usados con inspección técnica completa. Todos los usados tienen garantía de calidad Sanagustin Náutica.',
    cta: 'Ver Usados',
    href: '#usados',
    bg: 'linear-gradient(160deg, #0f2d42 0%, #011721 100%)',
    accent: '#c8cded',
  },
  {
    id: 'atencion',
    label: 'Atención\nPersonalizada',
    labelShort: 'Atención',
    number: '05',
    icon: '🤝',
    description:
      'Asesoramiento especializado para encontrar la combinación perfecta de motor y embarcación. Financiación, patentamiento y soporte técnico.',
    cta: 'Contactarnos',
    href: '#contacto',
    bg: 'linear-gradient(160deg, #1d1d1b 0%, #0f4363 100%)',
    accent: '#c8cded',
  },
]

export default function PanelsSection() {
  const [active, setActive] = useState(1) // motores activo por defecto
  const sectionRef = useRef<HTMLElement>(null)

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) obs.disconnect() },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section
        id="categorias"
        className="panels-section"
        ref={sectionRef}
      >
        {panels.map((p, i) => (
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
            {/* Background gradient */}
            <div className="panel-bg" style={{ background: p.bg }} />

            {/* Dark overlay */}
            <div className="panel-overlay" />

            {/* Panel number */}
            <span className="panel-number">{p.number}</span>

            {/* Vertical label (collapsed state) */}
            <span className="panel-label-vertical">{p.labelShort}</span>

            {/* Expanded content */}
            <div className="panel-content">
              <span className="panel-content-icon">{p.icon}</span>
              <h2 className="panel-content-title">
                <span>{p.number} — Categoría</span>
                {p.label.split('\n').map((line, idx) => (
                  <span key={idx} style={{ display: 'block', fontStyle: 'normal', fontSize: 'inherit', letterSpacing: 'inherit', color: 'var(--white)', fontFamily: 'inherit', textTransform: 'inherit', fontWeight: 'inherit' }}>
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
                  handleClick(p.href)
                }}
              >
                {p.cta} →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Mobile dots */}
      <div className="panels-dots">
        {panels.map((p, i) => (
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
