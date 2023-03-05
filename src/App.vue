<script setup>
import Block from "./components/Block.vue";
import { left, right } from "../db";
</script>

<template>
	<div class="main">
		<Block
			v-for="(block, key) in { left, right }"
			:key="key"
			:block="block"
			:defaultLimit="key === 'left' ? 1 : 6"
		/>
	</div>
</template>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	background: #16161e;
}

.main {
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
</style>
