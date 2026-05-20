'use client'
import { useState, useRef, useEffect } from 'react'

const PRODUCTOS = [
  'Motores Fuera de Borda',
  'Cascos / Embarcaciones',
  'Aceites y Accesorios',
  'Usados Seleccionados',
  'Servicio Técnico',
  'Otro',
]

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', producto: '', mensaje: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')) }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Error al enviar')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ nombre: '', email: '', telefono: '', producto: '', mensaje: '' })
      }
    } catch {
      setErrorMsg('Error de conexión. Intentá de nuevo.')
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div className="reveal">
            <p className="hero-band-tag" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              Contacto
            </p>
            <h2 className="contact-info-title">Hablemos</h2>
            <p className="contact-info-sub">
              Asesoramiento personalizado sin compromiso. Nuestro equipo está listo para ayudarte
              a elegir el equipo ideal.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <div className="contact-item-label">Dirección</div>
                  <div className="contact-item-value">Avenida Aristobulo 9534</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div>
                  <div className="contact-item-label">Horario</div>
                  <div className="contact-item-value">Lun – Vie: 9:00 a 12:30 hs</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">
                    <a href="mailto:sanagustinnautica@gmail.com">
                      sanagustinnautica@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📱</div>
                <div>
                  <div className="contact-item-label">WhatsApp — Sergio</div>
                  <div className="contact-item-value">
                    <a href="https://wa.me/543426487636" target="_blank" rel="noopener noreferrer">
                      +54 342 648-7636
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📱</div>
                <div>
                  <div className="contact-item-label">WhatsApp — Emanuel</div>
                  <div className="contact-item-value">
                    <a href="https://wa.me/543425111428" target="_blank" rel="noopener noreferrer">
                      +54 342 511-1428
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            <div className="contact-form-box">
              <h3 className="form-title">Envianos tu consulta</h3>

              {status === 'success' ? (
                <div className="form-status success">
                  ✅ ¡Consulta enviada! Te respondemos a la brevedad.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="nombre">Nombre *</label>
                      <input
                        id="nombre"
                        name="nombre"
                        className="form-input"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="telefono">Teléfono</label>
                      <input
                        id="telefono"
                        name="telefono"
                        className="form-input"
                        placeholder="+54 342 ···"
                        value={form.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="producto">Interés en</label>
                    <select
                      id="producto"
                      name="producto"
                      className="form-select"
                      value={form.producto}
                      onChange={handleChange}
                    >
                      <option value="">Seleccioná un producto…</option>
                      {PRODUCTOS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      className="form-textarea"
                      placeholder="Contanos en qué podemos ayudarte…"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <div className="form-status error">⚠️ {errorMsg}</div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Enviando…' : 'Enviar Consulta →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
