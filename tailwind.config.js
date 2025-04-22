/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Roboto', 'sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/postcss'),  // Use the separate @tailwindcss/postcss package
    require('autoprefixer'),          // Optional: to add vendor prefixes for compatibility
  ],
}
