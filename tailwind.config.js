/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require("@iconify/tailwind");

export default {
	content: ["./src/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
 extend: {
            animation: {
                typewriter: "typewriter 2s steps(25) forwards", // Adjusted for character count
                blink: "blink 1s step-end infinite",
            },
            keyframes: {
                typewriter: {
                    "0%": { width: "0" },
                    "100%": { width: "100%" },
                },
                blink: {
                    "0%, 100%": { borderColor: "transparent" },
                    "50%": { borderColor: "white" },
                },
            },
        },
	},
	plugins: [addIconSelectors(["mdi", "mdi-light"])],
};
