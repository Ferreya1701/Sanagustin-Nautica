'use client'
import { useState } from 'react'

/**
 * Fondo del hero con fallback en cascada:
 *   1) /public/hero.mp4   (video de embarcación, loop silencioso)
 *   2) /public/hero.jpg   (foto de embarcación)
 *   3) gradiente animado de marca (si no hay ningún archivo)
 *
 * Dejá tu archivo en /public con ese nombre y aparece automáticamente.
 */
export default function HeroBackground() {
  const [stage, setStage] = useState<'video' | 'image' | 'none'>('video')

  if (stage === 'video') {
    return (
      <video
        className="hero-bg-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setStage('image')}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    )
  }

  if (stage === 'image') {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src="/hero.jpg"
        alt=""
        aria-hidden="true"
        className="hero-bg-media"
        onError={() => setStage('none')}
      />
    )
  }

  return null
}
