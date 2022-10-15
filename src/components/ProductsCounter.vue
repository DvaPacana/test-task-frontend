<template lang="pug">
	.products-counter
		p selected: {{ countString}}
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import type { PropType } from "vue"

const props = defineProps({
	selected_quantity: {
		type: Number as PropType<number>,
		default: 0
	},
	allowable_amount: {
		type: Number as PropType<number>,
		default: 0
	}
})

const countString = computed(() => {
	return `selected: ${ props.selected_quantity }/${ props.allowable_amount }`
})
</script>

<style lang="stylus">

</style>
