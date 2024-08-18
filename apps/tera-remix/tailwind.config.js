import { fontFamily } from 'tailwindcss/defaultTheme';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['../../packages/tera-ui/src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR Variable', ...fontFamily.sans],
      },
    },
  },
};
