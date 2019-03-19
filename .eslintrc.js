module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 160,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all"
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018
  }
};
