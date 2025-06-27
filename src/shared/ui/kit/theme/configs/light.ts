import { IThemeConfig } from '../types.js'
import { defaultTheme } from './default.js'

export const lightTheme = {
	...defaultTheme,
	color: {
		'primary-50': 'rgb(247 250 255)',
		'primary-100': 'rgb(225 231 245)',
		'primary-200': 'rgb(202 213 237)',
		'primary': 'rgb(103 134 203)',
		'primary-700': 'rgb(66 92 150)',

		'success': 'rgb(93 172 117)',
		'error': 'rgb(199 87 88)',
		'shadow': 'rgb(239 241 242)',
		'bg': 'rgb(255 255 255)',
		'bg-200': 'rgb(250 250 255)',
		'text': 'rgb(69 75 89)',
		'text-200': 'rgb(142 146 154)',
	},
} as IThemeConfig
