<script setup lang="ts">
defineProps<{
	label?: string
	text?: boolean
	fit?: boolean
}>()
</script>

<template>
	<button
		class="button"
		:class="[
			'button',
			{
				'--text': text,
				'--fit': fit,
			},
		]"
	>
		<slot> {{ label }} </slot>
	</button>
</template>

<style scoped lang="scss">
.button {
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 0.5rem;
	cursor: pointer;

	// submit
	&:not(.--text):not(.--fit) {
		padding: 1rem;
		background-color: var(--color-primary);
		color: var(--color-bg-200);
	}

	&:not(.--text):not(.--fit):hover {
		background-color: var(--color-primary-50);
		color: var(--color-text-200);
	}
	&:not(.--text):not(.--fit):active {
		background-color: var(--color-primary-200);
		color: var(--color-text-200);
	}

	// text & fit
	&.--text,
	&.--fit {
		padding: 0.5rem;
		color: var(--color-text-200);
	}
	&.--text {
		height: 58px;
		min-width: 58px;
	}
	&.--fit {
	}
	&:hover.--text,
	&:hover.--fit {
		background-color: var(--color-primary-50);
		color: var(--color-text-200);
	}
	&:active.--text,
	&:active.--fit {
		background-color: var(--color-primary-100);
		color: var(--color-text-200);
	}

	// disabled
	&:disabled {
		background-color: var(--color-bg) !important;
		cursor: not-allowed;
		color: var(--color-text-200);
	}
}
</style>
