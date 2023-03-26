/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        gray: {
          50: '#f4f5f7',
          100: '#e3e5ea',
          200: '#cbced6',
          300: '#a6abba',
          400: '#7b8295',
          500: '#5f667b',
          600: '#525668',
          700: '#464958',
          800: '#3f414b',
          900: '#31323a',
        },
        slate: {
          50: '#f4f5f7',
          100: '#e3e5ea',
          200: '#caced7',
          300: '#a5aabb',
          400: '#798197',
          500: '#5e667c',
          600: '#50556a',
          700: '#454959',
          800: '#3e404c',
          900: '#2b2c34',
        },
        primary: {
          50: '#eff6ff',
          100: '#daeaff',
          200: '#bddaff',
          300: '#90c4ff',
          400: '#5ca3fe',
          500: '#367efb',
          600: '#2965f1',
          700: '#1849dd',
          800: '#1a3cb3',
          900: '#1b388d',
        },
      },
    },
  },
  plugins: [],
}
