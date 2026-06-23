import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/**
 * Floating ambient-sound toggle.
 *
 * - Default MUTED (browser autoplay policy: audio only starts on a click).
 * - Smooth volume fade in/out.
 * - Loops a NON-MUSICAL ambient track (soft wind).
 *
 * AUDIO FILE: place a looping ambient clip at  /public/audio/ambience.mp3
 *   Suggested: soft desert wind / gentle breeze, ~1–3 min, seamless loop,
 *   no music and no instruments. A tiny synth-wind fallback is generated
 *   with the Web Audio API if the file is missing.
 */
const TARGET_VOLUME = 0.35
const FADE_MS = 1200

export default function AudioToggle() {
  const { t } = useTranslation()
  const [enabled, setEnabled] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)

  // Web Audio fallback (generated wind) when no file is present.
  const fallbackRef = useRef<{ ctx: AudioContext; gain: GainNode } | null>(null)

  useEffect(() => {
    const a = new Audio('/audio/ambience.mp3')
    a.loop = true
    a.preload = 'auto'
    a.volume = 0
    audioRef.current = a
    return () => {
      a.pause()
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current)
      fallbackRef.current?.ctx.close().catch(() => {})
    }
  }, [])

  function fadeTo(target: number, onDone?: () => void) {
    const a = audioRef.current
    if (!a) return
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current)
    const start = a.volume
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - t0) / FADE_MS, 1)
      a.volume = start + (target - start) * p
      if (fallbackRef.current) fallbackRef.current.gain.gain.value = a.volume * 0.12
      if (p < 1) fadeRef.current = requestAnimationFrame(step)
      else onDone?.()
    }
    fadeRef.current = requestAnimationFrame(step)
  }

  function startFallbackWind() {
    if (fallbackRef.current) return
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      const ctx = new Ctor()
      // filtered white noise ≈ soft wind
      const bufferSize = 2 * ctx.sampleRate
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1
      const noise = ctx.createBufferSource()
      noise.buffer = buffer
      noise.loop = true
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.value = 520
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.08
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 180
      lfo.connect(lfoGain).connect(filter.frequency)
      const gain = ctx.createGain()
      gain.gain.value = 0
      noise.connect(filter).connect(gain).connect(ctx.destination)
      noise.start()
      lfo.start()
      fallbackRef.current = { ctx, gain }
    } catch {
      /* Web Audio unavailable */
    }
  }

  async function toggle() {
    const a = audioRef.current
    if (!a) return

    if (!enabled) {
      try {
        await a.play()
        setEnabled(true)
        fadeTo(TARGET_VOLUME)
      } catch {
        // No file / autoplay blocked → use generated wind.
        startFallbackWind()
        fallbackRef.current?.ctx.resume().catch(() => {})
        setEnabled(true)
        fadeTo(TARGET_VOLUME)
      }
      setShowHint(false)
    } else {
      fadeTo(0, () => {
        a.pause()
        if (fallbackRef.current) fallbackRef.current.gain.gain.value = 0
      })
      setEnabled(false)
    }
  }

  return (
    <div className="fixed bottom-5 z-50 ltr:right-5 rtl:left-5">
      <AnimatePresence>
        {showHint && !enabled && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="glass-strong absolute bottom-16 ltr:right-0 rtl:left-0 w-52 rounded-xl px-3 py-2 text-xs text-[#d8d2c2]"
          >
            {t('audio.note')}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
        aria-label={enabled ? t('audio.disable') : t('audio.enable')}
        aria-pressed={enabled}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-ink-700/70 backdrop-blur transition-all hover:border-gold/60 hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        {enabled && (
          <span className="absolute inset-0 animate-ping rounded-full border border-gold/30" />
        )}
        <svg
          className="h-5 w-5 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 9v6h4l5 5V4L8 9H4z" />
          {enabled ? (
            <>
              <path d="M16 8.5a4 4 0 0 1 0 7" className="opacity-90" />
              <path d="M18.5 6a7.5 7.5 0 0 1 0 12" className="opacity-60" />
            </>
          ) : (
            <path d="M22 9l-6 6M16 9l6 6" className="text-gold/70" />
          )}
        </svg>
      </button>
    </div>
  )
}
