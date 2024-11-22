module.exports = {
  content: [
    './index.html',                  // Fichier HTML principal
    './src/**/*.{vue,js,ts,jsx,tsx}' // Tous les fichiers Vue, JS, TS, JSX, et TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        waterGalon: ['Water Galon', 'sans-serif'], // Nom de la police personnalisée
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};