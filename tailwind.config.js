/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryBg: "#f8f7ff",
        primaryText: "#000814",
        navbarBg: "#03045E",
        buttonBg: "#7400b8",
      },
    },
  },
  plugins: [],
};
