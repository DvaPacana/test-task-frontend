<script setup>
defineProps({
	items: {
		type: Array,
		validator(items) {
			for (const item of items) {
				if (!item.hasOwnProperty("id") || !item.hasOwnProperty("name"))
					return false;
			}
			return true;
		},
	},
});
</script>

<template>
	<div>
		<ul v-if="items.length">
			<li v-for="item in items" :key="item.id">
				<slot name="item" v-bind="item"></slot>
			</li>
		</ul>
		<slot name="counter"></slot>
	</div>
</template>

<style scoped>

</style>
