/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: 'rgb(5, 5, 5)',
        background: 'rgb(250, 250, 250)',
        primary: 'rgb(95, 134, 132)',
        secondary: 'rgb(225, 234, 233)',
        accent: 'rgb(105, 150, 148)',
        dark: {
          text: 'rgb(250, 250, 250)',
          background: 'rgb(5, 5, 5)',
          primary: 'rgb(95, 134, 132)',
          secondary: 'rgb(21, 30, 29)',
          accent: 'rgb(165, 192, 191)',
        },
      },
    },
  },
  plugins: [],
};
