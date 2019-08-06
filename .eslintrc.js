module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
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