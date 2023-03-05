<script setup>
// props
const props = defineProps({
	basket: Array,
	removable: Boolean,
	catalogCount: Number,
});

// emit
const emit = defineEmits(["selectItem"]);

// methods
const selectItem = (item) => {
	let t = {
		item,
		remove: props.removable,
	};
	emit("selectItem", t);
};
</script>
<template>
	<div class="basket">
		<template v-if="basket.length">
			<div
				v-for="item in basket"
				:key="item.id"
				class="basket__item"
				@click="selectItem(item)"
			>
				{{ item.name }}
			</div>
		</template>
		<div v-else class="basket__empty">Empty</div>
		<div v-if="catalogCount" class="basket__empty">
			Selected: {{ basket.length }}/{{ catalogCount }}
		</div>
	</div>
</template>

<style lang="scss">
.basket {
	overflow-y: auto;
	padding: 20px;
	background: #1a1b26;
	border: 1px solid #363b54;
	border-radius: 10px;
	color: white;
	text-transform: uppercase;
	margin-bottom: 20px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	transition: 0.2s;
	&:hover {
		border-color: white;
	}

	.basket__item {
		padding: 20px;
		background: #1c1d29;
		border-radius: 10px;
		border: 1px solid #363b54;
		transition: 0.2s;
		cursor: pointer;
		&:hover {
			border-color: white;
		}
	}
	.basket__empty {
		font-size: 20px;
		text-align: center;
		grid-column-start: 1;
		grid-column-end: 5;
	}
}
</style>
