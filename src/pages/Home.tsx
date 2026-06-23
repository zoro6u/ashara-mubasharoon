import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import CompanionCard from '../components/CompanionCard'
import ParticleField from '../components/ParticleField'
import { companions } from '../data/companions'

export default function Home() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <section
        id="companions"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <ParticleField count={24} className="opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-16 text-center"
        >
          <h2 className="text-gradient-gold font-display text-4xl sm:text-5xl">
            {t('section.companionsTitle')}
          </h2>
          <div className="hairline mx-auto my-6 w-48" />
          <p className="mx-auto max-w-2xl font-body text-lg text-[#d8d2c2]/80">
            {t('section.companionsLead')}
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companions.map((c, i) => (
            <CompanionCard key={c.id} companion={c} index={i} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}
