/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-blue": "#0283ff",
        "dark-blue": "#212135",
        "bg-light": "#f3f6fa",
        "light-orange": " #fdf1ea",
        "text-gray": "#a4a9b1",
        "secondary-dark-blue": "#2d2b43",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        lilita: ["'Lilita One'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
