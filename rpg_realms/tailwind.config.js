/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
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
      },
      backgroundImage: {
        'tree': "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
        'dice': "Url('https://images.unsplash.com/photo-1632931124386-2576db31ab97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        'hex':"Url('https://images.freeimages.com/images/premium/previews/7198/7198147-light-green-scroll-and-grunge.jpg')",
        'greenabstract':"Url('https://images.unsplash.com/photo-1617957848715-3a374699f8eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

