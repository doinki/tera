/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{ts,tsx}', './story/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderColor: {
        DEFAULT: '#000000',
      },
    },
  },
};
