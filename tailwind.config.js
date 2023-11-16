/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx, jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'yellow-600': '#C47F17',
        'yellow-300': '#DBAC2C',
        'yellow-100': '#F1E9C9',

        'purple-600': '#4B2995',
        'purple-300': '#8047F8',
        'purple-100': '#EBE5F9',

        'gray-900': '#272221',
        'gray-800': '#403937',
        'gray-700': '#574F4D',
        'gray-600': '#8D8686',
        'gray-500': '#D7D5D5',
        'gray-400': '#E6E5E5',
        'gray-300': '#EDEDED',
        'gray-200': '#F3F2F2',
        'gray-100': '#FAFAFA',
      },
      fontFamily: {
        'heading': 'Baloo 2, sans-serif',
        'base': 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
}
