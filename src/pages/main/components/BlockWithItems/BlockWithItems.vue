<script setup lang="ts">
import {PropType} from "vue";
import {ItemModel, Item, ItemSizeEnum, TooltipTypeEnum, TooltipModel} from "@/pages";

const props = defineProps({
  items: {
    type: Array as PropType<ItemModel[]>,
    required: true,
  },
  currentSelected: {
    type: Number
  }
})

const emit = defineEmits<{
  (emit: 'selectItem', itemId: number):void
}>()

/**
 * При клике на item
 * @param itemId
 */
const onItemClick = (itemId: number) => {
  if (props.currentSelected && props.currentSelected >= 6) {
    document.dispatchEvent(new CustomEvent(
        'set-tooltip-data', {
          detail: new TooltipModel({
            Text: 'Max available items to select is 6',
            Type: TooltipTypeEnum.Error
          })
        })
    )
    return
  }

  emit('selectItem', itemId)
}
</script>

<template>
  <div class="available-items">
    <div class="available-items__container">
      <Item
          v-for="item in items"
          :item="item"
          :size="ItemSizeEnum.Small"
          class="available-items__item"
          @click="onItemClick(item.id)"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.available-items {
  height: 100%;
  width: 100%;
  border: 4px solid black;
  padding: 16px;
}

.available-items__container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.available-items__item {
  flex: 0 0 calc(25% - 6px);
  height: 100px;
}
</style>
