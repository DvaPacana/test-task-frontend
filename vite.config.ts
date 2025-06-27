import vue from '@vitejs/plugin-vue';
import path from 'path';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';
import Layouts from 'vite-plugin-vue-layouts';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		VueRouter({
			routesFolder: ['src/pages'],
			extensions: ['.vue'],
		}),
		Layouts({
			pagesDirs: 'src/pages',
			layoutsDirs: 'src/layouts',
		}),
		vue(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@styles': path.resolve(__dirname, 'src/shared/ui/kit/styles'),
		},
	},
});
