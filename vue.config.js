const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	publicPath: './',
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.pug$/,
					oneOf: [
						// allow import of Pug in JavaScript
						{
							exclude: /\.vue$/,
							loader: '@webdiscus/pug-loader',
							options: {
								method: 'compile', // compile Pug into template function
							},
						},
						// allow <template lang="pug"> in Vue components
						{
							loader: '@webdiscus/pug-loader',
							options: {
								method: 'html', // render Pug into pure HTML string
							}
						}
					]
				}
			]
		}
	}
})
