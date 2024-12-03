<script setup lang="ts">
import { ref } from 'vue';
import { Thing } from '../interfaces';
import SelectedUser from './SelectedUser.vue';
import SelectedChoice from './SelectedChoice.vue';
import ThingsUser from './ThingsUser.vue';
import ThingsChoice from './ThingsChoice.vue';

const thingsUser = ref<Thing[]>([
	{
		id: 1,
		name: 'Shoes 1',
	}, {
		id: 2,
		name: 'Shoes 2',
	}, {
		id: 3,
		name: 'Shoes 3',
	}, {
		id: 4,
		name: 'Shoes 4',
	}, {
		id: 5,
		name: 'T-shirt 1',
	}, {
		id: 6,
		name: 'T-shirt 2',
	}, {
		id: 7,
		name: 'T-shirt 3',
	}, {
		id: 8,
		name: 'T-shirt 4',
	}
]);
const thingsChoice = ref<Thing[]>([
	{
		id: 11,
		name: 'Jacket 1',
	}, {
		id: 12,
		name: 'Jacket 2',
	}, {
		id: 13,
		name: 'Jacket 3',
	}, {
		id: 14,
		name: 'Jacket 4',
	}, {
		id: 15,
		name: 'Hoodie 1',
	}, {
		id: 16,
		name: 'Hoodie 2',
	}, {
		id: 17,
		name: 'Hoodie 3',
	}, {
		id: 18,
		name: 'Hoodie 4',
	}
]);
</script>

<template>
	<div id="container">
		<SelectedUser />
		<SelectedChoice />
		<ThingsUser :things="thingsUser" />
		<ThingsChoice :things="thingsChoice" />
	</div>
</template>

<style lang="scss" scoped>
#container {
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr;
	gap: 20px;
	padding: 20px;
	overflow: hidden;
}
</style>
