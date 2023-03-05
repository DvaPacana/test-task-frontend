<script setup>
import { reactive } from "vue";
import Basket from "@/components/Basket.vue";

const props = defineProps({
	block: Array,
	defaultLimit: Number,
});

// state
const state = reactive({
	selected: [],
	selectType: "copy",
	limit: props.defaultLimit,
});

// methods
const selectItem = ({ item, remove }) => {
	let index = state.selected.findIndex(
		(selectedItem) => selectedItem.id === item.id
	);

	// check type of select method
	if (remove) {
		state.selected.splice(index, 1);
		return;
	}

	// check item if it was added with select type 'copy'
	if (index !== -1 && state.selectType === "copy") return;

	// limit check with select type 'copy'
	if (state.selectType === "copy" && state.selected.length === state.limit)
		return;

	// check item if it was added with the select type 'replace' and remove element if condition is true
	if (index !== -1 && state.selectType === "replace") {
		state.selected.splice(index, 1);
	}

	if (
		index === -1 &&
		state.selected.length === state.limit &&
		state.selectType === "replace"
	) {
		state.selected.shift();
	}

	state.selected.push(item);
};
</script>

<template>
	<div class="block">
		<div class="block__limit">
			<label for="limit" class="block__limit__label">limit:</label>
			<input
				id="limit"
				v-model="state.limit"
				type="number"
				class="block__limit__input"
			/>
		</div>
		<div class="block__radio">
			<div class="block__radio__item" @click="state.selectType = 'copy'">
				<div class="icon">
					<span v-if="state.selectType === 'copy'"></span>
				</div>
				<div class="text">Copy</div>
			</div>
			<div
				class="block__radio__item"
				@click="state.selectType = 'replace'"
			>
				<div class="icon">
					<span v-if="state.selectType === 'replace'"></span>
				</div>
				<div class="text">Replace</div>
			</div>
		</div>
		<Basket
			:basket="state.selected"
			:catalogCount="block.length"
			@selectItem="selectItem"
			removable
		/>
		<Basket :basket="block" @selectItem="selectItem" />
	</div>
</template>
<style scoped lang="scss">
.block {
	height: 100vh;
	padding: 20px;

	.block__limit {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.block__limit__label {
			text-transform: uppercase;
			color: white;
			margin-right: 10px;
			font-size: 20px;
		}
		.block__limit__input {
			background: transparent;
			border: none;
			border-bottom: 1px solid #363b54;
			height: 40px;
			color: white;
			width: 100%;
			outline: none;
			transition: 0.2s;
			font-size: 20px;

			&:focus {
				border-color: white;
			}
		}
	}

	.block__radio {
		display: flex;
		margin-bottom: 20px;
		text-transform: uppercase;
		color: white;
		.block__radio__item {
			margin-right: 20px;
			display: flex;
			align-items: center;
			cursor: pointer;
			.icon {
				position: relative;
				width: 30px;
				height: 30px;
				background: #363b54;
				margin-right: 10px;

				span {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					display: block;
					width: 20px;
					height: 20px;
					background: #1a1b26;
				}
			}
		}
	}
}
</style>
