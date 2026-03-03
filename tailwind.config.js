/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      colors: {
        gold:    "var(--color-primary)",
        surface: "var(--color-surface)",
        muted:   "var(--color-muted)",
        border:  "var(--color-border)",
      },
    },
  },
  plugins: [],
};
