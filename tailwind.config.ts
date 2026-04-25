import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F4',
        graphite: '#1A1A19',
        stone: '#8A8A85',
        rule: '#E5E2DA',
        sage: {
          DEFAULT: '#5C7561',
          deep: '#3F5244',
          tint: '#EAEFE9',
          light: 'rgba(234, 239, 233, 0.4)',
        },
        body: '#3A3A37',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
        tight: '-0.04em',
        btn: '0.15em',
      },
      fontSize: {
        'eyebrow': ['11px', { lineHeight: '1.4', fontWeight: '500' }],
        'hero': ['clamp(36px, 5.5vw, 56px)', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        'section': ['clamp(28px, 4vw, 38px)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
      },
    },
  },
  plugins: [],
}

export default config
