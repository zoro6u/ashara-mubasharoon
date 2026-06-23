import { memo } from 'react'

/**
 * Slow-moving Islamic geometric pattern + light rays.
 * Pure CSS/SVG, GPU-friendly (transform/opacity only).
 */
function GeometricBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* deep gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#141b3a_0%,#0a0e1c_45%,#05070f_100%)]" />

      {/* light rays */}
      <div className="absolute left-1/2 top-0 h-[120%] w-[140%] -translate-x-1/2 animate-rise-rays opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,#000_30%,transparent_75%)]">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(212,175,55,0.10)_8deg,transparent_16deg,transparent_28deg,rgba(212,175,55,0.08)_36deg,transparent_44deg,transparent_56deg,rgba(212,175,55,0.10)_64deg,transparent_72deg)]" />
      </div>

      {/* rotating geometric star pattern */}
      <div className="absolute -right-1/4 -top-1/4 h-[80vmin] w-[80vmin] animate-spin-slower opacity-[0.07]">
        <StarTile />
      </div>
      <div className="absolute -bottom-1/4 -left-1/4 h-[70vmin] w-[70vmin] animate-spin-slow opacity-[0.06]">
        <StarTile />
      </div>

      {/* gold bloom */}
      <div className="absolute left-1/2 top-1/4 h-[60vmin] w-[60vmin] -translate-x-1/2 animate-pulse-glow rounded-full bg-gold/10 blur-3xl" />

      {/* subtle grain via repeating dots */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,#d4af37_0.5px,transparent_0.5px)] [background-size:22px_22px]" />

      {/* bottom veil for legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-ink" />
    </div>
  )
}

function StarTile() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <defs>
        <pattern
          id="islamic-star"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#d4af37" strokeWidth="0.8">
            <path d="M25 2 L31 19 L48 19 L34 30 L40 47 L25 36 L10 47 L16 30 L2 19 L19 19 Z" />
            <circle cx="25" cy="25" r="14" />
            <rect x="11" y="11" width="28" height="28" transform="rotate(45 25 25)" />
          </g>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#islamic-star)" />
    </svg>
  )
}

export default memo(GeometricBackground)
