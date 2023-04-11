/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // minmain: 80vh,
  theme: {
    extend: {
      colors: {
        primary: '#237D52',
        primarycontainer:'#D1E8D6',
        secondary: '#92F7BC',
        tertiary: '#3B6471',
        tertiarycontainer:'#BFE9F8',
        surface:  '#002111',
        lightsurface: '#F8F3F3',
      }
    },
  },
  plugins: [],
}

