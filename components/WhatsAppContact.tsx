import React from 'react'
import Icon from './Icon'

const SERGIO  = '543426487636'
const EMANUEL = '543425111428'

const msgGeneral = 'Hola! Vi la web de Sanagustin Náutica y quisiera recibir asesoramiento. ¿Pueden ayudarme?'

function waLink(phone: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msgGeneral)}`
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M12.001 2C6.479 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.014L2.07 21.8a.75.75 0 0 0 .928.928l4.855-1.26A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12.001 2ZM8.593 7.37a.96.96 0 0 1 .7.03c.228.1.4.32.563.58.223.356.89 1.758.965 1.908.076.15.127.323.026.518-.1.195-.15.316-.298.487-.149.17-.313.381-.447.513-.149.149-.304.31-.13.609.174.298.773 1.274 1.658 2.063.94.84 1.733 1.1 2.032 1.224.298.124.472.103.647-.063.174-.165.747-.872.946-1.17.199-.299.398-.249.671-.15.274.1 1.74.82 2.039.97.298.149.497.223.572.348.075.124.075.72-.174 1.415-.249.695-1.47 1.365-2.015 1.415-.546.05-1.043.224-3.507-.746-2.986-1.17-4.876-4.213-5.024-4.412-.149-.2-1.218-1.62-1.218-3.09s.77-2.191.993-2.49c.222-.298.497-.373.697-.373Z" />
    </svg>
  )
}

export default function WhatsAppContact() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <div className="contacto-grid">
          {/* Info */}
          <div className="contacto-info">
            <span className="section-label">Contacto</span>
            <h2>¿Te <em>asesoramos?</em></h2>
            <p className="contacto-lead">
              Escribinos por WhatsApp y te respondemos al instante. Asesoramiento sin compromiso para
              encontrar el motor ideal para tu embarcación.
            </p>

            <div className="contacto-datos">
              <div className="contacto-dato">
                <Icon name="pin" size={20} />
                <span>Av. Aristobulo 9534</span>
              </div>
              <div className="contacto-dato">
                <Icon name="clock" size={20} />
                <span>Lunes a Viernes · 9:00 a 12:30 hs</span>
              </div>
              <div className="contacto-dato">
                <Icon name="mail" size={20} />
                <span>sanagustinnautica@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Asesores WhatsApp */}
          <div className="contacto-asesores">
            <a href={waLink(SERGIO)} target="_blank" rel="noopener noreferrer" className="asesor-card">
              <span className="asesor-wa"><WaIcon /></span>
              <span className="asesor-info">
                <span className="asesor-nombre">Sergio</span>
                <span className="asesor-num">+54 342 648-7636</span>
              </span>
              <span className="asesor-cta">Escribir →</span>
            </a>

            <a href={waLink(EMANUEL)} target="_blank" rel="noopener noreferrer" className="asesor-card">
              <span className="asesor-wa"><WaIcon /></span>
              <span className="asesor-info">
                <span className="asesor-nombre">Emanuel</span>
                <span className="asesor-num">+54 342 511-1428</span>
              </span>
              <span className="asesor-cta">Escribir →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
