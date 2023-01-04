/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-one': "url('/src/img/desktop/img1-desktop.jpg')",
        'desktop-two': "url('/src/img/desktop/img2-desktop.jpg')",
        'desktop-three': "url('/src/img/desktop/img1-desktop.jpg')",
        'desktop-four': "url('/src/img/desktop/img4-desktop.jpg')",
        'desktop-six': "url('/src/img/desktop/img6-desktop.jpg')",
        'desktop-eight': "url('/src/img/desktop/img8-desktop.jpg')",
        'desktop-eleven': "url('/src/img/desktop/img11-desktop.jpg')",
        'mobile-one': "url('/src/img/mobile/img1-mobile.jpg')",
        'mobile-two': "url('/src/img/mobile/img2-mobile.jpg')",
        'mobile-five': "url('/src/img/mobile/img5-mobile.jpg')",
        'mobile-seven': "url('/src/img/mobile/img7-mobile.jpg')",
        'mobile-nine': "url('/src/img/mobile/img9-mobile.jpg')",
        'mobile-ten': "url('/src/img/mobile/img10-mobile.jpg')",
      },
      textColor: {
        primary: `#CC2D4A`,
        secondary: `#8FA206`,
        third: `#61AEC0`,
      },
    },
    colors: {
      transparent: 'transparent',
      primary: `#CC2D4A`,
      secondary: `#8FA206`,
      third: `#61AEC0`,
      white: `#FFFFFF`,
      black: `#000000`,
    },
    fontFamily: {
      sans: ['Poppins', `sans-serif`],
    },
    fontSize: {
      sm: ['12px', '14px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      nax1: { max: '320px' },

      max2: { max: '639px' },

      sm: { min: '640px' },
      // => @media (min-width: 640px) { ... } / 320px
      md: { min: '768px' },
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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
