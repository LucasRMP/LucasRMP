const themes = require('daisyui/src/colors/themes')

const theme = {
  ...themes['[data-theme=dark]'],
  primary: '#2965F1',
  'base-100': '#2B2C34',
  neutral: '#31323A',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  daisyui: {
    themes: [
      'dracula',
      'light',
      {
        dark: theme,
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
