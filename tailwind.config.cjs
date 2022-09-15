/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      colors: {
        'primary': '#ffdc00',
        'secondary': '#ebebeb',
        'base': '#1f3038',
      }
    },
  },
  plugins: [],
}
