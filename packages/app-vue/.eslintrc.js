module.exports = {
  extends: [
    "../../.eslintrc.js",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:nuxt/recommended",
  ],
  ignorePatterns: [".nuxt/", "dist/", "coverage/"],
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/vue"],
    },
  ],
}
