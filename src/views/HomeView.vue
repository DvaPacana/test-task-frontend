<script setup lang="ts">
	import UiItem from "@/components/Items/UiItem.vue"
	import UiSelectedItem from "@/components/Items/UiSelectedItem.vue"

	import proposed_items from "@/mocks/proposed_items.json"
	import user_items from "@/mocks/user_items.json"

	import { nextTick, ref, watch } from "vue"

	import type { UserItem } from "@/interfaces/items/user"
	import type { ProposedItem } from "@/interfaces/items/proposed"

	const userItems = ref<Array<UserItem>>(user_items)
	const proposedItems = ref<Array<ProposedItem>>(proposed_items)

	const selectedUserItems = ref<Array<UserItem>>([])
	const selectedProposedItems = ref<ProposedItem>()

	watch(
		selectedUserItems,
		async () => {
			if (selectedUserItems.value.length > 6) {
				await nextTick()
				selectedUserItems.value.shift()
			}
		},
		{
			deep: true,
		},
	)
</script>

<template>
	<div id="layout">
		<div class="selected__items__container">
			<div class="user__items container">
				<UiItem
					v-for="item in selectedUserItems"
					:key="item.id"
					:item="item"
				/>
			</div>
			<div class="selected__item container">
				<UiSelectedItem
					v-if="selectedProposedItems"
					:item="selectedProposedItems"
					sizes="big"
				/>
			</div>
		</div>
		<div class="available__items__container">
			<div class="user__items container">
				<UiItem
					v-for="item in userItems"
					:key="item.id"
					:item="item"
					@click="() => selectedUserItems.push(item)"
				/>
			</div>
			<div class="proposed__items container">
				<UiSelectedItem
					v-for="item in proposedItems"
					:key="item.id"
					:item="item"
					@click="() => (selectedProposedItems = item)"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	#layout {
		padding: 2rem;
		height: 100dvh;
		display: flex;
		flex-direction: column;

		.selected__items__container,
		.available__items__container {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;

			.container {
				min-height: 328px;
				border: 1px solid white;
				padding: 1rem;
				gap: 12px;

				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
			}
		}

		.available__items__container {
			margin-top: 2rem;
			height: 100%;
			width: 100%;
		}
	}
</style>
