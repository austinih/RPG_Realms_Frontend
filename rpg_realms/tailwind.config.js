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
        'tree': "url('https://images.unsplash.com/photo-1519567770579-c2fc5436bcf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        'dice': "Url('https://images.unsplash.com/photo-1632931124386-2576db31ab97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        'abstract':"Url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
        'greenabstract':"Url('https://images.unsplash.com/photo-1517322479358-df90f951f87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        'stars': "url('https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80')",
        'blueabstract':"url('https://images.unsplash.com/photo-1552152370-fb05b25ff17d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')",
        'watercolor':"url('https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

