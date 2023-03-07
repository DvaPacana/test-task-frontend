<script setup>
import bottomClothingPieces from "./data/shoes-and-shirts.json";
import topClothingPieces from "./data/hoodies-and-jackets.json";

import Items from "./components/Items.vue";
import Item from "./components/Item.vue";
import ItemSelectable from "./components/ItemSelectable.vue";

import { ref } from "vue";

const MAX_BOTTOM_CLOTHING_PIECES_AMOUNT = 6;
const bottomClothingPiecesSelected = ref([]);
function selectBottomClothingPiece(bottomClothingPiece) {
	if (bottomClothingPiecesSelected.value.length === MAX_BOTTOM_CLOTHING_PIECES_AMOUNT) return;
	bottomClothingPiecesSelected.value.push(bottomClothingPiece);
}
function removeBottomClothingPiece(bottomClothingPiece) {
	bottomClothingPiecesSelected.value = bottomClothingPiecesSelected.value.filter((piece) => piece.id !== bottomClothingPiece.id);
}

const topClothingPiece = ref(topClothingPieces[0]);
function selectTopClothingPiece(topClothingPieceNew) {
	topClothingPiece.value = topClothingPieceNew;
}
</script>

<template>
	<main>
		<!-- view selected items -->
		<Items :items="bottomClothingPiecesSelected">	
			<template #item="item">
				<Item :item="item"></Item>
			</template>
			<template #counter>
				<span>Selected {{ bottomClothingPiecesSelected.length }} out of {{ MAX_BOTTOM_CLOTHING_PIECES_AMOUNT }}</span>
			</template>
		</Items>

		<Item :item="topClothingPiece" />

		<!-- view all available items -->
		<Items :items="bottomClothingPieces">
			<template #item="item">
				<ItemSelectable
					@select="selectBottomClothingPiece"
					@remove="removeBottomClothingPiece"
					:selected="!!bottomClothingPiecesSelected.find(selectedItem => selectedItem.id === item.id)"
					:item="item"
				/>
			</template>
		</Items>
		<Items :items="topClothingPieces">
			<template #item="item">
				<ItemSelectable
					:item="item"
					@select="selectTopClothingPiece"
				/>
			</template>
		</Items>
	</main>

</template>

<style scoped>
main {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: minmax(50px, 1fr) 3fr;
}
</style>
