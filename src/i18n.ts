import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * UI strings only. The biographical content lives in src/data/companions.ts
 * (already bilingual) and is selected by the active language at render time.
 */
export const resources = {
  ar: {
    translation: {
      brand: 'العشرة المبشّرون بالجنّة',
      nav: {
        home: 'الرئيسية',
        companions: 'الصحابة',
        about: 'عن الموقع',
        backHome: 'العودة إلى الرئيسية',
      },
      hero: {
        eyebrow: 'في ذكر',
        title: 'العَشَرةُ المُبشَّرونَ بالجنّة',
        subtitle:
          'عشرةٌ من أصحاب رسول الله ﷺ شهد لهم النبيُّ بالجنّة في حياتهم، فكانوا مناراتٍ في الإيمان والبذل والجهاد.',
        hadith:
          '«أبو بكرٍ في الجنّة، وعمرُ في الجنّة، وعثمانُ في الجنّة، وعليٌّ في الجنّة، وطلحةُ في الجنّة، والزُّبيرُ في الجنّة، وعبدُ الرحمن بن عوفٍ في الجنّة، وسعدٌ في الجنّة، وسعيدٌ في الجنّة، وأبو عُبيدةَ بن الجرّاحِ في الجنّة»',
        hadithSource: 'رواه الترمذي',
        scroll: 'انزل للقراءة',
        cta: 'تعرّف عليهم',
      },
      section: {
        companionsTitle: 'العَشَرةُ الكِرام',
        companionsLead:
          'اختر أحد الصحابة الكرام للاطّلاع على سيرته كاملةً، نسبه وفضائله ودوره في الإسلام.',
        readMore: 'قراءة السيرة',
      },
      page: {
        lineage: 'النسب',
        lifespan: 'المولد والوفاة',
        biography: 'السيرة',
        virtues: 'الفضائل والمناقب',
        role: 'الدور في الإسلام',
        notableEvents: 'مواقف ومشاهد',
        previous: 'السابق',
        next: 'التالي',
        companionOf: 'من العشرة المبشّرين بالجنّة',
      },
      audio: {
        enable: 'تشغيل الصوت المحيط',
        disable: 'كتم الصوت المحيط',
        note: 'صوت محيطٌ هادئ (رياحٌ خفيفة) — بلا موسيقى',
      },
      lang: {
        toggle: 'English',
        label: 'تبديل اللغة',
      },
      footer: {
        rights: 'صُنع بحبٍّ تخليدًا لسير الصحابة الكرام رضي الله عنهم',
        disclaimer:
          'هذا الموقع تعريفيٌّ. الصور رمزيّةٌ مجرّدة ولا تُظهر الوجوه احترامًا للتقاليد الإسلامية.',
      },
      placeholder: {
        note: 'ضع العمل الفنّي الحقيقي في /public/companions/',
      },
    },
  },
  en: {
    translation: {
      brand: 'The Ten Promised Paradise',
      nav: {
        home: 'Home',
        companions: 'Companions',
        about: 'About',
        backHome: 'Back to home',
      },
      hero: {
        eyebrow: 'In remembrance of',
        title: 'The Ten Companions Promised Paradise',
        subtitle:
          'Ten Companions of the Messenger of Allah ﷺ, for whom he bore witness of Paradise within their lifetimes — beacons of faith, sacrifice, and striving.',
        hadith:
          '“Abu Bakr is in Paradise, ʿUmar is in Paradise, ʿUthman is in Paradise, ʿAli is in Paradise, Talha is in Paradise, al-Zubayr is in Paradise, ʿAbd al-Rahman ibn ʿAwf is in Paradise, Saʿd is in Paradise, Saʿid is in Paradise, and Abu ʿUbaydah ibn al-Jarrah is in Paradise.”',
        hadithSource: 'Narrated by al-Tirmidhi',
        scroll: 'Scroll to read',
        cta: 'Meet them',
      },
      section: {
        companionsTitle: 'The Ten Noble Companions',
        companionsLead:
          'Choose one of the noble Companions to read his full biography — his lineage, virtues, and role in Islam.',
        readMore: 'Read biography',
      },
      page: {
        lineage: 'Lineage',
        lifespan: 'Birth & Passing',
        biography: 'Biography',
        virtues: 'Virtues & Merits',
        role: 'Role in Islam',
        notableEvents: 'Notable Events',
        previous: 'Previous',
        next: 'Next',
        companionOf: 'One of the Ten Promised Paradise',
      },
      audio: {
        enable: 'Enable ambient sound',
        disable: 'Mute ambient sound',
        note: 'Gentle ambient wind — no music',
      },
      lang: {
        toggle: 'عربي',
        label: 'Switch language',
      },
      footer: {
        rights:
          'Made with care, in tribute to the lives of the noble Companions (may Allah be pleased with them).',
        disclaimer:
          'This is an educational site. All imagery is symbolic and abstract and does not depict faces, out of respect for Islamic tradition.',
      },
      placeholder: {
        note: 'Drop real artwork into /public/companions/',
      },
    },
  },
}

export type AppLanguage = 'ar' | 'en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'ashara-lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

export default i18n
