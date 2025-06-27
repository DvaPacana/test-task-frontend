export enum themeVariant {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface IThemeConfig {
	color: {
		'primary': string
		'primary-50': string
		'primary-100': string
		'primary-200': string
		'primary-700': string

		'error': string
		'success': string
		'shadow': string
		'bg': string
		'bg-200': string
		'text': string
		'text-200': string
	}
	size: {
		'xs': string
		'sm': string
		'base': string
		'lg': string
		'xl': string
		'2xl': string
		'3xl': string
	}

	animation: {
		time: string
		method: string
	}
}
