/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  screens: {
    'sm': { 'max': '480px' },

    //'sm': '767px',
    // => @media (min-width: 576px) { ... }
    'md': { 'max': '960px' },
    // => @media (min-width: 960px) { ... }
    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  },
};
export const plugins = [];

