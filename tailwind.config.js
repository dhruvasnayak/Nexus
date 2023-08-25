/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: "Inter, sans-serif",
				montserrat: "Montserrat, sans-serif",
				bricolage: "Bricolage, sans-serif",
			},
			backgroundImage: {
				"gradient-linear": "linear-gradient(#009efd, #006dfa)",
			},
			colors: {
				primary: "#009EFD",
				secondary: "#006DFA",
				"text-primary": "#E6E6E6",
				"text-secondary": "#888888",
				shaded: "#0A0A0A",
				background: "#040305",
			},
		},
	},
	plugins: [],
};
