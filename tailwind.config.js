/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcf4e8',
          100: '#f9e8d0',
          200: '#f2d1a1',
          300: '#eab973',
          400: '#e4a244',
          500: '#dd8b16', // Amber primary color
          600: '#c66f15',
          700: '#9e5313',
          800: '#7d4115',
          900: '#653614',
          950: '#391c09',
        },
        petra: {
          50: '#fef1f1',
          100: '#fee0e1',
          200: '#fcc7c9',
          300: '#f9a1a5',
          400: '#f47177',
          500: '#e84e55', // Petra rose
          600: '#d32e38',
          700: '#b0212a',
          800: '#941f26',
          900: '#7c1f25',
          950: '#440c0f',
        },
        sea: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7cd4fd',
          400: '#38bdf8',
          500: '#0ea5e9', // Dead Sea blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        sand: {
          50: '#faf8f1',
          100: '#f3efe0',
          200: '#e7dec2',
          300: '#d6c598',
          400: '#c3a96c',
          500: '#b59152', // Desert sand
          600: '#a37942',
          700: '#866138',
          800: '#6f5033',
          900: '#5e442e',
          950: '#332316',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};