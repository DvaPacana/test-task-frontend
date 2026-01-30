<script setup lang="ts">
import type { Item } from "@/types/item.type.ts";

interface IProps {
	item: Item,
	selected: boolean,
}

defineProps<IProps>();
</script>

<template>
	<div :class="['item-card', { 'item-card--selected': selected }]">{{ item.name }}</div>
</template>

<style scoped lang="scss">
.item-card {
	width: 80px;
	height: 80px;
	border: 2px solid $border-black;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

  &--selected {
    border: 2px solid $border-selected;
  }
}
</style>