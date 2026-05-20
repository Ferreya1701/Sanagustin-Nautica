'use client'
import { useState } from 'react'
import Icon from './Icon'

/**
 * Muestra la foto del motor desde /public/motores/{slug}.png
 * Si el archivo todavía no existe, muestra un placeholder de marca.
 * Cuando cargues la foto oficial con ese nombre, aparece automáticamente.
 */
export default function ProductImage({
  slug,
  alt,
  size = 40,
}: {
  slug: string
  alt: string
  size?: number
}) {
  const [error, setError] = useState(false)

  if (error) {
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
      src={`/motores/${slug}.png`}
      alt={alt}
      className="motor-img"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}
