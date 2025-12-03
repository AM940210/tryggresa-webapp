const { content } = require('./tailwind.config.cjs');

/** @type {import('tailwindcss'.Config)} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extends: {
            colors: {
                primary: "#0066CC",
                primaryLight: "#E6F2FF",
                dark: "#1A1A1A",
                grayText: "#6B7280",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};