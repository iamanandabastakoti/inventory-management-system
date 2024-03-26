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
        primaryBg: "#000814",
        primaryText: "#f8f7ff",
        navbarBg: "#03045E",
        buttonBg: "#7400b8",
        borderColor: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
