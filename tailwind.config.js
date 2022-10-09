/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        sky: colors.sky,
      },
      fontFamily: {
        earlyFonyDiary: ['EarlyFontDiary', 'sans-serif'],
        nanum: ['Nanum Gothic', 'sans-serif'],
      },
      padding: {
        '2vw': '2vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '10vw': '10vw',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  important: true,
};