<script setup>
import ItemView from "./Item.vue";

const props = defineProps({
	item: {
		type: Object,
		validator(item) {
			return item.hasOwnProperty("id") && item.hasOwnProperty("name");
		},
	},
	selected: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(["remove", "select"]);

function handleClick() {
	props.selected ? emit("remove", props.item) : emit("select", props.item);
}
</script>

<template>
	<ItemView
		:item="item"
		:class="{'item-card_selected': selected}"
	>
		<button @click="handleClick">
			{{ selected ? "Remove" : "Select" }} {{ item.name }} with id № {{ item.id }}
		</button>
	</ItemView>
</template>

<style scoped>
.item-card_selected {
	background-color: darkgrey;
}
</style>
