module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': {opacity: '0'},
          '50%': {opacity: '1'}
        }
      },
      animation: {
        blink: 'blink 1s infinite'
      },
      colors: {
        "back-Ivory": "#fff6e9",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        // 기타 폰트 설정도 필요하면 여기에 추가하세요.
      },
    },
  },
  plugins: [],
};
