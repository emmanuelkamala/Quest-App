module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '132' : '33rem',
        '144' : '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
