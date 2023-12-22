/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#201d30",
        "light-red": "#d36060",
        header: "#b7a591",
        "brown-dark": "#6E4E39",
        "orange-dark": "#036280",
        "brown-light": "#AF794B",
        "blue-dark": "#2d2c31",
        "grey-light": "#FDEACA",
        "white-dark": "#F2F2F0",
        chair: "#626267",
      },
      gridTemplateColumns: {
        products: "20% 80%",
        contact: "60% 40%",
        favorites: "30% 70%",
        cart: "30% 60% 10%",
      },
      listStyleType: {
        plus: "+",
        minus: "-",
      },
      height: {
        screenMinus: "calc( 100vh - 15vh )",
      },
      fontFamily: {
        alfa: ["Lobst Two", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  // plugins: [require("@tailwindcss/line-clamp")],
};
