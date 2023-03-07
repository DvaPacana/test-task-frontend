<script setup>
const props = defineProps({
	item: {
		type: Object,
		validator(item) {
			return item.hasOwnProperty("id") && item.hasOwnProperty("name");
		},
	},
});
</script>

<template>
	<div class="item-card">
		<span>id: {{ item.id }}</span>
		<span>name: {{ item.name }}</span>
		<slot></slot>
	</div>
</template>

<style scoped>
.item-card {
	width: max-content;
	border: solid 1px black;
}
</style>
