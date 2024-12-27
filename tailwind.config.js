/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      screens: {
        'sm': {'max': '480px'},

        //'sm': '767px',
        // => @media (min-width: 576px) { ... }
  
        'md': {'max': '960px'},
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  plugins: [],
}

