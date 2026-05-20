'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Motores', href: '#motores' },
  { label: 'Cascos', href: '#cascos' },
  { label: 'Accesorios', href: '#accesorios' },
  { label: 'Usados', href: '#usados' },
  { label: 'Nosotros', href: '#atencion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a href="#inicio" className="navbar-brand" onClick={() => handleLink('#inicio')}>
              {/* SVG inline del logo Sanagustin Nautica */}
              <svg
                viewBox="0 0 130 65"
                height="42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Sanagustin Nautica logo"
              >
                {/* Casco superior - blade 1 */}
                <path
                  d="M18 24 Q40 8 90 16 Q110 20 118 22 L112 30 Q80 24 46 30 Q28 34 22 36 Z"
                  fill="currentColor"
                  opacity="0.95"
                />
                {/* Casco inferior - blade 2 */}
                <path
                  d="M22 38 Q50 50 96 42 Q110 39 118 36 L114 44 Q90 52 56 52 Q32 52 20 44 Z"
                  fill="currentColor"
                  opacity="0.95"
                />
                {/* Reflejo interior */}
                <path
                  d="M46 30 Q70 26 100 30 L96 36 Q68 32 48 36 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
              <div className="navbar-brand-text">
                <span className="navbar-brand-name">Sanagustin Náutica</span>
                <span className="navbar-brand-tag">Distribuidores Oficiales</span>
              </div>
            </a>

            {/* Desktop nav */}
            <ul className="navbar-nav">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); handleLink(l.href) }}>
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
            key={l.href}
            href={l.href}
            onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
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
