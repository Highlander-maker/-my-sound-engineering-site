/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: "#0A192F",
        midnightGray: "#1E293B",
        pureWhite: "#FFFFFF",
        accentBlue: "#2563EB",
      },
    },
  },
  plugins: [],
};