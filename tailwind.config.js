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
        detailPrimary: "var(--detailPrimary)",
        detailPrimary10: "var(--detailPrimary10)",
        detailPrimary40: "var(--detailPrimary40)",
        detailPrimary50: "var(--detailPrimary50)",
        detailPrimary60: "var(--detailPrimary60)",
        detailPrimary80: "var(--detailPrimary80)",
      },
    },
  },
  plugins: [],
}