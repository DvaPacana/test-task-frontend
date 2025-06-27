<script setup lang="ts">
import Button from '../Button.vue'
import { useTheme } from '../theme'
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'

const { isDark, changeTheme } = useTheme()
</script>

<template>
	<Button
		text
		@click="changeTheme"
	>
		<component
			:is="isDark ? IconMoon : IconSun"
			class="icon"
		/>
	</Button>
</template>

<style scoped lang="scss">
.icon {
	width: 1.75rem;
	height: 1.75rem;
	color: var(--color-primary);
}
</style>
