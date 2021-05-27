module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#F5F7FB",
      primarytint: "#F5BBBB",
      secondary: "#FED095",
      tertiary: "#B5CCFD",
      quarternary: "#202041",
      twee: "#F9A594",
      drie: "#F99994",
      vier: "#94B0F9",
      vijf: "#FAA595",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    variants: {
      extend: {
        backgroundImage: () => ({
          "blob-pattern": "url('/src/assets/bg.svg')",
        }),
      },
    },
    plugins: [],
  },
};
