/**
 * Ilustración line-art de un motor fuera de borda.
 * Se usa como visual de marca mientras no haya foto real del modelo.
 * Vectorial: nítida y de peso mínimo.
 */
export default function MotorIllustration({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 120 150"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Cowling (tapa del motor) */}
      <rect x="36" y="16" width="48" height="46" rx="13" />
      {/* Franja de marca */}
      <line x1="44" y1="36" x2="76" y2="36" />
      {/* Pierna / midsection */}
      <path d="M52 62 L68 62 L65 100 L55 100 Z" />
      {/* Soporte de transom (abrazadera) */}
      <path d="M52 70 L38 72 L36 90 L50 90" />
      <circle cx="42" cy="80" r="2.2" />
      {/* Caja de engranajes / torpedo */}
      <rect x="40" y="100" width="54" height="18" rx="9" />
      {/* Skeg (aleta inferior) */}
      <path d="M62 118 L64 132 L72 118" />
      {/* Hélice */}
      <circle cx="98" cy="109" r="2.6" />
      <path d="M98 109 L108 103 M98 109 L108 115 M98 109 L95 100" />
    </svg>
  )
}
