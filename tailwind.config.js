const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
