/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#182a38',
          900: '#233949',
          850: '#2d485a',
          800: '#36566b',
          700: '#476e82',
          600: '#5c8395',
        },
        brand: {
          50: '#f2f7fa',
          100: '#e5eff5',
          200: '#cfdee8',
          300: '#a8c1d3',
          400: '#79a4be',
          500: '#4b89ad',
          600: '#397797',
          700: '#316583',
          800: '#2a536d',
          900: '#25465b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
