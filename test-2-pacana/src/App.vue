<template>
	<div class="header">
		<template
			v-for="headerOption in headerOptions">
			<div
				v-if="
					headerOption.lengthOption
				">
				<div
					:class="headerOption.class">
					<div
						class="item"
						v-for="selected in headerOption.selectedOptions"
						:key="selected.id">
						{{ selected.name }}
					</div>
				</div>
				<div
					v-if="
						headerOption.index === 1
					"
					>Selected
					{{
						headerOption.lengthOption
					}}
					/ 6</div
				>
			</div>
			<div v-else>
				<div class="header__empty">
					<div class="empty"></div>
					<div
						v-if="
							headerOption.index === 1
						">
						Selected 0 / 6</div
					>
				</div>
			</div>
		</template>
	</div>
	<div class="footer">
		<div
			v-for="bottomOption in bottomOptions"
			:key="bottomOption.index"
			:class="bottomOption.class">
			<HelloWorld
				v-for="checkbox in bottomOption.checkboxOptions"
				:key="checkbox.id"
				@click="
					onClick(
						checkbox,
						bottomOption.selectedOptions,
						bottomOption.lengthOption
					)
				"
				:name="checkbox.name"
				:id="checkbox.id" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_HelloWorld } from './components/HelloWorld/models/interfaces'
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
import { ref, computed } from 'vue'
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
	},
	{
		id: 2,
		name: 'Shoes 2',
	},
	{
		id: 3,
		name: 'Shoes 3',
	},
	{
		id: 4,
		name: 'Shoes 4',
	},
	{
		id: 5,
		name: 'T-shirt 1',
	},
	{
		id: 6,
		name: 'T-shirt 2',
	},
	{
		id: 7,
		name: 'T-shirt 3',
	},
	{
		id: 8,
		name: 'T-shirt 4',
	},
])
const selectRightOptions = ref([
	{
		id: 11,
		name: 'Jacket 1',
	},
	{
		id: 12,
		name: 'Jacket 2',
	},
	{
		id: 13,
		name: 'Jacket 3',
	},
	{
		id: 14,
		name: 'Jacket 4',
	},
	{
		id: 15,
		name: 'Hoodie 1',
	},
	{
		id: 16,
		name: 'Hoodie 2',
	},
	{
		id: 17,
		name: 'Hoodie 3',
	},
	{
		id: 18,
		name: 'Hoodie 4',
	},
])

const bottomOptions = [
	{
		index: 1,
		class: 'footer__left',
		checkboxOptions:
			selectLeftOptions.value,
		selectedOptions: selectedLeft.value,
		lengthOption: 5,
	},
	{
		index: 2,
		class: 'footer__left',
		checkboxOptions:
			selectRightOptions.value,
		selectedOptions:
			selectedRight.value,
		lengthOption: 0,
	},
]

const headerOptions = [
	{
		index: 1,
		class: 'header__left',
		selectedOptions: selectedLeft.value,
		lengthOption: computed(
			() => selectedLeft.value.length
		),
	},
	{
		index: 2,
		class: 'header__right',
		selectedOptions:
			selectedRight.value,
		lengthOption: computed(
			() => selectedRight.value.length
		),
	},
]
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
