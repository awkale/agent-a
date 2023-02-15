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
      'brand': ['n27regular']
    },
    extend: {
      colors: {
        'white': '#f8f9fa',
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
