import { memo, useState } from 'react'

interface CompanionPlaceholderProps {
  id: string
  /** HSL hue (deg) used to tint the glow */
  accent: number
  className?: string
  /** larger rendering for the detail page */
  variant?: 'card' | 'page'
}

/**
 * Symbolic, face-less representation of a companion.
 *
 * Renders real artwork from /public/companions/<id>.webp when present;
 * otherwise falls back to a generated SVG: a robed silhouette with a
 * radiant light where the face would be — faces are intentionally never
 * detailed, out of respect for Islamic tradition.
 *
 * ── To add real art: drop  <id>.webp  into  /public/companions/.
 *    Recommended: back-view / silhouette / light-over-face, ~900×1200,
 *    transparent or dark background.
 */
function CompanionPlaceholder({
  id,
  accent,
  className = '',
  variant = 'card',
}: CompanionPlaceholderProps) {
  const [hasImage, setHasImage] = useState(true)
  const glow = `hsl(${accent} 75% 62%)`
  const glowSoft = `hsl(${accent} 80% 70%)`

  return (
    <div className={`relative flex items-end justify-center ${className}`}>
      {/* halo behind the figure */}
      <div
        className="absolute left-1/2 top-[14%] h-[55%] w-[55%] -translate-x-1/2 animate-pulse-glow rounded-full blur-2xl"
        style={{ background: glow, opacity: 0.35 }}
      />

      {/* Real artwork (lazy) — hidden if the file isn't there yet */}
      {hasImage && (
        <img
          src={`/companions/${id}.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setHasImage(false)}
          className="will-float relative z-10 max-h-full w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
      )}

      {/* SVG fallback silhouette */}
      {!hasImage && (
        <svg
          viewBox="0 0 300 420"
          className="will-float relative z-10 h-full w-auto"
          style={{ animation: 'float 8s ease-in-out infinite' }}
          role="img"
          aria-label="Symbolic abstract figure (face not shown)"
        >
          <defs>
            <linearGradient id={`robe-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c2347" />
              <stop offset="55%" stopColor="#10162f" />
              <stop offset="100%" stopColor="#070a18" />
            </linearGradient>
            <radialGradient id={`face-${id}`} cx="50%" cy="42%" r="55%">
              <stop offset="0%" stopColor={glowSoft} stopOpacity="0.95" />
              <stop offset="45%" stopColor={glow} stopOpacity="0.5" />
              <stop offset="100%" stopColor={glow} stopOpacity="0" />
            </radialGradient>
            <filter id={`soft-${id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* radiant light where the face would be */}
          <circle cx="150" cy="120" r="95" fill={`url(#face-${id})`} />

          {/* head + shoulders + robe (back/abstract silhouette) */}
          <g filter={`url(#soft-${id})`}>
            {/* head veil */}
            <path
              d="M150 55
                 C112 55 96 88 100 124
                 C104 158 124 172 150 172
                 C176 172 196 158 200 124
                 C204 88 188 55 150 55 Z"
              fill={`url(#robe-${id})`}
            />
            {/* shoulders / cloak */}
            <path
              d="M150 150
                 C108 150 70 188 56 250
                 C44 305 40 360 40 410
                 L260 410
                 C260 360 256 305 244 250
                 C230 188 192 150 150 150 Z"
              fill={`url(#robe-${id})`}
            />
            {/* cloak fold highlights */}
            <path
              d="M150 175 L150 405"
              stroke={glow}
              strokeOpacity="0.12"
              strokeWidth="2"
            />
            <path
              d="M104 210 C92 280 90 350 96 405"
              stroke={glow}
              strokeOpacity="0.08"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M196 210 C208 280 210 350 204 405"
              stroke={glow}
              strokeOpacity="0.08"
              strokeWidth="2"
              fill="none"
            />
          </g>

          {/* rim light on the veil edge */}
          <path
            d="M150 55 C112 55 96 88 100 124"
            stroke={glowSoft}
            strokeOpacity="0.5"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      )}

      {/* ground reflection / shadow */}
      <div
        className="absolute bottom-0 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-[100%] blur-md"
        style={{ background: 'rgba(0,0,0,0.55)' }}
      />

      {variant === 'card' && !hasImage && (
        <span className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-wider text-gold/30">
          /public/companions/{id}.webp
        </span>
      )}
    </div>
  )
}

export default memo(CompanionPlaceholder)
