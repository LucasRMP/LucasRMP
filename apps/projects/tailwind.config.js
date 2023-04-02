const config = require('@rmp/ui/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
}
