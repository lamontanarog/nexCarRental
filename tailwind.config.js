/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/style.css',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
        'roboto-slab' : ['Roboto Slab', 'sans-serif'],
        'roboto-condensed' : ['Roboto Condensed', 'sans-serif'],
      },
      height: {
        'screen-75': '75vh',
      },
      fontSize: {
        'title': '16px',
        'subtitle' : '14px',
        'paragraph': '12px',
      }
    },
  },
  plugins: [],
}

