# Sanagustin Náutica — Sitio Web

Sitio web profesional para Sanagustin Náutica.  
Stack: **Next.js 14 · TypeScript · Resend · Vercel**

---

## 📁 Estructura

```
sanagustin-nautica/
├── app/
│   ├── api/contact/route.ts   ← API de email con Resend
│   ├── globals.css            ← Sistema de diseño (colores de marca)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx             ← Navbar sticky con menú mobile
│   ├── PanelsSection.tsx      ← 5 paneles expansibles (estilo navalmotor)
│   ├── Contact.tsx            ← Formulario + info de contacto
│   └── WhatsApp.tsx           ← Botones flotantes WhatsApp
├── public/
│   └── (colocar logo.png aquí)
├── .env.example
└── next.config.mjs
```

---

## 🖼️ Logo

Copiá tu archivo de logo a `public/logo.png` y `public/logo-white.png`.  
El logo se muestra en el Navbar como SVG inline (en Navbar.tsx).  
Para usar la imagen real, reemplazá el SVG por:
```tsx
<Image src="/logo-white.png" alt="Sanagustin Náutica" height={44} width={180} />
```

---

## 🔑 Variables de Entorno

Creá un archivo `.env.local` copiando `.env.example`:

```bash
cp .env.example .env.local
```

Completá con tus datos reales:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=sanagustinnautica@gmail.com
RESEND_FROM_EMAIL=noreply@tudominio.com
```

> **Resend:** Obtené tu API key en https://resend.com/api-keys  
> **Dominio:** Verificá tu dominio en Resend o usá el sandbox `onboarding@resend.dev` para pruebas.

---

## 🐙 PASO 1 — GitHub

Abrí una terminal en la carpeta `sanagustin-nautica` y ejecutá:

```bash
# Inicializar repositorio git
git init
git add .
git commit -m "feat: Sanagustin Nautica website — initial release"

# Crear repositorio en GitHub (requiere GitHub CLI instalado)
gh repo create sanagustin-nautica --public --source=. --remote=origin --push

# Verificar
git remote -v
gh repo view --web
```

Si no tenés GitHub CLI, creá el repo manualmente en github.com y luego:

```bash
git remote add origin https://github.com/TU_USUARIO/sanagustin-nautica.git
git branch -M main
git push -u origin main
```

---

## ▲ PASO 2 — Vercel

### Opción A: Deploy desde GitHub (recomendado)

1. Ir a https://vercel.com/new
2. Importar el repositorio `sanagustin-nautica`
3. En **Environment Variables** agregar:
   - `RESEND_API_KEY` = tu key de Resend
   - `CONTACT_EMAIL` = sanagustinnautica@gmail.com
   - `RESEND_FROM_EMAIL` = noreply@tudominio.com
4. Click **Deploy**

### Opción B: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy (desde la carpeta del proyecto)
vercel

# Configurar variables de entorno en Vercel
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
vercel env add RESEND_FROM_EMAIL

# Deploy a producción
vercel --prod
```

---

## 📧 PASO 3 — Resend

1. Crear cuenta en https://resend.com
2. Ir a **API Keys** → **Create API Key** → copiar la key
3. Ir a **Domains** → **Add Domain** → verificar tu dominio
   - Si no tenés dominio propio, usá el from: `onboarding@resend.dev` para pruebas
4. Actualizar `RESEND_FROM_EMAIL` con el email del dominio verificado

---

## 🚀 Desarrollo local

```bash
npm install
cp .env.example .env.local
# Editar .env.local con las keys reales

npm run dev
# Abrir http://localhost:3000
```

---

## 🔄 Workflow de actualizaciones

```bash
# Crear rama para cambios
git checkout -b feat/nueva-seccion

# Hacer cambios...
git add .
git commit -m "feat: descripción del cambio"
git push origin feat/nueva-seccion

# Crear Pull Request
gh pr create --title "feat: descripción" --body "Detalles del cambio"

# Vercel hace deploy automático al mergear a main
```

---

## 📞 Contacto del sitio

| Campo | Valor |
|-------|-------|
| Dirección | Av. Aristobulo 9534 |
| Horario | Lun–Vie: 9:00 a 12:30 |
| Email | sanagustinnautica@gmail.com |
| WhatsApp Sergio | +54 342 648-7636 |
| WhatsApp Emanuel | +54 342 511-1428 |
