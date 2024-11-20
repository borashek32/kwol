/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    'bg-gray-400',
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
    'bg-red-400',
    'bg-red-600',
    'bg-red-700',
    'bg-red-800',
    'bg-red-900',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}