module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off", // We prefer the return type to be inferred
    "react/react-in-jsx-scope": "off", // NextJS make it possible to use JSX without importing React
  },
}
