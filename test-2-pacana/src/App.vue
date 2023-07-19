<template>
	<div class="header">
		<div v-if="selectedLeft.length">
			<div class="header__left">
				<div
					class="item"
					v-for="selected in selectedLeft"
					:key="selected.id">
					{{ selected.name }}
				</div>
			</div>
			<div
				>Selected
				{{ selectedLeft.length }} /
				6</div
			>
		</div>
		<div v-else>
			<div class="header__empty">
				<div class="empty"></div>
				<div> Selected 0 / 6</div>
			</div>
		</div>

		<div
			class="header__right"
			v-if="selectedRight.length">
			<div
				v-for="selected in selectedRight"
				:key="selected.id">
				{{ selected.name }}</div
			>
		</div>
		<div
			v-else
			class="empty">
		</div>
	</div>
	<div class="footer">
		<div class="footer__left">
			<HelloWorld
				v-for="checkbox in selectLeftOptions"
				:key="checkbox.id"
				@click="
					onClick(
						checkbox,
						selectedLeft,
						5
					)
				"
				:label-text="checkbox.name"
				:id="checkbox.id" />
		</div>
		<div class="footer__left">
			<HelloWorld
				v-for="checkbox in selectRightOptions"
				:key="checkbox.id"
				@click="
					onClick(
						checkbox,
						selectedRight,
						0
					)
				"
				:label-text="checkbox.name"
				:id="checkbox.id" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_HelloWorld } from './components/HelloWorld/models/interfaces'
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
import { ref } from 'vue'
const selectedLeft = ref<
	I_HelloWorld[]
>([])
const selectedRight = ref<
	I_HelloWorld[]
>([])
const onClick = (
	currentItem: I_HelloWorld,
	currentArray: I_HelloWorld[],
	length: number
) => {
	let index = -1
	index = currentArray.findIndex(
		(item) => item.id === currentItem.id
	)
	if (index < 0) {
		if (currentArray.length > length) {
			currentArray.shift()
		}
		currentArray.push(currentItem)
	} else {
		currentArray.splice(index, 1)
	}
}

const selectLeftOptions = ref([
	{
		id: 1,
		name: 'Shoes 1',
		value: false,
	},
	{
		id: 2,
		name: 'Shoes 2',
		value: false,
	},
	{
		id: 3,
		name: 'Shoes 3',
		value: false,
	},
	{
		id: 4,
		name: 'Shoes 4',
		value: false,
	},
	{
		id: 5,
		name: 'T-shirt 1',
	},
	{
		id: 6,
		name: 'T-shirt 2',
		value: false,
	},
	{
		id: 7,
		name: 'T-shirt 3',
		value: false,
	},
	{
		id: 8,
		name: 'T-shirt 4',
		value: false,
	},
])
const selectRightOptions = ref([
	{
		id: 11,
		name: 'Jacket 1',
		value: false,
	},
	{
		id: 12,
		name: 'Jacket 2',
		value: false,
	},
	{
		id: 13,
		name: 'Jacket 3',
		value: false,
	},
	{
		id: 14,
		name: 'Jacket 4',
		value: false,
	},
	{
		id: 15,
		name: 'Hoodie 1',
		value: false,
	},
	{
		id: 16,
		name: 'Hoodie 2',
		value: false,
	},
	{
		id: 17,
		name: 'Hoodie 3',
		value: false,
	},
	{
		id: 18,
		name: 'Hoodie 4',
		value: false,
	},
])
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100px;
	border: 1px solid #ccc;
	&__left {
		display: flex;
		flex-direction: row;
		padding: 10px;
		align-self: center;
	}
	&__right {
		display: flex;
		flex-direction: row;
		align-self: center;
		padding: 10px;
		border: 1px solid #ccc;
	}
	&__empty {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
}
.item {
	border: 1px solid #ccc;
	padding: 10px;
}
.footer {
	display: flex;
	flex-direction: row;
	align-items: baseline;
	border: 1px solid #ccc;
	height: 100vmax;
	&__left {
		display: flex;
		flex-direction: row;
		margin: 20px;
		border: 1px solid #ccc;
	}
}
.empty {
	width: 50%;
	height: 56px;
}
</style>
