/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-20': 'rgba(0, 0, 0, 0.2)',
        'hf-yellow':'rgba(255, 213, 64, 1)',
        'hf-orange':'rgba(241, 90, 41, 1)',
        'hf-yellow-60':'rgba(255, 229, 140, 1)',
      },
    },
  },
  plugins: [],
}