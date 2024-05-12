/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      }
    },
  },
  plugins: [ require('daisyui'),],
}