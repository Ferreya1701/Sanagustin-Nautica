'use client'
import { useState } from 'react'
import { site } from '@/data/site'

/**
 * Fondo del hero según site.heroMedia:
 *   'none'  → no renderiza nada (queda el gradiente animado de marca)
 *   'video' → /public/hero.mp4 (loop silencioso)
 *   'image' → /public/hero.jpg
 * Si el archivo configurado falla, cae al gradiente sin romper nada.
 */
export default function HeroBackground() {
  const mode = site.heroMedia as string
  const [failed, setFailed] = useState(false)

  if (mode === 'none' || failed) return null

  if (mode === 'video') {
    return (
      <video
        className="hero-bg-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setFailed(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    )
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/hero.jpg"
      alt=""
      aria-hidden="true"
      className="hero-bg-media"
      onError={() => setFailed(true)}
    />
  )
}
