import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../hooks/useGSAP'
import { useLang } from '../context/LanguageContext'
import type { Companion } from '../data/companions'
import CompanionPlaceholder from './CompanionPlaceholder'

gsap.registerPlugin(ScrollTrigger)

interface CompanionCardProps {
  companion: Companion
  index: number
}

export default function CompanionCard({ companion, index }: CompanionCardProps) {
  const { t2, lang } = useLang()
  const rootRef = useRef<HTMLDivElement>(null)

  // 2.5D parallax: name layer, figure layer and glow drift at different
  // speeds as the card scrolls through the viewport.
  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const name = root.querySelector('[data-layer="name"]')
      const figure = root.querySelector('[data-layer="figure"]')
      const glow = root.querySelector('[data-layer="glow"]')

      const ctx = gsap.context(() => {
        gsap.to(name, {
          yPercent: -22,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
        gsap.to(figure, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        })
        gsap.to(glow, {
          yPercent: 14,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        })
      }, root)

      return () => ctx.revert()
    },
    { dependencies: [lang], scope: rootRef },
  )

  const fromX = index % 2 === 0 ? -60 : 60

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 80, x: fromX, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link
        to={`/companion/${companion.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-3xl"
        aria-label={t2(companion.name)}
      >
        <div className="glass relative overflow-hidden rounded-3xl px-6 pb-8 pt-10 transition-all duration-500 group-hover:shadow-gold-lg group-hover:-translate-y-1">
          {/* number badge */}
          <span className="absolute top-4 ltr:right-5 rtl:left-5 font-display text-sm text-gold/60">
            {lang === 'ar' ? toArabicNumber(companion.order) : companion.order}
          </span>

          {/* faded NAME behind the figure */}
          <div
            data-layer="name"
            className="will-parallax pointer-events-none absolute inset-x-0 top-[14%] z-0 flex justify-center"
          >
            <span className="name-behind whitespace-nowrap font-display text-[15vw] leading-none sm:text-[7rem] md:text-[6rem]">
              {t2(companion.name).split(' ')[0]}
            </span>
          </div>

          {/* drifting glow */}
          <div
            data-layer="glow"
            className="will-parallax pointer-events-none absolute left-1/2 top-[10%] z-0 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: `hsl(${companion.accent} 80% 60% / 0.22)` }}
          />

          {/* figure */}
          <div
            data-layer="figure"
            className="will-parallax relative z-10 mx-auto h-64 w-full"
          >
            <CompanionPlaceholder
              id={companion.id}
              accent={companion.accent}
              className="h-full"
            />
          </div>

          {/* text BELOW the image */}
          <div className="relative z-10 mt-6 text-center">
            <h3 className="font-display text-2xl text-gradient-gold sm:text-3xl">
              {t2(companion.name)}
            </h3>
            <p className="mt-1 font-display text-sm text-gold/70">
              {t2(companion.title)}
            </p>
            <div className="hairline mx-auto my-4 w-2/3" />
            <p className="font-body text-sm leading-relaxed text-[#cfc9b8]/85">
              {t2(companion.summary)}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-body text-sm text-gold transition-colors group-hover:text-gold-light">
              {/* arrow flips with direction */}
              <span>{lang === 'ar' ? 'قراءة السيرة' : 'Read biography'}</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* hover sheen */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </div>
      </Link>
    </motion.div>
  )
}

function toArabicNumber(n: number): string {
  return n.toString().replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d])
}
