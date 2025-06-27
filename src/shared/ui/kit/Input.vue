<script setup lang="ts">
import WithError from './WithError.vue'
import WithLabel from './WithLabel.vue'

defineOptions({ inheritAttrs: false })
defineProps<{
	label: string
	error: string | undefined | boolean
}>()

const value = defineModel<string>({ default: '' })
</script>

<template>
	<WithLabel
		:label="label"
		:value="value"
	>
		<template #default="{ id }">
			<WithError :error="error">
				<input
					v-model="value"
					v-bind="$attrs"
					:id="id"
				/>
			</WithError>
		</template>
	</WithLabel>
</template>

<style scoped lang="scss">
input {
	width: 100%;

	padding: 1.25rem 0.75rem 0.5rem 0.75rem;
	background-color: var(--color-bg-200);

	font-size: var(--size-lg);
	color: var(--color-text);

	border-radius: 0.5rem;
	border: 1px solid var(--color-primary-50);
	outline: none;

	&:hover {
		border-color: var(--color-primary-200);
	}
}
</style>
