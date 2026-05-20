'use client'
import { useState } from 'react'
import Icon from './Icon'

/**
 * Muestra la foto del motor desde /public/motores/{src}.png
 * Si `src` es null (foto no cargada todavía) muestra el placeholder de marca
 * SIN hacer ningún request (cero errores 404 en consola).
 */
export default function ProductImage({
  src,
  alt,
  size = 40,
}: {
  src: string | null
  alt: string
  size?: number
}) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div className="motor-img-placeholder" aria-label={alt}>
        <Icon name="motor" size={size} />
        <span className="motor-img-placeholder-tag">Mercury</span>
      </div>
    )
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={`/motores/${src}.png`}
      alt={alt}
      className="motor-img"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}
