module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        developers_light:
          "url('/assets/developers_light.svg')",
        developers_dark:
          "url('/assets/developers_dark.svg')",
        hero_light: "url('/assets/hero_light.svg')",
        hero_dark: "url('/assets/hero_dark.svg')",
        hero_light1: "url('/assets/hero_light1.svg')",
        hero_dark1: "url('/assets/hero_dark1.svg')",
        login: "url('/formbg.png')",
        question404: "url('/assets/caveMan.gif')",
        homeHero: "url('/assets/undraw_Questions.svg')",
        homeSubHero: "url('/assets/undraw_my_answer.svg')",
        displayGradient:
          "linear-gradient(103deg, rgba(155,12,161,1) 0%, rgba(96,72,184,1) 62%, rgba(96,72,184,1) 100%)",
      }),
      boxShadow: {
        questionShadow:
          "-52px -6px 115px -42px rgba(155,12,161,0.27)",
      },
      colors: {
        displayGradient:
          "linear-gradient(103deg, rgba(155,12,161,1) 0%, rgba(96,72,184,1) 62%, rgba(96,72,184,1) 100%)",
        displayGradientPrimary: "rgba(155,12,161,1)",
        displayGradientSecondary: "rgba(96,72,184,1)",
        displayGradientDanger: "rgba(96,72,184,1)",
        displayGradientPrimaryLight: "rgba(155,12,161,0.3)",
        dark: {
          background: "#2D2F31",
          text: "#D8D7D4",
          gray: "#C2BFB9",
          black: "#28292A",
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
    fontFamily: {
      display: [
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "sans-serif",
      ],
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "rgba(155,12,161,0.7)",
      secondary: "rgba(96,72,184,0.7)",
      danger: "rgba(96,72,184,0.7)",
    }),
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
