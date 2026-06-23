# العشرة المبشّرون بالجنّة · The Ten Companions Promised Paradise

A cinematic, animated, **bilingual (Arabic / English)** tribute website to the
ten Companions of the Prophet Muhammad ﷺ who were given glad tidings of Paradise
during their lifetimes.

> Faces are never depicted. All figures are abstract silhouettes with a glow
> where the face would be, out of respect for Islamic tradition.

## ✨ Features

- **Cinematic hero** — calligraphy-style title, animated light rays, drifting
  golden particles, and slow-rotating Islamic geometric patterns.
- **The Ten** — each with a face-less symbolic figure, the name as large faded
  text **behind** the figure, the biography **below**, and 2.5D parallax depth.
- **Scroll animations** — Framer Motion entrances + GSAP ScrollTrigger parallax
  (name, figure, and glow layers drift at different speeds).
- **Individual pages** — full biography per companion: lineage, virtues, role in
  Islam, notable events — fully bilingual.
- **Language toggle (عربي / English)** — switches *all* text, flips layout
  RTL ⇄ LTR, swaps fonts (Aref Ruqaa/Amiri/Cairo ⇄ Cormorant/EB Garamond), and
  persists the choice in `localStorage`.
- **Ambient audio** — looping non-musical wind, muted by default, smooth fade,
  floating mute/unmute button. Generates a synthesized wind fallback if no file.
- **Dark premium design** — deep navy/black + gold/amber, fully responsive.
- **Performance** — `will-change` hints, lazy-loaded images, reduced-motion aware.

## 🧱 Tech stack

React 18 · Vite · TypeScript · Tailwind CSS · Framer Motion · GSAP + ScrollTrigger ·
React Router · react-i18next

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## 🖼️ Adding real artwork & audio

- **Images:** drop `<id>.webp` into [`public/companions/`](public/companions/README.md).
  Faces must stay abstract (silhouette / light-over-face / back-view).
- **Audio:** drop `ambience.mp3` into [`public/audio/`](public/audio/README.md)
  (non-musical wind/ambience).

Both have working fallbacks, so the site runs fully without any assets.

## 📁 Structure

```
src/
├─ components/        Header, Hero, CompanionCard, AudioToggle, backgrounds…
├─ pages/             Home, CompanionPage, NotFound
├─ data/companions.ts Full bilingual biographies for all ten
├─ context/           LanguageContext (lang/dir/font + localStorage)
├─ hooks/useGSAP.ts   Reduced-motion-aware GSAP effect hook
└─ i18n.ts            UI strings (AR/EN)
```

## 🌙 Content note

Biographical content is provided for educational purposes and follows the
mainstream Sunni narration of the ten Companions
(العشرة المبشّرون بالجنّة) as related in Sunan al-Tirmidhi and other sources.
