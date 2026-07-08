/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grounded in real stage materials: black flightcases, tungsten wash, warm gel light
        ink: "#0B0B0D",        // page base — flightcase black
        ink2: "#131316",       // raised surfaces / cards
        ink3: "#1C1C21",       // hover / borders
        bone: "#EDEBE6",       // primary text — warm off-white
        muted: "#8C887E",      // secondary text
        tungsten: "#E9B44C",   // accent — warm stage-light amber
        signal: "#D8442F",     // sparing CTA / live indicator
        line: "rgba(237,235,230,0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};
