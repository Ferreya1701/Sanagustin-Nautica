import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { nombre, email, telefono, producto, mensaje } = body

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son requeridos' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@sanagustinnautica.com'
    const toEmail = process.env.CONTACT_EMAIL || 'contacto@sanagustinnautica.com'

    const { data, error } = await resend.emails.send({
      from: `San Agustín Náutica <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `Consulta de ${nombre} — ${producto || 'General'}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background:#f4f6fb;font-family:'Nunito Sans',Arial,sans-serif;">
          <div style="max-width:600px;margin:40px auto;background:#011721;border-radius:12px;overflow:hidden;border:1px solid #0f4363;">
            <div style="background:linear-gradient(135deg,#0f4363,#0a1e2e);padding:32px 24px;text-align:center;">
              <p style="font-size:2rem;margin:0;">⚓</p>
              <h1 style="color:#f4f6fb;font-size:1.4rem;margin:8px 0 4px;letter-spacing:0.08em;">SAN AGUSTÍN NÁUTICA</h1>
              <p style="color:#c8cded;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;margin:0;">Nueva consulta recibida</p>
            </div>
            <div style="padding:24px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;color:#706f6f;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;width:35%;font-family:monospace;">Nombre</td>
                  <td style="padding:10px 0;color:#f4f6fb;font-weight:600;">${escapeHtml(nombre)}</td>
                </tr>
                <tr style="border-top:1px solid #0f2d42;">
                  <td style="padding:10px 0;color:#706f6f;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;font-family:monospace;">Email</td>
                  <td style="padding:10px 0;color:#c8cded;">${escapeHtml(email)}</td>
                </tr>
                <tr style="border-top:1px solid #0f2d42;">
                  <td style="padding:10px 0;color:#706f6f;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;font-family:monospace;">Teléfono</td>
                  <td style="padding:10px 0;color:#f4f6fb;">${escapeHtml(telefono || 'No proporcionado')}</td>
                </tr>
                <tr style="border-top:1px solid #0f2d42;">
                  <td style="padding:10px 0;color:#706f6f;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;font-family:monospace;">Producto</td>
                  <td style="padding:10px 0;color:#f4f6fb;">${escapeHtml(producto || 'General')}</td>
                </tr>
              </table>
              <div style="margin-top:20px;padding:16px;background:#0a1e2e;border-radius:8px;border-left:3px solid #c8cded;">
                <p style="color:#706f6f;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;font-family:monospace;">Mensaje</p>
                <p style="color:#f4f6fb;margin:0;line-height:1.6;">${escapeHtml(mensaje)}</p>
              </div>
            </div>
            <div style="padding:16px 24px;background:#0a1e2e;border-top:1px solid #0f4363;text-align:center;">
              <p style="color:#706f6f;font-size:0.75rem;margin:0;">San Agustín Náutica — Sistema de consultas web</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
