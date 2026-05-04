/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ut-blue': '#0B3B7A',
        'ut-green': '#2A7F6E',
        'ut-lightblue': '#EFF5FF',
      },
      fontFamily: {
        arabic: ['"Tajawal"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'ticker-scroll': 'ticker-scroll 12s linear infinite',
      },
    },
  },
  plugins: [],
}
