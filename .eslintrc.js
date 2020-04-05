module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    'no-var': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};