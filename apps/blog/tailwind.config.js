const config = require('@rmp/ui/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
}
