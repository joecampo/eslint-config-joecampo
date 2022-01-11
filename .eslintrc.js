module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all"
      }
    ]
  },
  globals: {
    'axios': 'readonly',
    '_': 'readonly',
    '$': 'readonly',
    'Vue': 'readonly',
    'moment': 'readonly'
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018
  }
};
