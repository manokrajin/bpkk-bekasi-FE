/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001349",
        primaryLight: "#002793",
        orange: "#EF3B24",
        grayText : "#5B5B5B",
      },
      height:{
        '37,5Rem': '37.5rem',
      }
    },
  },
  plugins: [],
})