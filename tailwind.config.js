/** @type {import('tailwindcss').Config} */

const customPallet = {
  primaryDark: '#161C24',
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  darkMode: 'class', // or 'media' or 'class' for sistem preferences
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': customPallet.primaryDark,
      },
      colors: {
        'background-light': '#f9f8f9',
        'background-dark': customPallet.primaryDark,
        'text-light': '#000000',
        'text-dark': '#ffffff',
        'header-light': '#e5e5e5',
        'header-dark': '#333333',
      },
    },
  },
  plugins: [],
}