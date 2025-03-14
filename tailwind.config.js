/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "389px" }, // Applies styles when screen width is < 390px
      },
      colors: {
        mainBlue: "var(--main-blue)",
        customGreen: "#10B981",
      },
    },
  },
  plugins: [],
};

export default config;
