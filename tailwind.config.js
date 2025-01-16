import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "470px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      colors: {
        primary: '#0E8BFF',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}