module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%' : {transform: 'translateY(0)'},
          '100%' : {transform: 'translateY(-100%)'}
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': {opacity: '0'},
          '50%': {opacity: '1'}
        }
      },
      animation: {
        blink: 'blink 1s infinite',
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1.1s ease-in-out',
      },
      colors: {
        "back-Ivory": "#fff6e9",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        NanumMyeongjo: ['Nanum Myeongjo', "serif"],
      },
    },
  },
  plugins: [],
};
