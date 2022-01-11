module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  globals: {
    axios: 'readonly',
    _: 'readonly',
    $: 'readonly',
    Vue: 'readonly',
    moment: 'readonly',
  },
  parserOptions: {
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018,
  },
};
