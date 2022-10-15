<template lang="pug">
	.products-select(:class="{'products-select_solo': props.solo}")
		.products-select__item(
			v-for="item of props.selected"
			:key="item + item.id"
			@click="removeItem(item.id)"
		)
			p(v-html="item.id")
			p(v-html="item.name")
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import type { PropType } from 'vue'
import type { ProductInterface } from "@/interface/product.interface"

const emit = defineEmits(['remove-selected-item'])

const props = defineProps({
	selected: {
		type: Set as PropType<Set<ProductInterface>>,
		default: () => []
	},
	solo: {
		type: Boolean,
		default: false
	}
})

const removeItem = (id: number): void => {
	emit('remove-selected-item', id)
}
</script>

<style lang="stylus">
.products-select
	width 70%
	height 200px
	background-color #fafafa
	border 1px solid #2d2d2d
	padding 20px
	display grid
	grid-template-columns repeat(3, 1fr)
	grid-gap 20px

	&_solo
		grid-template-columns 1fr

		& ^[0]__item
			max-height unset

	&__item
		width 100%
		max-height 70px
		border 1px solid #3e3e3e
		display flex
		flex-direction column
		align-items center
		justify-content center
		cursor pointer
		transition background-color .25s ease-in-out

		&:hover
			background-color darken(#fff, 10%)
</style>
