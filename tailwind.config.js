/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#f13a01",
        "cerulean-blue": {
          50: "#ecf9ff",
          100: "#d4efff",
          200: "#b3e5ff",
          300: "#7fd7ff",
          400: "#43beff",
          500: "#189dff",
          600: "#007bff",
          700: "#0063fb",
          800: "#0353d3",
          900: "#0a469e",
          950: "#0c2b5f",
        },'astronaut': {
          '50': '#f2f5fc',
          '100': '#e2e9f7',
          '200': '#cbd8f2',
          '300': '#a7bfe9',
          '400': '#7d9edd',
          '500': '#5f7fd2',
          '600': '#4b64c5',
          '700': '#4153b4',
          '800': '#3a4693',
          '900': '#313b72',
          '950': '#232748',
      },
      },
    },
  },

  plugins: [],
};
