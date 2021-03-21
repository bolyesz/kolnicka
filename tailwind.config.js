module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/10': '10%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
