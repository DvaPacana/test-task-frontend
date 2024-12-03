<script setup lang="ts">
import { useTestStore } from '../store';
import { Thing } from '../interfaces';

interface Props {
	things: Thing[];
}
const props = defineProps<Props>();
const store = useTestStore();
</script>

<template>
	<div class="things">
		<div
			v-for="thing in props.things"
			:key="thing.id"
			@click="store.toggleThing(thing)"
			:class="'thing-item' + (store.userThings.includes(thing) ? ' selected' : '')"
		>
			{{ thing.name }}
		</div>
	</div>
</template>
