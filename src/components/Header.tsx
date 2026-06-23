import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLang } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gold/15 blur-md transition-all group-hover:bg-gold/30" />
            <svg viewBox="0 0 40 40" className="relative h-8 w-8">
              <g fill="none" stroke="#d4af37" strokeWidth="1.4">
                <circle cx="20" cy="20" r="11" />
                <path d="M20 7 L31 14 L31 26 L20 33 L9 26 L9 14 Z" />
                <path d="M9 14 L31 26 M31 14 L9 26 M20 7 L20 33" strokeOpacity="0.5" />
              </g>
              <circle cx="20" cy="20" r="2.4" fill="#f4d06f" />
            </svg>
          </span>
          <span
            className={`font-display text-lg tracking-wide text-gradient-gold sm:text-xl ${
              lang === 'ar' ? 'leading-loose' : ''
            }`}
          >
            {t('brand')}
          </span>
        </Link>

        <LanguageToggle />
      </div>
    </motion.header>
  )
}
