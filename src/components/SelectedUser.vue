<script setup lang="ts">
import { useTestStore } from '../store';

const store = useTestStore();
</script>

<template>
	<div class="things">
		<div
			v-for="thing in store.userThings"
			:key="thing.id"
			@click="store.toggleThing(thing)"
			class="thing-item"
		>
			{{ thing.name }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
</style>
