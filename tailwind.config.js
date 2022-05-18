module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['n27regular', 'sans-serif'],
      'display': ['n27regular', 'sans-serif'],
      'body': ['n27regular', 'sans-serif'],
    },
    extend: {
      colors: {
        'red': '#d22630',
        'coolGray1c': '#d9d9d6',
        'coolGray6c': '#a7a8aa',
        'coolGray11c': '#53565A',
        'gray900': '#212529',
      },
    },
  },
  plugins: [],
}
