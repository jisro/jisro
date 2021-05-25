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
      secondarytint: "#ECE7CC",
      tertiary: "#B5CCFD",
      quarternary: "#202041",
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
