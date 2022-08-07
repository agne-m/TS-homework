module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'arrow-parens': [0],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [2],
    'react/jsx-filename-extension': [0],
    "linebreak-style": [0],
    "quotes": [2, "single", { "avoidEscape": true }],
  },
};