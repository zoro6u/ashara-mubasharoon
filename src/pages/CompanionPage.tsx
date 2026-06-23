import { useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import { useGSAP } from '../hooks/useGSAP'
import { useLang } from '../context/LanguageContext'
import { companions, getCompanion } from '../data/companions'
import CompanionPlaceholder from '../components/CompanionPlaceholder'
import ParticleField from '../components/ParticleField'

gsap.registerPlugin(ScrollTrigger)

export default function CompanionPage() {
  const { id = '' } = useParams()
  const { t } = useTranslation()
  const { t2, lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)

  const companion = getCompanion(id)
  const idx = companions.findIndex((c) => c.id === id)

  // Hero parallax for the figure + name on the detail page.
  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const ctx = gsap.context(() => {
        gsap.to('[data-d="name"]', {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('[data-d="figure"]', {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 1.2 },
        })
      }, el)
      return () => ctx.revert()
    },
    { dependencies: [id, lang], scope: ref },
  )

  if (!companion) return <Navigate to="/" replace />

  const prev = companions[(idx - 1 + companions.length) % companions.length]
  const next = companions[(idx + 1) % companions.length]
  const accent = companion.accent

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* ── Hero header ── */}
      <header
        ref={ref}
        className="vignette relative flex min-h-[88svh] items-center justify-center overflow-hidden pt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#141b3a_0%,#0a0e1c_50%,#05070f_100%)]" />
        <div
          className="absolute left-1/2 top-1/4 h-[60vmin] w-[60vmin] -translate-x-1/2 animate-pulse-glow rounded-full blur-3xl"
          style={{ background: `hsl(${accent} 80% 60% / 0.18)` }}
        />
        <ParticleField count={40} />

        {/* faded name behind */}
        <div
          data-d="name"
          className="will-parallax pointer-events-none absolute inset-x-0 top-[18%] z-0 flex justify-center px-4"
        >
          <span className="name-behind whitespace-nowrap font-display text-[22vw] leading-none sm:text-[16vw] lg:text-[12rem]">
            {t2(companion.name).split(' ')[0]}
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-gold/60"
          >
            {t('page.companionOf')}
          </motion.p>

          <div data-d="figure" className="will-parallax mx-auto h-72 w-full sm:h-80">
            <CompanionPlaceholder
              id={companion.id}
              accent={accent}
              variant="page"
              className="h-full"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-gradient-gold mt-6 font-display text-4xl font-bold sm:text-6xl"
          >
            {t2(companion.name)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-3 font-display text-lg text-gold/75 sm:text-xl"
          >
            {t2(companion.title)}
          </motion.p>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        {/* quick facts */}
        <motion.div
          {...fadeUp}
          className="glass -mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-2"
        >
          <Fact label={t('page.lineage')} value={t2(companion.lineage)} />
          <Fact label={t('page.lifespan')} value={t2(companion.lifespan)} />
        </motion.div>

        {/* biography */}
        <Section title={t('page.biography')} accent={accent}>
          <div className="space-y-5">
            {companion.biography[lang].map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="font-body text-lg leading-loose text-[#dad4c4]/90"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </Section>

        {/* virtues + role */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Section title={t('page.virtues')} accent={accent}>
            <ul className="space-y-3">
              {companion.virtues[lang].map((v, i) => (
                <motion.li
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                  className="flex items-start gap-3 font-body text-[#dad4c4]/90"
                >
                  <Star accent={accent} />
                  <span className="leading-relaxed">{v}</span>
                </motion.li>
              ))}
            </ul>
          </Section>

          <Section title={t('page.role')} accent={accent}>
            <p className="font-body text-lg leading-loose text-[#dad4c4]/90">
              {t2(companion.role)}
            </p>
          </Section>
        </div>

        {/* notable events */}
        <Section title={t('page.notableEvents')} accent={accent}>
          <ol className="relative space-y-6 ltr:border-l rtl:border-r border-gold/20 ltr:pl-6 rtl:pr-6">
            {companion.notableEvents[lang].map((e, i) => (
              <motion.li key={i} {...fadeUp} className="relative">
                <span
                  className="absolute top-1.5 h-3 w-3 rounded-full ltr:-left-[1.93rem] rtl:-right-[1.93rem]"
                  style={{
                    background: `hsl(${accent} 80% 62%)`,
                    boxShadow: `0 0 12px hsl(${accent} 80% 62%)`,
                  }}
                />
                <p className="font-body text-lg leading-relaxed text-[#dad4c4]/90">{e}</p>
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* prev / next */}
        <nav className="mt-16 flex flex-col items-stretch justify-between gap-4 sm:flex-row">
          <NavCard to={`/companion/${prev.id}`} label={t('page.previous')} name={t2(prev.name)} dir="prev" />
          <Link
            to="/"
            className="flex items-center justify-center rounded-xl border border-gold/20 px-6 py-4 font-display text-gold/80 transition-colors hover:border-gold/50 hover:text-gold"
          >
            {t('nav.backHome')}
          </Link>
          <NavCard to={`/companion/${next.id}`} label={t('page.next')} name={t2(next.name)} dir="next" />
        </nav>
      </div>
    </motion.article>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-ink-800/40 px-6 py-5">
      <p className="mb-1 font-body text-xs uppercase tracking-widest text-gold/50">{label}</p>
      <p className="font-display text-lg text-[#e9e3d2]">{value}</p>
    </div>
  )
}

function Section({
  title,
  accent,
  children,
}: {
  title: string
  accent: number
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className="mt-14"
    >
      <h2 className="mb-6 flex items-center gap-3 font-display text-2xl text-gradient-gold sm:text-3xl">
        <span
          className="inline-block h-6 w-1 rounded-full"
          style={{ background: `hsl(${accent} 80% 60%)` }}
        />
        {title}
      </h2>
      {children}
    </motion.section>
  )
}

function Star({ accent }: { accent: number }) {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-shrink-0"
      viewBox="0 0 24 24"
      fill={`hsl(${accent} 80% 62%)`}
    >
      <path d="M12 2l2.6 6.9L22 9.3l-5.2 4.6L18.3 22 12 17.8 5.7 22l1.5-8.1L2 9.3l7.4-.4z" />
    </svg>
  )
}

function NavCard({
  to,
  label,
  name,
  dir,
}: {
  to: string
  label: string
  name: string
  dir: 'prev' | 'next'
}) {
  return (
    <Link
      to={to}
      className="glass group flex flex-1 items-center gap-3 rounded-xl px-5 py-4 transition-all hover:shadow-gold"
    >
      {dir === 'prev' && (
        <Arrow className="rotate-180 rtl:rotate-0 group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
      )}
      <span className={dir === 'next' ? 'ms-auto ltr:text-right rtl:text-left' : ''}>
        <span className="block font-body text-xs uppercase tracking-widest text-gold/50">
          {label}
        </span>
        <span className="block font-display text-gold">{name}</span>
      </span>
      {dir === 'next' && (
        <Arrow className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      )}
    </Link>
  )
}

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-gold transition-transform ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
