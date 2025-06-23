export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['"Noto Sans KR"', 'sans-serif'],
            newsreader: ['"Newsreader"', 'serif'],
        },
        colors: {
            yellow: '#FFE57F',
            sky: '#D6ECFF',
            textColor: '#333C57'
        }
    },
  },
  plugins: [],
}
