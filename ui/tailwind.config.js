const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  purge: {
    content: ["./index.html", "./src/**/*.{svelte,ts,js,html}"],
    mode: "all",
    preserveHtmlElements: false,
    options: {
      variables: true,
      keyframes: true,
    },
  },
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        10: "10px",
        12: "12px",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
};
