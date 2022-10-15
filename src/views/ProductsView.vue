<template lang="pug">
	.products
		.products__container
			.products__left
				.products__head
					ProductsSelectComponent(
						:selected="users_stuff_selected"
						@remove-selected-item="removeSelectedItems"
					)
					ProductsCounter(
						:selected_quantity="users_stuff_selected.size"
						:allowable_amount="users_stuff_max_quantity"
					)
				.products__body
					ProductsListComponent(
						:items="users_stuff"
						@select="selectedItems"
					)

			.products__right
				.products__head
					ProductsSelectComponent(
						:selected="things_to_choose_selected"
						@remove-selected-item="removeSelectedItem"
						solo
					)
				.products__body
					ProductsListComponent(
						:items="things_to_choose"
						@select="selectedItem"
					)
</template>

<script setup lang="ts">
import ProductsSelectComponent from "@/components/ProductsSelectComponent.vue"
import ProductsListComponent from "@/components/ProductsListComponent.vue"
import { reactive, onMounted, ref } from "vue"
import type { ProductInterface } from "@/interface/product.interface"
import ProductService from "@/service/product.service"
import ProductsCounter from "@/components/ProductsCounter.vue"

const users_stuff: Array<ProductInterface> = reactive([])
const users_stuff_max_quantity = ref<number>(6)

const things_to_choose: Array<ProductInterface> = reactive([])

const users_stuff_selected: Set<ProductInterface> = reactive(new Set())
const things_to_choose_selected: Set<ProductInterface> = reactive(new Set())

const selectedItems = (data: ProductInterface): void => {
	if (users_stuff_selected.size < users_stuff_max_quantity.value) {
		users_stuff_selected.add(data)
	}
}

const selectedItem = (data: ProductInterface): void => {
	if (things_to_choose_selected.size < 1) {
		things_to_choose_selected.add(data)
	}
}

const removeSelectedItems = (id: number): void => {
	users_stuff_selected.forEach((item: ProductInterface) => item.id === id ? users_stuff_selected.delete(item) : item)
}

const removeSelectedItem = (id: number): void => {
	things_to_choose_selected.forEach((item: ProductInterface) => item.id === id ? things_to_choose_selected.delete(item) : item)
}

async function getUsersStuff () {
	const response = await ProductService.getUsersStuff()
	users_stuff.push(...response)
}

async function getThingsToChoose () {
	const response = await ProductService.getThingsToChoose()
	things_to_choose.push(...response)
}

onMounted(() => {
	getUsersStuff()
	getThingsToChoose()
})
</script>

<style lang="stylus">
.products
	min-height 100vh
	padding 20px

	&__container
		display grid
		grid-gap 20px
		grid-template-columns repeat(2, 1fr)

	&__left, &__right
		display flex
		flex-direction column
		gap 20px

	&__head
		display flex
		flex-direction column
		width 70%
		background-color #fafafa
		border 1px solid #2d2d2d
		padding 20px

	&__right
		& ^[0]__head
			align-self flex-end

	&__body
		width 100%
</style>
