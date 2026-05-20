import React from 'react'
import Icon from './Icon'

const SERGIO  = '543426487636'
const EMANUEL = '543425111428'

const categorias = [
  {
    id: 'motores',
    icon: 'motor' as const,
    titulo: 'Motores Fuera de Borda',
    descripcion: 'Consultá disponibilidad, precios y financiación de motores nuevos.',
    mensaje: 'Hola! Vi la web de Sanagustin Náutica y quisiera consultar sobre *Motores Fuera de Borda*. ¿Me pueden asesorar?',
  },
  {
    id: 'cascos',
    icon: 'casco' as const,
    titulo: 'Cascos & Embarcaciones',
    descripcion: 'Encontrá la embarcación ideal para tu actividad y presupuesto.',
    mensaje: 'Hola! Vi la web de Sanagustin Náutica y quisiera consultar sobre *Cascos y Embarcaciones*. ¿Me pueden asesorar?',
  },
  {
    id: 'accesorios',
    icon: 'accesorio' as const,
    titulo: 'Aceites & Accesorios',
    descripcion: 'Aceites marinos, repuestos y equipamiento de primera línea.',
    mensaje: 'Hola! Vi la web de Sanagustin Náutica y quisiera consultar sobre *Aceites y Accesorios*. ¿Me pueden asesorar?',
  },
  {
    id: 'usados',
    icon: 'usado' as const,
    titulo: 'Usados Seleccionados',
    descripcion: 'Motores y embarcaciones usados con inspección técnica garantizada.',
    mensaje: 'Hola! Vi la web de Sanagustin Náutica y quisiera consultar sobre *Usados Seleccionados*. ¿Me pueden asesorar?',
  },
  {
    id: 'atencion',
    icon: 'atencion' as const,
    titulo: 'Atención Personalizada',
    descripcion: 'Necesito asesoramiento para elegir el equipo ideal para mi uso.',
    mensaje: 'Hola! Vi la web de Sanagustin Náutica y quisiera recibir *asesoramiento personalizado*. ¿Pueden ayudarme?',
  },
]

function waLink(phone: string, mensaje: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`
}

export default function WhatsAppContact() {
  return (
    <section id="contacto" className="wa-contact-section">
      <div className="container">

        {/* Header */}
        <div className="wa-contact-header">
          <span className="section-label">Contacto directo</span>
          <h2>¿En qué podemos<br /><em>asesorarte?</em></h2>
          <p>Elegí la categoría que te interesa y te respondemos al instante por WhatsApp.</p>
        </div>

        {/* Grid de categorías */}
        <div className="wa-grid">
          {categorias.map((cat) => (
            <div key={cat.id} className="wa-card">
              <div className="wa-card-icon"><Icon name={cat.icon} size={28} /></div>
              <h3 className="wa-card-title">{cat.titulo}</h3>
              <p className="wa-card-desc">{cat.descripcion}</p>

              <div className="wa-card-btns">
                <a
                  href={waLink(SERGIO, cat.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-card-btn"
                >
                  <WaIcon />
                  <span className="wa-btn-info">
                    <span className="wa-btn-name">Sergio</span>
                    <span className="wa-btn-num">342 648-7636</span>
                  </span>
                </a>

                <a
                  href={waLink(EMANUEL, cat.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-card-btn"
                >
                  <WaIcon />
                  <span className="wa-btn-info">
                    <span className="wa-btn-name">Emanuel</span>
                    <span className="wa-btn-num">342 511-1428</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="wa-info-strip">
          <div className="wa-info-item">
            <Icon name="pin" size={18} />
            <span>Av. Aristobulo 9534</span>
          </div>
          <div className="wa-info-divider" />
          <div className="wa-info-item">
            <Icon name="clock" size={18} />
            <span>Lun–Vie: 9:00 a 12:30 hs</span>
          </div>
          <div className="wa-info-divider" />
          <div className="wa-info-item">
            <Icon name="mail" size={18} />
            <span>sanagustinnautica@gmail.com</span>
          </div>
        </div>

      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <span className="wa-icon-circle">
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <defs>
          <linearGradient id="wag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#d4f5e2" />
          </linearGradient>
        </defs>
        <path fill="url(#wag)" d="M12.001 2C6.479 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.014L2.07 21.8a.75.75 0 0 0 .928.928l4.855-1.26A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12.001 2ZM8.593 7.37a.96.96 0 0 1 .7.03c.228.1.4.32.563.58.223.356.89 1.758.965 1.908.076.15.127.323.026.518-.1.195-.15.316-.298.487-.149.17-.313.381-.447.513-.149.149-.304.31-.13.609.174.298.773 1.274 1.658 2.063.94.84 1.733 1.1 2.032 1.224.298.124.472.103.647-.063.174-.165.747-.872.946-1.17.199-.299.398-.249.671-.15.274.1 1.74.82 2.039.97.298.149.497.223.572.348.075.124.075.72-.174 1.415-.249.695-1.47 1.365-2.015 1.415-.546.05-1.043.224-3.507-.746-2.986-1.17-4.876-4.213-5.024-4.412-.149-.2-1.218-1.62-1.218-3.09s.77-2.191.993-2.49c.222-.298.497-.373.697-.373Z"/>
      </svg>
    </span>
  )
}
