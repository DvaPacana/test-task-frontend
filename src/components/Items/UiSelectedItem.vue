<script setup lang="ts">
	import type { ProposedItem } from "@/interfaces/items/proposed"

	defineProps({
		item: {
			type: Object as () => ProposedItem,
			required: true,
		},
		sizes: {
			type: String as () => "small" | "big",
			default: "small",
		},
	})
</script>

<template>
	<div
		:class="[sizes]"
		class="ui__proposed__item__container"
	>
		<span class="item__name">{{ item.name }}</span>
	</div>
</template>

<style scoped>
	.ui__proposed__item__container {
		width: 128px;
		height: 128px;
		border: 1px solid white;
		display: flex;
		cursor: pointer;

		&.big {
			width: 100%;
			height: 100%;
		}

		.item__name {
			user-select: none;
			color: white;
			margin: auto auto;
		}
	}
</style>
