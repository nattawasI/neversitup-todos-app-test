const black = '#172b4d'
const primaryGreen = '#5eaaa8'
const lightGreen = '#cee5e4'
const darkGreen = '#4b8886'

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      textColor: {
        'black': black,
        'primary-green': primaryGreen,
      },
      backgroundColor: {
        'primary-green': primaryGreen,
        'dark-green': darkGreen,
        'light-green': lightGreen
      },
      borderColor: {
        'black': black,
        'primary-green': primaryGreen,
        'dark-green': darkGreen,
        'light-green': lightGreen
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
