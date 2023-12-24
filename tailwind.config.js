/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "slide-down": {
                    from: {
                        height: "0",
                        opacity: "0",
                    },
                    to: {
                        height: "8rem",
                        opacity: "1",
                    },
                },
                "slide-up": {
                    from: {
                        height: "8rem",
                        opacity: "1",
                    },
                    to: {
                        height: "0",
                        opacity: "0",
                    },
                },
            },
            animation: {
                "slide-down": "slide-down  1s ease-in-out",
                "slide-up": "slide-up 1s ease-in-out",
            },
        },
    },
    // plugins: ["prettier-plugin-tailwindcss"],
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
};
