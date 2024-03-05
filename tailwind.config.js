/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#49535c",
                secondary: "#de3f3b",
                secondaryLight: "#f15f5b",
                black: "#1e1e1e",
                yellow: "#ffd600",
                yellowLight: "#ffe24b",
                grayLight: "#f3f6f9",
                gray: "#eaeff3",
                grayDark: "#a0adba",
            },
            dropShadow: {
                custom: "0 10px 40px rgba(0, 0, 0, 0.1)",
            },
            screens: {
                sm: {max: "768px"},
                md: {max: "1024px"},
                lg: {max: "1280px"},
                smMin: "768px",
                mdMin: "1024px",
                lgMin: "1280px",
            },
            fontFamily: {
                zheldor: ["ALS-Zheldor", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
