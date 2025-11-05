import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury color palette from .cursorrules
        'off-white': '#FAFAF8',
        'warm-beige': '#F5F1ED',
        'soft-taupe': '#D5C8BF',
        'warm-gray': '#9B8E82',
        'deep-charcoal': '#2D2D2D',
        'soft-gold': '#B68A3B',
        'gold-primary': '#B68A3B',
        'gold-dark': '#9b7533',
        'gold-light': '#E5D4A6',
        'gold-very-light': '#F5E8D0',
        'gold-luminous': '#FFF4E0',
        'gold-logo': '#D4AF37', // Classic gold/champagne color for logo
        'muted-charcoal': '#4A4A4A',
        // Additional semantic colors
        'cream': '#FAFAF8',
        'taupe': '#D5C8BF',
        'charcoal': '#2D2D2D',
        'gold': '#B68A3B',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'refined': '0.5px',
        'generous': '1px',
      },
      spacing: {
        // Extended spacing scale for luxury spacing
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
      },
      borderRadius: {
        'luxury': '8px',
        'luxury-md': '10px',
        'luxury-lg': '12px',
      },
      maxWidth: {
        'container': '1400px',
        'content': '1200px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      boxShadow: {
        'gold': '0 4px 12px rgba(201, 168, 118, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config

