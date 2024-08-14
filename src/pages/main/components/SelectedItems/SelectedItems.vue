<script setup lang="ts">
import {ItemModel, ItemSizeEnum, Item} from "@/pages";
import {computed, PropType } from "vue";

const props = defineProps({
  items: {
    type: Array as PropType<ItemModel[]>,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
})

const items = computed(() => props.items)

defineEmits<{
  /** Убрать item из выбранного */
  (emit: 'removeItemFromSelected', itemId: number): void
}>()

/** Показывает количество выбранных items и общее количество */
const totalOfSelectedItems = computed(() => `selected: ${props.items.length}/${props.totalItems}`)
</script>

<template>
    <div class="selected-items">
      <div class="selected-items__container">
        <Item
            v-for="item in items"
            :size="ItemSizeEnum.Small"
            :item="item"
            class="selected-items__item"
            @click="$emit('removeItemFromSelected', item.id)"
        />
      </div>
      <div class="selected-items__total"> {{ totalOfSelectedItems }}</div>
    </div>
</template>

<style scoped lang="scss">
.selected-items {
  width: 60%;
  border: 4px solid black;
  padding: 8px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.selected-items__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 8px;
  height: 100%;
}

.selected-items__total {
  margin-top: 16px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
}
</style>
