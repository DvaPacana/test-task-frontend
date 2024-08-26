<script setup lang="ts">
	import type { UserItem } from "@/interfaces/items/user"

	defineProps({
		item: {
			type: Object as () => UserItem,
			required: true,
		},
	})
</script>

<template>
	<div class="ui__user__item__container">
		<span class="item__name">{{ item.name }}</span>
	</div>
</template>

<style scoped>
	.ui__user__item__container {
		width: 128px;
		height: 128px;
		border: 1px solid white;
		display: flex;
		cursor: pointer;

		.item__name {
			user-select: none;
			color: white;
			margin: auto auto;
		}
	}
</style>
