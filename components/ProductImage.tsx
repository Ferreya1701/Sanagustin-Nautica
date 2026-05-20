'use client'
import { useState } from 'react'
import Icon from './Icon'

/**
 * Muestra la foto del motor probando varias fuentes en orden:
 *   1) foto específica del modelo   (ej: fourstroke-150.png)
 *   2) foto de la familia            (ej: fourstroke.png)
 *   3) placeholder de marca
 *
 * Así, con una sola foto por familia ya se cubre todo el catálogo,
 * y podés ir sumando fotos por modelo cuando las tengas.
 * Todos los archivos van en /public/motores/ en formato PNG.
 */
export default function ProductImage({
  sources,
  alt,
  size = 40,
}: {
  sources: string[]
  alt: string
  size?: number
}) {
  const [idx, setIdx] = useState(0)

  if (idx >= sources.length) {
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
      src={`/motores/${sources[idx]}.png`}
      alt={alt}
      className="motor-img"
      loading="lazy"
      onError={() => setIdx((i) => i + 1)}
    />
  )
}
