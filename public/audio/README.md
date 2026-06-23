# Ambient audio

Place a single looping ambient clip here named **`ambience.mp3`**.

## Requirements

- **NON-MUSICAL** — soft wind, gentle desert breeze, or faint flowing water.
- No music, no instruments, no vocals.
- Seamless loop, ~1–3 minutes, mono or stereo, ~128 kbps is plenty.

## Behaviour

- Starts **muted by default** (browser autoplay policy) and only plays after the
  user taps the floating speaker button (bottom corner).
- Volume **fades in/out** smoothly on toggle.
- If this file is missing, the app generates a soft synthesized "wind" via the
  Web Audio API as a fallback, so the toggle still works.

Free sources for suitable clips: Pixabay, Freesound (check the licence).
