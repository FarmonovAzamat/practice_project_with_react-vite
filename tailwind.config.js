/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'tb': '780px',
      // => @media (min-width: 780px) { ... }

      'lg': '1024px',
      //=>@media (min-width: 1024px) {...}
      
      'pc': '2040px',
      //=>@media (min-width: 2040px) {...}
    },
    extend: {},
  },
  plugins: [],
}