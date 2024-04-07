/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560px",
    },
    container: {
      center: true,
    },
  },
  colors: {
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },

  plugins: [],
};
