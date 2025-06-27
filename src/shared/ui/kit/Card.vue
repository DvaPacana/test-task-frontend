<script setup lang="ts">
defineProps<{
	secondary?: boolean
}>()
</script>

<template>
	<div :class="['card', secondary ? '--secondary' : '--default']">
		<div class="card--body">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	box-shadow:
		0 1px 3px 0 var(--color-shadow),
		0 1px 2px -1px var(--color-shadow);
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	&.--default {
		background: var(--color-bg);
	}
	&.--secondary {
		background: var(--color-bg-200);
	}

	&--body {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
}
</style>
