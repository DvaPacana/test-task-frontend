import { IThemeConfig } from '../types.js'
import { defaultTheme } from './default.js'

export const darkTheme = {
	...defaultTheme,
	color: {
		'primary-50': 'rgb(51 72 117)',
		'primary-100': 'rgb(75 104 170)',
		'primary-200': 'rgb(103 134 203)',
		'primary': 'rgb(124 173 224)',
		'primary-700': 'rgb(225 231 245)',

		'success': 'rgb(93 172 117)',
		'error': 'rgb(199 87 88)',
		'shadow': 'rgb(60 65 65)',
		'bg': 'rgb(32 32 32)',
		'bg-200': 'rgb(45 45 65)',
		'text': 'rgb(255 255 255)',
		'text-200': 'rgb(245 245 245)',
	},
} as IThemeConfig
