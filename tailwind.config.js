/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "hsl(227 75% 14%)",
        "neutral-800": "hsl(226 25% 17%)",
        "neutral-700": "hsl(225 23% 24%)",
        "neutral-600": "hsl(226 11% 37%)",
        "neutral-300": "hsl(0 0% 78%)",
        "neutral-200": "hsl(217 61% 90%)",
        "neutral-100": "hsl(0 0% 93%)",
        "neutral-0": "hsl(200 60% 99%)",

        "red-400": "hsl(3 86% 64%)",
        "red-500": "hsl(3 71% 56%)",
        "red-700": "hsl(3 77% 44%)",
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(to right, #EBF2FC, #EEF8F9)",
        "dark-gradient": "linear-gradient(to right, #040918, #091540)",
      },
      fontFamily: {
        sans: ["NotoSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
