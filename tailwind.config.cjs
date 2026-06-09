/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        secondary: '#111111',
        accent: '#3B82F6',
        text: '#E5E5E5',
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
