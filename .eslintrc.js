module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  parserOptions: {
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
  },
};
