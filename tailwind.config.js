module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        login: "url('/login1.svg')",
      }),
    },
    fontFamily: {
      display: [
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "sans-serif",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
