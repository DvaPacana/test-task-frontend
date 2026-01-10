<script setup>
const props = defineProps({
  itemModel: { type: Object, required: true },
  fullSize: { type: Boolean, default: false },
})
</script>

<template>
  <div class="item-token" :class="{ 'item-token_full': fullSize }">
    {{ itemModel.name }}
  </div>
</template>

<style>
.item-token {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 4px;
  cursor: pointer;
  user-select: none;
}
.item-token_full {
  width: 100px;
  height: 100px;
}
</style>
