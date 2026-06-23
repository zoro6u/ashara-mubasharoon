import { memo, useMemo } from 'react'

interface ParticleFieldProps {
  count?: number
  className?: string
}

/**
 * Floating golden dust particles. Each particle gets randomized
 * position/size/delay so the field never looks tiled. Animation is
 * opacity+transform only for smooth compositing.
 */
function ParticleField({ count = 40, className = '' }: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 7 + Math.random() * 10,
        opacity: 0.2 + Math.random() * 0.6,
      })),
    [count],
  )

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="will-float absolute rounded-full bg-gold-glow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 6px 1px rgba(244, 208, 111, 0.6)',
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export default memo(ParticleField)
