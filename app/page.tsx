import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HeroBackground from '@/components/HeroBackground'
import PanelsSection from '@/components/PanelsSection'
import MercuryCatalog from '@/components/MercuryCatalog'
import WhatsAppContact from '@/components/WhatsAppContact'
import WhatsApp from '@/components/WhatsApp'
import Icon from '@/components/Icon'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero band */}
        <section id="inicio" className="hero-band">
          <HeroBackground />
          <div className="hero-band-overlay" />
          {/* Olas animadas inferiores */}
          <div className="hero-waves" aria-hidden="true">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path className="hero-wave-1" d="M0,64 C240,96 480,32 720,48 C960,64 1200,112 1440,72 L1440,120 L0,120 Z" />
              <path className="hero-wave-2" d="M0,80 C240,48 480,104 720,88 C960,72 1200,32 1440,64 L1440,120 L0,120 Z" />
            </svg>
          </div>
          <div className="container">
            <div className="hero-band-inner">
              <div className="hero-band-tag">Distribuidor Oficial Mercury · Santa Fe</div>
              <h1>
                Tu mundo<br />
                <em>náutico</em>, aquí.
              </h1>
              <p>
                Motores, cascos, accesorios y atención personalizada.<br />
                Más de 20 años en el rubro, en Av. Aristobulo 9534.
              </p>

              <div className="mercury-seal">
                <Image src="/mercury-logo.png" alt="Mercury" width={120} height={32} className="mercury-seal-logo" />
                <span className="mercury-seal-divider" />
                <span className="mercury-seal-label">
                  <Icon name="usado" size={15} /> Distribuidor Oficial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Expanding Panels */}
        <PanelsSection />

        {/* Catálogo Mercury */}
        <MercuryCatalog />

        {/* Data strip */}
        <div className="data-strip">
          <div className="container">
            <div className="data-strip-inner">
              <div className="data-strip-item">
                <Icon name="pin" size={18} />
                Av. Aristobulo 9534
              </div>
              <div className="data-strip-item">
                <Icon name="clock" size={18} />
                Lun–Vie: 9:00 a 12:30
              </div>
              <div className="data-strip-item">
                <Icon name="mail" size={18} />
                sanagustinnautica@gmail.com
              </div>
              <div className="data-strip-item">
                <Icon name="phone" size={18} />
                +54 342 648-7636
              </div>
            </div>
          </div>
        </div>

        {/* Contacto 100% WhatsApp */}
        <WhatsAppContact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-logo">Sanagustin Náutica</span>
            <span className="footer-copy">
              © {new Date().getFullYear()} Sanagustin Náutica · Todos los derechos reservados
            </span>
            <div className="footer-links">
              <a href="#categorias">Categorías</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <WhatsApp />
    </>
  )
}
