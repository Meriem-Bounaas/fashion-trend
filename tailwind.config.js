/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mannequin': "url('/src/media/mannequin.png')",
      }
    },
    colors:{
      'white': '#ffffff',
      'primary': '#01131F',
      'secondary': '#919CA7',
      'ternary': '#3FAEE0' 
    },
    fontFamily: {
      'primary':['Roboto', 'sans-serif'],
      'ternary': ['Sacramento', 'cursive']
    }
  },
  plugins: [],
}
