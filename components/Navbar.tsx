'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks: { label: string; panel?: string; href?: string }[] = [
  { label: 'Motores', href: '#motores' },
  { label: 'Cascos', panel: 'cascos' },
  { label: 'Accesorios', panel: 'accesorios' },
  { label: 'Usados', panel: 'usados' },
  { label: 'Nosotros', panel: 'atencion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll a una sección por id (#inicio, #contacto, #categorias)
  const handleLink = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Activa el panel correspondiente y baja a la sección de categorías
  const handlePanel = (panel: string) => {
    setMenuOpen(false)
    window.dispatchEvent(new CustomEvent('sann:activate-panel', { detail: panel }))
    document.querySelector('#categorias')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a href="#inicio" className="navbar-brand" onClick={() => handleLink('#inicio')}>
              <Image
                src="/s-blanca.png"
                alt="Sanagustin Nautica"
                height={46}
                width={70}
                style={{ objectFit: 'contain' }}
                priority
              />
              <div className="navbar-brand-text">
                <span className="navbar-brand-name">Sanagustin Náutica</span>
                <span className="navbar-brand-tag">Distribuidores Oficiales</span>
              </div>
            </a>

            {/* Desktop nav */}
            <ul className="navbar-nav">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href ?? '#categorias'}
                    onClick={(e) => {
                      e.preventDefault()
                      l.href ? handleLink(l.href) : handlePanel(l.panel!)
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="navbar-cta"
                  onClick={(e) => { e.preventDefault(); handleLink('#contacto') }}
                >
                  Contactanos
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href ?? '#categorias'}
            onClick={(e) => {
              e.preventDefault()
              l.href ? handleLink(l.href) : handlePanel(l.panel!)
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          style={{ color: 'var(--lavender)' }}
          onClick={(e) => { e.preventDefault(); handleLink('#contacto') }}
        >
          Contacto
        </a>
      </div>
    </>
  )
}
