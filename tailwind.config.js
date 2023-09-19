/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }
            '1.5xl': '1324px',
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            phone: '426px',
            // => @media (min-width: 640px) { ... }
        },
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
