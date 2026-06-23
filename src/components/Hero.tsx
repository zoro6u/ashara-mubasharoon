import { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import { useGSAP } from '../hooks/useGSAP'
import { useLang } from '../context/LanguageContext'
import GeometricBackground from './GeometricBackground'
import ParticleField from './ParticleField'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)

  // Parallax the background + title as the hero scrolls away.
  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const ctx = gsap.context(() => {
        gsap.to('[data-hero="bg"]', {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('[data-hero="content"]', {
          yPercent: -14,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
        })
      }, el)
      return () => ctx.revert()
    },
    { dependencies: [], scope: ref },
  )

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      ref={ref}
      className="vignette relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div data-hero="bg" className="absolute inset-0">
        <GeometricBackground />
        <ParticleField count={50} />
      </div>

      <motion.div
        data-hero="content"
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 font-body text-sm uppercase tracking-[0.35em] text-gold/70"
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          variants={item}
          className={`text-gradient-gold text-gradient-gold-shimmer font-display font-bold leading-tight ${
            lang === 'ar'
              ? 'text-5xl sm:text-6xl md:text-7xl'
              : 'text-4xl sm:text-5xl md:text-6xl'
          }`}
          style={{ textShadow: '0 0 60px rgba(212,175,55,0.25)' }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div variants={item} className="hairline mx-auto my-8 w-40" />

        <motion.p
          variants={item}
          className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-[#d8d2c2]/90 sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* hadith quote */}
        <motion.blockquote
          variants={item}
          className="glass mx-auto mt-10 max-w-2xl rounded-2xl px-6 py-5"
        >
          <p className="font-display text-base leading-loose text-gold-light/90 sm:text-lg">
            {t('hero.hadith')}
          </p>
          <footer className="mt-3 font-body text-xs tracking-wider text-gold/50">
            — {t('hero.hadithSource')}
          </footer>
        </motion.blockquote>

        <motion.a
          variants={item}
          href="#companions"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/5 px-8 py-3 font-display text-lg text-gold transition-all hover:bg-gold/15 hover:shadow-gold-lg"
        >
          {t('hero.cta')}
          <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
        </motion.a>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="mb-2 block font-body text-xs tracking-widest text-gold/50">
          {t('hero.scroll')}
        </span>
        <span className="mx-auto flex h-9 w-5 justify-center rounded-full border border-gold/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold/70" />
        </span>
      </motion.div>
    </section>
  )
}
