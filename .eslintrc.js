module.exports = {
  plugins: ['@ionic'],
  extends: ['plugin:@ionic/recommended', 'react-app'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {

  },
};
