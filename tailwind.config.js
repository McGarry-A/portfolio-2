/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'leagueSpartan': ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('../Images/chalkboard.jpg')"
      }
    },
  },
  plugins: [],
}
