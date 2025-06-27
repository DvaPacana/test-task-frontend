import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import oxlint from 'eslint-plugin-oxlint';

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
	},

	...pluginVue.configs['flat/recommended'],
	...vueTsEslintConfig(),
	oxlint.configs['flat/recommended'],
];
