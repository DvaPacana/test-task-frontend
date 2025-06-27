<script setup lang="ts">
import TheItem from '@/components/widgets/TheItem.vue'
import Card from '@/shared/ui/kit/Card.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// lefts
store.dispatch('lefts/load')
const lefts = computed(() => store.state.lefts.items)
const leftsDisabled = computed(() => store.getters['lefts/disabled'])
const leftsActive = computed(() => store.getters['lefts/active'])
const leftsSelected = computed(() => store.getters['lefts/selected'])

// rights
store.dispatch('rights/load')
const rights = computed(() => store.state.rights.items)
const rightsDisabled = computed(() => store.getters['rights/disabled'])
const rightsActive = computed(() => store.getters['rights/active'])
const rightsSelected = computed(() => store.getters['rights/selected'])
</script>

<template>
	<div class="catalog">
		<div class="catalog--header">
			<Card class="catalog--header--select-card">
				<div class="catalog--items">
					<TheItem
						v-for="item in leftsSelected()"
						:key="item.id"
						:item="item"
					/>
				</div>
			</Card>
			<Card class="catalog--header--select-card">
				<div class="catalog--items">
					<TheItem
						v-for="item in rightsSelected()"
						:key="item.id"
						:item="item"
					/>
				</div>
			</Card>
		</div>

		<Card>
			<div class="catalog--items">
				<TheItem
					v-for="item in lefts"
					:key="item.id"
					:item="item"
					:disabled="leftsDisabled()"
					:active="leftsActive(item.id)"
					@click="store.dispatch('lefts/chose', item.id)"
				/>
			</div>
		</Card>

		<Card>
			<div class="catalog--items">
				<TheItem
					v-for="item in rights"
					:key="item.id"
					:item="item"
					:disabled="rightsDisabled()"
					:active="rightsActive(item.id)"
					@click="store.dispatch('rights/chose', item.id)"
				/>
			</div>
		</Card>
	</div>
</template>

<style scoped lang="scss">
.catalog {
	height: 100%;
	padding: 2rem 0;

	display: grid;
	grid-template-rows: 200px 1fr;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-content: center;
	gap: 1.5rem;

	&--header {
		grid-column: span 2;

		display: flex;
		justify-content: space-between;
		align-content: center;
		gap: 1.5rem;

		&--select-card {
			width: 500px;
			height: 100%;
		}
	}

	&--items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		align-content: center;
		gap: 1rem;
	}
}
</style>
