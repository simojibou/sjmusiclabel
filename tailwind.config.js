module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#f1fc00',
          500: '#D3DE00',
        },
        zinc: {
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
