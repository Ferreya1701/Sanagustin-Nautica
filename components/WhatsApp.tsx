export default function WhatsApp() {
  const contacts = [
    { name: 'Sergio', role: 'Asesoramiento', phone: '543426487636' },
    { name: 'Emanuel', role: 'Asesoramiento', phone: '543425111428' },
  ]

  return (
    <div className="whatsapp-stack">
      {contacts.map((c) => (
        <a
          key={c.name}
          href={`https://wa.me/${c.phone}?text=Hola%20${c.name}%2C%20vi%20su%20web%20y%20quisiera%20consultar%20sobre%20productos%20de%20Sanagustin%20N%C3%A1utica.`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label={`WhatsApp ${c.name}`}
        >
          {/* Icono WhatsApp futurista con gradiente */}
          <span className="whatsapp-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id={`wg-${c.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#d4f5e2" stopOpacity="1"/>
                </linearGradient>
              </defs>
              <path
                fill={`url(#wg-${c.name})`}
                d="M12.001 2C6.479 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.014L2.07 21.8a.75.75 0 0 0 .928.928l4.855-1.26A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12.001 2ZM8.593 7.37a.96.96 0 0 1 .7.03c.228.1.4.32.563.58.223.356.89 1.758.965 1.908.076.15.127.323.026.518-.1.195-.15.316-.298.487-.149.17-.313.381-.447.513-.149.149-.304.31-.13.609.174.298.773 1.274 1.658 2.063.94.84 1.733 1.1 2.032 1.224.298.124.472.103.647-.063.174-.165.747-.872.946-1.17.199-.299.398-.249.671-.15.274.1 1.74.82 2.039.97.298.149.497.223.572.348.075.124.075.72-.174 1.415-.249.695-1.47 1.365-2.015 1.415-.546.05-1.043.224-3.507-.746-2.986-1.17-4.876-4.213-5.024-4.412-.149-.2-1.218-1.62-1.218-3.09s.77-2.191.993-2.49c.222-.298.497-.373.697-.373Z"
              />
            </svg>
          </span>
          <span className="whatsapp-label">
            <span className="whatsapp-name">{c.name}</span>
            <span className="whatsapp-role">{c.role}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
