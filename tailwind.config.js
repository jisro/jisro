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
      een: "#f6f1d5",
      twee: "#f69e92",
      drie: "#F99994",
      vier: "#94B0F9",
      vijf: "#E6E7E9",
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
