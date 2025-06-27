<script setup lang="ts">
defineProps<{
	error: string | undefined | boolean
}>()
</script>

<template>
	<div class="with-error">
		<slot />

		<div
			v-if="error"
			class="with-error--error"
		>
			{{ error }}
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/utils';

.with-error {
	position: relative;

	&--error {
		@include utils.font('xs');
		color: var(--color-error);

		position: absolute;
		left: 0;
		top: calc(100% + 0.25rem);
	}
}
</style>
