const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.zinc,
      },
    },
  },
  plugins: [],
};
