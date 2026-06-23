import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ParticleField from '../components/ParticleField'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="vignette relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#141b3a_0%,#05070f_70%)]" />
      <ParticleField count={30} />
      <div className="relative z-10">
        <h1 className="text-gradient-gold font-display text-8xl">٤٠٤</h1>
        <p className="mt-4 font-body text-xl text-[#d8d2c2]/80">404</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full border border-gold/40 px-8 py-3 font-display text-gold transition-all hover:bg-gold/10 hover:shadow-gold"
        >
          {t('nav.backHome')}
        </Link>
      </div>
    </motion.section>
  )
}
