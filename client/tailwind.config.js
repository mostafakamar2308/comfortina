/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#201d30",
        "light-red": "#d36060",
        header: "#b7a591",
      },
      gridTemplateColumns: {
        products: "20% 80%",
      },
    },
  },
  plugins: [],
  // plugins: [require("@tailwindcss/line-clamp")],
};