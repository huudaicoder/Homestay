module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'homepage-background':"url('../src/public/Homepage-background.png')",
       },
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '2/3': '66.66%',
      '3/4': '75%',
      '5/6': '83.33%',
      '9/10': '90%',
      '2xl': '46rem'
    },
    maxHeight: {
      'xl': '32rem'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
