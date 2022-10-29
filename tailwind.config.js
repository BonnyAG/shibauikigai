/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      green: colors.green,
      'violet': {
        DEFAULT: '#662483',
        100: '#FFE8FF',
        200: '#FFBAFF',
        300: '#DC93F9',
        400: '#C39ED0',
        500: '#E096FD',
        600: '#BE76DA ',
        700: '#B46DD0',
        800: '#8C48A9',
        900: '#350053',
      }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
