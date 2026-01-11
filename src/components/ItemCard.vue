<template>
  <div class="item-card" :class="cssClasses" @click="onClick">
    {{ itemName }}
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';

const { itemId, itemName, itemSelected } = defineProps<{
  itemId: number;
  itemName: string;
  itemSelected?: boolean;
}>();
const emits = defineEmits<{
  (eventName: 'click', id: number): void
}>();

const cssClasses = computed(() => ({
  'item-card--selected': itemSelected,
}));

function onClick() {
  emits('click', itemId);
}
</script>

<style lang="scss" scoped>
.item-card {
  flex: 1 200px;
  min-width: 100px;
  max-width: 200px;
  height: 50px;

  padding: 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  align-content: center;

  border: 4px solid #000;
  border-radius: 5px;
  cursor: pointer;

  &.item-card--selected {
    border-color: #6495ed;
  }
}
</style>
