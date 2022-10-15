<template lang="pug">
	.products-list
		ProductItemComponent(
			v-for="item of props.items"
			:key="item.name"
			:item="item"
			@select-item="$emit('select', item)"
		)
</template>

<script setup lang="ts">
import ProductItemComponent from "@/components/ProductItemComponent.vue"
import { defineProps } from "vue"
import type { PropType } from 'vue'
import type { ProductInterface } from "@/interface/product.interface"

const props = defineProps({
	items: {
		type: Array as PropType<Array<ProductInterface>>,
		required: true,
		default: () => []
	}
})
</script>

<style lang="stylus">
.products-list
	width 100%
	height 100%
	max-height 800px
	overflow-y auto
	background-color #fafafa
	border 1px solid #2d2d2d
	padding 20px
	display grid
	grid-template-columns repeat(3, 1fr)
	grid-gap 20px
</style>
