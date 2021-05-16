module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#CAA892',
        second: '#37806B'
      },
      borderRadius:{
        '4xl': '100px',
        '60': '60px'
      },
      inset: {
        '102': '420px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
