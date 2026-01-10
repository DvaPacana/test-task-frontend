<script setup>
import ItemToken from '@/elements/ItemToken.vue'

const props = defineProps({
  itemsList: { type: Array },
})
const emit = defineEmits(['itemSelect'])
</script>

<template>
  <div class="panel selector-panel">
    <ItemToken
      v-for="item in itemsList"
      :key="item.id"
      :item-model="item"
      @click="emit('itemSelect', item)"
    />
  </div>
</template>

<style>
.selector-panel {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: 5px;
}
</style>
