/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{ts,tsx}', './story/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--border-color)',
      },
    },
  },
};
