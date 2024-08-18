/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['mado', 'mado/tailwindcss', 'plugin:@next/next/recommended'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  root: true,
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'no-param-reassign': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: require.resolve('./tsconfig.json'),
      },
    },
    next: {
      rootDir: __dirname,
    },
  },
};