import { useEffect, useRef, type RefObject } from 'react'

interface UseGSAPOptions {
  /** re-run the effect when any of these change */
  dependencies?: unknown[]
  /** scope element (kept for API parity with @gsap/react) */
  scope?: RefObject<Element>
}

/**
 * Lightweight stand-in for @gsap/react's useGSAP.
 *
 * Runs the callback after mount (and when `dependencies` change), and calls
 * the returned cleanup on teardown. Respects prefers-reduced-motion by
 * skipping the animation setup entirely.
 */
export function useGSAP(
  callback: () => void | (() => void),
  options: UseGSAPOptions = {},
) {
  const { dependencies = [], scope } = options
  const cleanupRef = useRef<void | (() => void)>(undefined)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    cleanupRef.current = callback()
    return () => {
      if (typeof cleanupRef.current === 'function') cleanupRef.current()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return scope
}
