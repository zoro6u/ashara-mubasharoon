import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLang } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { t } = useTranslation()
  const { lang, toggle } = useLang()

  return (
    <button
      onClick={toggle}
      aria-label={t('lang.label')}
      className="group relative flex items-center gap-2 rounded-full border border-gold/30 bg-ink-700/60 px-4 py-2 text-sm text-gold transition-all hover:border-gold/60 hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      <svg
        className="h-4 w-4 opacity-80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
      {/* shows the OTHER language as the action label */}
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-display tracking-wide"
      >
        {t('lang.toggle')}
      </motion.span>
    </button>
  )
}
