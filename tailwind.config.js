const typographyPlugin = require("@tailwindcss/typography");

const typographyStyles = require("./typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "selector",
	plugins: [typographyPlugin],
	theme: {
		extend: {
			borderWidth: {
				"1": "1px",
			},
			colors: {
				daintree: {
					"50": "#f0fdfc",
					"100": "#cbfcfa",
					"200": "#96f9f7",
					"300": "#5aecee",
					"400": "#28d1d9",
					"500": "#0fb2bd",
					"600": "#098d98",
					"700": "#0c6e79",
					"800": "#054b58",
					"900": "#032b32",
					"950": "#03252a",
				},
				celeste: {
					"50": "#f6f6f6",
					"100": "#eaebe9",
					"200": "#caccc7",
					"300": "#b9bcb5",
					"400": "#9da097",
					"500": "#898d82",
					"600": "#7e8076",
					"700": "#6a6b63",
					"800": "#595953",
					"900": "#494a44",
					"950": "#262624",
				},
			},
		},
		fontSize: {
			"xs": ["0.8125rem", { lineHeight: "1.5rem" }],
			"sm": ["0.875rem", { lineHeight: "1.5rem" }],
			"base": ["1rem", { lineHeight: "1.75rem" }],
			"lg": ["1.125rem", { lineHeight: "1.75rem" }],
			"xl": ["1.25rem", { lineHeight: "2rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
			"4xl": ["2rem", { lineHeight: "2.5rem" }],
			"5xl": ["3rem", { lineHeight: "3.5rem" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		fontFamily: {
			sans: ["Red Hat Display", "Inter", "sans-serif"],
			title: ["League Spartan"],
		},
		typography: typographyStyles,
	},
};
