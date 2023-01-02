/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
    },
    screen: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
