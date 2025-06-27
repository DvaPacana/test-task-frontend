import { singleton } from '@/shared/helpers/singleton.js'
import { ref } from 'vue'
import { darkTheme } from './configs/dark.js'
import { lightTheme } from './configs/light.js'
import { IThemeConfig, themeVariant } from './types.js'

const configs: Record<themeVariant, IThemeConfig> = {
	light: lightTheme,
	dark: darkTheme,
}
const themeLSkey = 'theme-is-dark'
const initialIsDark = (variant?: themeVariant) => {
	const lsTheme = localStorage.getItem(themeLSkey)
	return JSON.parse(lsTheme) ?? variant === themeVariant.DARK
}

export const useTheme = singleton((variant?: themeVariant, config?: IThemeConfig) => {
	const isDark = ref(initialIsDark(variant))

	const setTheme = () => {
		const variant = isDark.value ? themeVariant.DARK : themeVariant.LIGHT
		const newConfig = config ? Object.assign(configs[variant], config) : configs[variant]

		Object.entries(newConfig).forEach(([key, valueGroup]) => {
			Object.entries(valueGroup).forEach(([subKey, subValue]) => {
				document.documentElement.style.setProperty(`--${key}-${subKey}`, subValue)
			})
		})
	}

	const changeTheme = () => {
		isDark.value = !isDark.value
		localStorage.setItem(themeLSkey, String(isDark.value))
		setTheme()
	}

	setTheme()

	return {
		isDark,
		changeTheme,
	}
})
