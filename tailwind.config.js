/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ['"FutuHv"', "sans-serif"],
        body: ['"FutuHv2"', "sans-serif"],
        bodyhv: ['"FutuHv3"', "sans-serif"],
        book: ['"FutuHv4"', "sans-serif"],
        bolded: ['"FutuHv5"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
