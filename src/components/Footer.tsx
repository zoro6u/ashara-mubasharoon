import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="relative z-10 border-t border-gold/10 bg-ink-900/80 px-6 py-10 text-center">
      <div className="mx-auto max-w-3xl">
        <svg viewBox="0 0 60 60" className="mx-auto mb-4 h-10 w-10 opacity-70">
          <g fill="none" stroke="#d4af37" strokeWidth="1.2">
            <circle cx="30" cy="30" r="16" />
            <path d="M30 12 L44 21 L44 39 L30 48 L16 39 L16 21 Z" />
          </g>
          <circle cx="30" cy="30" r="3" fill="#d4af37" />
        </svg>
        <p className="font-display text-base text-gold/80">{t('footer.rights')}</p>
        <p className="mx-auto mt-3 max-w-xl font-body text-xs leading-relaxed text-[#cfc9b8]/50">
          {t('footer.disclaimer')}
        </p>
        <p className="mt-4 font-body text-xs text-gold/30">
          ﴿وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنْصَارِ ... رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ﴾
        </p>
      </div>
    </footer>
  )
}
