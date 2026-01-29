import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import { globalIgnores } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**']),

  // Vue.js правила
  pluginVue.configs['flat/essential'],
  pluginVue.configs['flat/strongly-recommended'],
  pluginVue.configs['flat/recommended'],

  // TypeScript правила
  vueTsConfigs.recommended,

  // Import/export правила
  {
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@assets', './src/view/assets'],
          ],
          extensions: ['.ts', '.js', '.vue', '.json'],
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
    },
  },

  // Кастомные правила для Vue 3 Composition API
  {
    rules: {
      // Vue 3 специфичные правила
      'vue/no-unused-vars': 'error',
      'vue/no-unused-components': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',

      // Правила для форматирования template
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'below',
        },
      ],
      'vue/multiline-html-element-content-newline': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/mustache-interpolation-spacing': ['error', 'always'],

      // Composition API лучшие практики
      'vue/prefer-import-from-vue': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Правила для деструктуризации
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true, minProperties: 2 },
          ObjectPattern: { multiline: true, minProperties: 2 },
          ImportDeclaration: { multiline: true, minProperties: 2 },
          ExportDeclaration: { multiline: true, minProperties: 2 },
        },
      ],

      // Общие правила
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: true,
          },
        },
      ],
    },
  },

  // Правила для Pinia
  {
    files: ['**/stores/**/*.{ts,js,vue}'],
    rules: {
      'vue/no-export-in-script-setup': 'off',
    },
  },

  // Правила для Composables
  {
    files: ['**/composables/**/*.{ts,js}', '**/use*.{ts,js}'],
    rules: {
      'vue/prefer-import-from-vue': 'error',
    },
  },

  skipFormatting,
);
