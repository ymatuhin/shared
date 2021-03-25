module.exports = {
  darkMode: "class",
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{svelte,ts,js,html}",
      "./node_modules/shared/**/*.{svelte,ts}",
    ],
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
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {
      translate: ["motion-reduce"],
      textColor: ["visited"],
    },
  },
};
