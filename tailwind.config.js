/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "",
        light: "#ffffff",
        lightAlt: "#ebeff1",
        primary: "#0077be",
        secondary: "#f7b71d",
        dark: "#02141d",
        darkAlt: "#57595a",
      },
    },
  },
  plugins: [],
};
