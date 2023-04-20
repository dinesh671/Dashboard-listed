module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        firstCard: '#DDEFE0',
        secondCard: '#F4ECDD',
        thirdCard: '#EFDADA',
        fourthCard: '#DEE0EF',
      },
      spacing: {},
      backgroundImage: {
        profile: "url('/public/pic.png')",
      },
    },
  },
  plugins: [],
};