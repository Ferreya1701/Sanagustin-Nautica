'use client'
import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Dirección de la animación */
  variant?: 'up' | 'left' | 'right' | 'zoom'
  /** Delay en cascada: 1..5 */
  delay?: 1 | 2 | 3 | 4 | 5
  /** Etiqueta HTML a renderizar (div por defecto) */
  as?: ElementType
  className?: string
  /** Re-animar cada vez que entra (por defecto solo una vez) */
  once?: boolean
}

export default function Reveal({
  children,
  variant = 'up',
  delay,
  as: Tag = 'div',
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Fallback: si el navegador no soporta IntersectionObserver, mostrar de una
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) obs.unobserve(entry.target)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  const classes = [
    'reveal',
    `reveal-${variant}`,
    delay ? `reveal-delay-${delay}` : '',
    visible ? 'visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  )
}
