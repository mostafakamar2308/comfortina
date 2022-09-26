/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#201d30",
        "light-red": "#d36060",
      },
    },
  },
  plugins: [],
  // plugins: [require("@tailwindcss/line-clamp")],
};
