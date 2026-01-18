import { defineConfig } from 'eslint/config'
import globals from 'globals'

// --- Prettier
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

// --- Parsers
import vueParser from 'vue-eslint-parser'
import babelParser from '@babel/eslint-parser'
import tsEslint from 'typescript-eslint'

// --- Plugins
import vuePlugin from 'eslint-plugin-vue'
import vueA11y from 'eslint-plugin-vuejs-accessibility'

const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
  '**/*.log',
  '**/npm-debug.log*',
  '**/.git/**',
  '**/.idea/**',
  '**/.vscode/**',
  '**/.DS_Store',
]

const commonRules = {
  ...prettierConfig.rules,
  'no-console': 'warn',
  eqeqeq: 'warn',
  curly: 'warn',
  'no-else-return': 'warn',
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'vue/multi-word-component-names': 'off',
  'vue/no-mutating-props': 'warn',
}

export default defineConfig([
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    ignores,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          js: babelParser,
          ts: tsEslint.parser,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        babelOptions: {
          configFile: false,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      vue: vuePlugin,
      prettier: prettierPlugin,
      'vuejs-accessibility': vueA11y,
    },
    rules: {
      ...commonRules,
      'vue/attributes-order': [
        'warn',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'GLOBAL',
            'UNIQUE',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/multiline-html-element-content-newline': [
        'warn',
        {
          ignoreWhenEmpty: true,
        },
      ],
      'vue/html-indent': [
        'warn',
        2,
        {
          alignAttributesVertically: true,
          closeBracket: { startTag: 0, endTag: 0, selfClosingTag: 0 },
        },
      ],
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          components: ['label', 'VLabel'],
          controlComponents: ['input', 'VInput'],
          required: {
            every: ['id'],
          },
          allowChildren: false,
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          singleAttributePerLine: false,
          bracketSameLine: false,
          endOfLine: 'auto',
        },
      ],
    },
  },

  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...commonRules,
      'prettier/prettier': 'warn',
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    ignores,
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: false,
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      ...commonRules,
      'prettier/prettier': 'warn',
    },
  },
])
