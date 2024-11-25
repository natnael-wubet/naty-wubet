/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require("@iconify/tailwind");

export default {
	content: ["./src/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				typewriter: "typewriter 2s steps(11) forwards", // Adjust duration and steps based on your text length
				blink: "blink 1s step-end infinite",
			},
			keyframes: {
				typewriter: {
					"0%": { width: "0" },
					"100%": { width: "100%" },
				},
				blink: {
					"0%, 100%": { borderColor: "transparent" },
					"50%": { borderColor: "black" },
				},
			},
		},
	},
	plugins: [addIconSelectors(["mdi", "mdi-light"])],
};
