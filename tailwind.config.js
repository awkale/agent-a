module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['Univers', 'sans-serif'],
      'display': ['Univers', 'sans-serif'],
      'body': ['Univers', 'sans-serif'],
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
