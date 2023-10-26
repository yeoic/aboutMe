module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        reveal: {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0% 0 0 0)" },
        },
        unreveal: {
          "0%": { clipPath: "inset(0% 0 0 0)" },
          "100%": { clipPath: "inset(100% 0 0 0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
        slideDown: "slideDown 1s ease-in-out",
        slideUp: "slideUp 1.1s ease-in-out",
        reveal: "reveal 2s forwards",
        unreveal: "unreveal 2s forwards",
        fadeOut: "fadeOut 2s forwards",
        fadeIn: "fadeOut 0.5s forwards",
      },
      colors: {
        "back-Ivory": "#fff6e9",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        NanumMyeongjo: ["Nanum Myeongjo", "serif"],
      },
    },
  },
  plugins: [],
};
