/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in src folder
  ],
  
  darkMode: 'class', // or 'media' if you prefer system-based dark mode
  
  theme: {
    extend: {},  // You can extend the default theme here (e.g., colors, spacing, etc.)
  },
  
  plugins: [],   // You can add Tailwind plugins here if needed
}
