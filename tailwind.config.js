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
        question404: "url('/assets/caveMan.gif')",
        homeHero: "url('/assets/undraw_Questions.svg')",
        homeSubHero: "url('/assets/undraw_my_answer.svg')",
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
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
