/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 2s ease-in-out 2s both",
      },
      fontFamily: {
        sans: ["Chivo Mono", "monospace"],
        cinzel: ["Cinzel", "serif"],
        semplicita: ["Semplicita medium", "sans-serif"],
        larken: ["Larken Bold", "sans-serif"],
        trebuc: ["Trebuchet MS"],
      },
    },
  },
  plugins: [],
};
