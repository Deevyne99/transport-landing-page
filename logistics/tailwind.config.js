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
        sea: "url('/src/images/seaside.png')",
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        leagues: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
