/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "src/app/**/*.{js,ts,jsx,tsx}",
    "src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ade2d1",
        sub1: "#e6f7f1",
        sub2: "#d1ade2",
        sub3: "#e2d1ad",
      },
    },
  },
  plugins: [],
};
