/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    './src/**/*.vue', 
    './src/**/*.js'
  ],
  theme: {
      extend: {
        colors: {
          e2ead7: '#e2ead7',  // used in login and signUp -bg
        },
        width: {
          '30': '30%',
           '80' : '80%'
        },
      },
  },
  plugins: [],
}
