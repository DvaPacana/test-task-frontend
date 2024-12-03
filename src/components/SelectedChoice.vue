<script setup lang="ts">
import { useTestStore } from '../store';

const store = useTestStore();
</script>

<template>
	<div class="things">
		<div
			v-if="store.choiceThing"
			@click="store.removeChoiceThing()"
			class="thing-item"
		>
			{{ store.choiceThing.name }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
</style>
