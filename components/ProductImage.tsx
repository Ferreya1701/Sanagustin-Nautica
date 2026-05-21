'use client'
import { useState } from 'react'
import MotorIllustration from './MotorIllustration'

/**
 * Muestra la foto del motor desde /public/motores/{src}.png
 * Si `src` es null (foto no cargada todavía) muestra una ilustración de marca
 * SIN hacer ningún request (cero errores 404 en consola).
 */
export default function ProductImage({
  src,
  alt,
  size = 40,
  label,
}: {
  src: string | null
  alt: string
  size?: number
  /** Etiqueta de familia para mostrar en el placeholder (ej: "Verado") */
  label?: string
}) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div className="motor-img-placeholder" aria-label={alt}>
        <MotorIllustration size={size * 1.4} />
        {label && <span className="motor-ph-family">{label}</span>}
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
