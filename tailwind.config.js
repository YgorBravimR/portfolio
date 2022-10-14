/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        background: "var(--background)",
        cardBackground: "var(--cardBackground)",
        detailGray: "var(--detailGray)",          
        detailDarkGray: "var(--detailDarkGray)",        
        detailBlack: "var(--detailBlack)",          
        detailYellow: "var(--detailYellow)",
      },
    },
  },
  plugins: [],
}