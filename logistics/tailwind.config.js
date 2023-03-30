/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#091242',
      },
      backgroundImage: {
        heroImage: "url('/src/images/hero.png')",
        container: "url('/src/images/containers.jpg')",
        pattern: "url('/src/images/Pattern.png')",
      },
    },
  },
  plugins: [],
}
