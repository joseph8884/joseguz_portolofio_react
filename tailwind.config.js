/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./sections/**/*.{js,ts,jsx,tsx}",
      "./Projects/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        colors: {
          blue: "#232946",
          pink: "#EEBBC3",
          violet: "#B8C1EC",
          white: "#FFFFFE",
        },
        animation: {
          changewidth: "width 2s ease-in-out infinite",
          spin: "spin 8s linear infinite",
          absoluteright: "absoluteright 15s ease-in infinite",
          translateright: "translateright 3.5s ease-in-out infinite",
          translateBounce: "translateBounce 3.5s ease-in-out infinite",
        },
        boxShadow: {
          "light-xl": "0 15px 30px -15px rgba(256, 256, 256, 0.3)",
          "light-2xl": "-1px 6px 13px 0px rgba(0,0,0,0.44)",
          "light-3xl":
            "0 25px 60px rgba(255,255,255, 0.1), 0 19px 30px rgba(255,255,255, 0.1)",
          "light-4xl":
            "0 45px 100px rgba(220,220,220, 0.3), 0 16px 40px rgba(220,220,252205, 0.3)",
          "violet-5xl": "0px 6px 58px -8px rgba(184,193,236,0.36)",
        },
        keyframes: {
          width: {
            "0%, 100%": { width: "20px" },
            "50%": { width: "40%" },
          },
          absoluteright: {
            "0%,100%": {
              right: "-90%",
            },
            "50%": {
              right: "-10%",
            },
          },
          translateright: {
            "0%,100%": {
              right: "100px",
            },
            "50%": {
              right: "30px",
            },
          },
          translateBounce: {
            "0%,100%": {
              bottom: "0px",
            },
            "50%": {
              bottom: "30px",
            },
          },
        },
      },
    },
    plugins: [],
  };
      