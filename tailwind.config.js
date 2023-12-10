/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
  },
  plugins: [],
}

