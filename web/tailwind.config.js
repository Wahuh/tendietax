module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'dark-gray': 'rgb(52,55,65)',
      'light-gray1': '#e3e6ef',
      'light-gray2': '#fbfcfd',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
