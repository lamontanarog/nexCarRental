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
      colors: {
        'red' : {
          'primary': '#FF0000',
          'secondary': '#00FF00',
          'tertiary': '#0000FF',
        }
        
      },
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

