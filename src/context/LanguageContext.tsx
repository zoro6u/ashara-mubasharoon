import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useTranslation } from 'react-i18next'
import type { AppLanguage } from '../i18n'
import type { LocalizedText } from '../data/companions'

interface LanguageContextValue {
  lang: AppLanguage
  dir: 'rtl' | 'ltr'
  isArabic: boolean
  setLang: (lang: AppLanguage) => void
  toggle: () => void
  /** pick the active-language string from a {ar,en} object */
  t2: (text: LocalizedText) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'ashara-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const [lang, setLangState] = useState<AppLanguage>(
    (i18n.language?.startsWith('en') ? 'en' : 'ar') as AppLanguage,
  )

  const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr'

  // Keep <html lang/dir> in sync so CSS fonts + direction flip globally.
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('lang', lang)
    html.setAttribute('dir', dir)
    i18n.changeLanguage(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage may be unavailable */
    }
  }, [lang, dir, i18n])

  const setLang = useCallback((next: AppLanguage) => setLangState(next), [])
  const toggle = useCallback(
    () => setLangState((prev) => (prev === 'ar' ? 'en' : 'ar')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      isArabic: lang === 'ar',
      setLang,
      toggle,
      t2: (text) => text[lang],
    }),
    [lang, dir, setLang, toggle],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
