/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6B2D84", // Royal Purple
          gold: "#D4AF37",   // Gold
          cream: "#FAF7F2",  // Off-White / Cream
          charcoal: "#2E2E2E", // Charcoal
          amber: "#F5B800"   // Warm Amber
        },
        background: "#FAF7F2", // Off-White / Cream
        foreground: "#2E2E2E", // Charcoal
        white: "#fff",
        black: "#000"
      },
      fontFamily: {
        heading: ["'Playfair Display'", "'Merriweather'", "serif"],
        body: ["'Lato'", "'Open Sans'", "sans-serif"],
        highlight: ["'Raleway'", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
};
