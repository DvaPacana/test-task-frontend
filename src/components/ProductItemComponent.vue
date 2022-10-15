<template lang="pug">
	.product(@click="selectItem(item)")
		p(v-html="'ID: ' + item.id")
		p(v-html="'Name: ' + item.name")
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import type { PropType } from 'vue'
import type { ProductInterface } from "@/interface/product.interface"

const emit = defineEmits(['select-item'])

defineProps({
	item: {
		type: Object as PropType<ProductInterface>,
		required: true
	}
})

const selectItem = (item: ProductInterface): void => {
	emit('select-item', item)
}
</script>

<style lang="stylus">
.product
	width 100%
	height 150px
	border 1px solid #3e3e3e
	padding 5px
	display flex
	flex-direction column
	align-items center
	justify-content center
	cursor pointer
	transition background-color .25s ease-in-out

	&:hover
		background-color darken(#fff, 10%)
</style>
