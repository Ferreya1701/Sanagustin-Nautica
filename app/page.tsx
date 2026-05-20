import Navbar from '@/components/Navbar'
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
          <div className="container">
            <div className="hero-band-inner">
              <div className="hero-band-tag">Distribuidores Oficiales · Santa Fe</div>
              <h1>
                Tu mundo<br />
                <em>náutico</em>, aquí.
              </h1>
              <p>
                Motores, cascos, accesorios y atención personalizada.<br />
                Más de 20 años en el rubro, en Av. Aristobulo 9534.
              </p>
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
