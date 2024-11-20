module.exports = {
  content: [
    './index.html',                  // Fichier HTML principal
    './src/**/*.{vue,js,ts,jsx,tsx}' // Tous les fichiers Vue, JS, TS, JSX, et TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        water: ['"Super Water"', 'cursive'], // Remplacez Pacifico par votre police
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};