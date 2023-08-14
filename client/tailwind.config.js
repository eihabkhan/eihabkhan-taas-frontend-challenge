/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'faint-white': '#FBFBFB',
      },
      container: {
        center: true,
        padding: 16,
      },
    },
  },
  plugins: [],
}
