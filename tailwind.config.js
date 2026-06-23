/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05070f',
          900: '#05070f',
          800: '#0a0e1c',
          700: '#0f1530',
          600: '#161d42',
        },
        navy: {
          DEFAULT: '#0b1024',
          light: '#141b3a',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f4d06f',
          deep: '#a8841f',
          glow: '#ffe9a8',
        },
        amber: {
          soft: '#e8b86d',
        },
      },
      fontFamily: {
        // Switched at runtime via the `lang` attribute on <html>
        arabic: ['"Aref Ruqaa"', '"Amiri"', '"Cairo"', 'serif'],
        'arabic-body': ['"Cairo"', '"Amiri"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(212, 175, 55, 0.45)',
        'gold-lg': '0 0 80px -20px rgba(212, 175, 55, 0.55)',
        'inner-glow': 'inset 0 0 60px -20px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'radial-gold':
          'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.18), transparent 60%)',
        'hero-veil':
          'linear-gradient(180deg, rgba(5,7,15,0) 0%, rgba(5,7,15,0.4) 60%, rgba(5,7,15,1) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.75', filter: 'blur(55px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rise-rays': {
          '0%, 100%': { opacity: '0.25', transform: 'translateY(0) scaleY(1)' },
          '50%': { opacity: '0.5', transform: 'translateY(-2%) scaleY(1.05)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 120s linear infinite',
        'spin-slower': 'spin-slow 240s linear infinite',
        'rise-rays': 'rise-rays 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
