const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Trebuchet MS"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
