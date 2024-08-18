import { fontFamily } from 'tailwindcss/defaultTheme';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./app/**/*.{ts,tsx}', '../../packages/tera-ui/src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR Variable', ...fontFamily.sans],
      },
    },
  },
};
