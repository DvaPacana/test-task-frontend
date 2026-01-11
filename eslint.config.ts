import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],

    rules: {
      'semi': ['error', 'always'], // Требует точки с запятой
      'quotes': ['error', 'single'], // Обязательно одинарные кавычки
      'no-trailing-spaces': 'error',  // Запрещает пустые символы в конце строки
      'comma-dangle': ['error', 'always-multiline'],  // Запятые обязательны в многострочных литералах
      'comma-style': ['error', 'last'],   // Запятая ставится только в конце строки и не может начинатся с нее
      'comma-spacing': ['error', { 'before': false, 'after': true }], // Пробелы до запятой запрещены, после нее сколько угодно
    },
  },


  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
);
