/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/UserProfile.jsx", // Include specific file
    "./src/**/*.{js,ts,jsx,tsx}", // General inclusion for all relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}