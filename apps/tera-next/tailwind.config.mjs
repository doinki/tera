import { fontFamily } from 'tailwindcss/defaultTheme';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['../../packages/tera-ui/src/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', ...fontFamily.sans],
      },
    },
  },
};
