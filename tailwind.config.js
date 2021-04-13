module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				login: "url('/login1.svg')",
				question404: "url('/assets/caveMan.gif')",
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
