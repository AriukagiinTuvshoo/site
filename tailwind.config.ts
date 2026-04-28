import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE0',
        'green': {
          50: '#f0f7ea',
          100: '#dbeecb',
          200: '#b9de99',
          300: '#8ec85e',
          400: '#6aad35',
          500: '#4f9020',
          600: '#3c7318',
          700: '#305c14',
          800: '#2D5016',
          900: '#1f3a0e',
          950: '#112008',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Noto Serif JP', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
