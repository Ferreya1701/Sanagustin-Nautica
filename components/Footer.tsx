import Image from 'next/image'
import Icon from './Icon'
import Reveal from './Reveal'
import { site } from '@/data/site'

const garantias = [
  { icon: 'usado' as const, titulo: 'Distribuidor Oficial', texto: 'Productos Mercury con garantía oficial de fábrica.' },
  { icon: 'accesorio' as const, titulo: 'Service & Repuestos', texto: 'Servicio técnico especializado y repuestos originales.' },
  { icon: 'clock' as const, titulo: '+20 años', texto: 'Trayectoria y experiencia en el rubro náutico.' },
  { icon: 'atencion' as const, titulo: 'Asesoramiento', texto: 'Te ayudamos a elegir el equipo ideal para vos.' },
]

export default function Footer() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapaQuery)}&output=embed`
  const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(site.mapaQuery)}`

  return (
    <>
      {/* Franja de garantías / marca oficial */}
      <section className="garantias">
        <div className="container">
          <div className="garantias-grid">
            {garantias.map((g, i) => (
              <Reveal key={g.titulo} className="garantia-item" variant="up" delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <span className="garantia-icon"><Icon name={g.icon} size={26} /></span>
                <div>
                  <h4>{g.titulo}</h4>
                  <p>{g.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer principal */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Marca */}
            <div className="footer-brand-col">
              <Image src="/logo.png" alt={site.nombre} width={150} height={150} className="footer-logo-img" />
              <p className="footer-desc">
                {site.tagline}. Motores fuera de borda, cascos, accesorios y atención personalizada en {site.ciudad}.
              </p>
              {(site.social.instagram || site.social.facebook) && (
                <div className="footer-social">
                  {site.social.instagram && (
                    <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
                  )}
                  {site.social.facebook && (
                    <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={20} /></a>
                  )}
                </div>
              )}
            </div>

            {/* Contacto */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contacto</h4>
              <ul className="footer-list">
                <li><Icon name="pin" size={16} /> {site.direccion}</li>
                <li><Icon name="clock" size={16} /> {site.horario}</li>
                <li><Icon name="mail" size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
                {site.asesores.map((a) => (
                  <li key={a.nombre}>
                    <Icon name="phone" size={16} /> {a.nombre}: <a href={`https://wa.me/${a.telefono}`} target="_blank" rel="noopener noreferrer">{a.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mapa */}
            <div className="footer-col">
              <h4 className="footer-col-title">Ubicación</h4>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="footer-map">
                <iframe
                  src={mapsSrc}
                  title={`Ubicación de ${site.nombre}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="footer-map-cta">Cómo llegar →</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {site.nombre} · Todos los derechos reservados</span>
            <div className="footer-links">
              <a href="#categorias">Categorías</a>
              <a href="#motores">Motores</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
