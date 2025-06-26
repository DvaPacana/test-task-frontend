module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier', 'unused-imports', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@features', './src/app/features'],
          ['@store', './src/app/store'],
          ['@components', './src/app/components'],
          ['@constants', './src/app/constants'],
          ['@interfaces', './src/app/interfaces'],
          ['@enums', './src/app/enums']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
      }
    }
  },
  rules: {
    'prettier/prettier': ['error', { semi: true }],
    'unused-imports/no-unused-imports': 'warn',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    semi: ['error', 'always'], // Всегда ставить точку с запятой
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ]
  }
};
