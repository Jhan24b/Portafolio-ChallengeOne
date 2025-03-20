module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class', // Para soportar modo oscuro
  theme: {
    extend: {
      colors: {
        navy: '#001f3f', // Azul marino oscuro
        gray: {
          100: '#f7fafc',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
    },
  },
  plugins: [],
};