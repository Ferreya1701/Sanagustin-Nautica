import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HeroBackground from '@/components/HeroBackground'
import PanelsSection from '@/components/PanelsSection'
import MercuryCatalog from '@/components/MercuryCatalog'
import WhatsAppContact from '@/components/WhatsAppContact'
import WhatsApp from '@/components/WhatsApp'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Icon from '@/components/Icon'
import { site } from '@/data/site'
import { modelos, familiaInfo } from '@/data/motores'

const catalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Catálogo de motores fuera de borda Mercury',
  numberOfItems: modelos.length,
  itemListElement: modelos.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: `Mercury ${m.hp} HP ${familiaInfo[m.fam].etiqueta}`,
      category: 'Motor fuera de borda',
      brand: { '@type': 'Brand', name: 'Mercury Marine' },
    },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <a href="#categorias" className="skip-link">Saltar al contenido</a>
      <ScrollProgress />
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
              <div className="hero-band-tag">{site.tagline} · {site.ciudad}</div>
              <h1>
                Tu mundo<br />
                <em>náutico</em>, aquí.
              </h1>
              <p>
                Motores, cascos, accesorios y atención personalizada.<br />
                Más de 20 años en el rubro, en {site.direccion}.
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
                {site.direccion}
              </div>
              <div className="data-strip-item">
                <Icon name="clock" size={18} />
                {site.horarioCorto}
              </div>
              <div className="data-strip-item">
                <Icon name="mail" size={18} />
                {site.email}
              </div>
              <div className="data-strip-item">
                <Icon name="phone" size={18} />
                {site.asesores[0].display}
              </div>
            </div>
          </div>
        </div>

        {/* Contacto 100% WhatsApp */}
        <WhatsAppContact />
      </main>

      {/* Footer con garantías + mapa */}
      <Footer />

      {/* WhatsApp flotante */}
      <WhatsApp />
    </>
  )
}
