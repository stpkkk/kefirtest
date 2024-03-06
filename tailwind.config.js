/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                grayLight: "#767676",
                gray: "#8297ab",
                grayDark: "#313439",
            },
            fontSize: {
                sm: "14px",
                md: "16px",
            },
            screens: {
                sm: {max: "768px"},
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
