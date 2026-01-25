<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  items: {
    type: Array,
    default: () => []
  },
  isShowCount: {
    type: Boolean,
    default: false
  }
})

const countText = computed(() => {
  return `Выбрано: ${props.items.length}`
})
</script>

<template>
  <div class="box selected-block">
    <h3>{{ title }}</h3>

    <div v-if="!items.length">Ничего не выбрано</div>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <div
        v-if="isShowCount"
        class="count"
    >
      {{ countText }}
    </div>
  </div>
</template>

<style scoped>
.selected-block {
  position: relative;
  min-height: 120px;
}

.count {
  position: absolute;
  right: 8px;
  bottom: 6px;
  font-size: 12px;
  color: #999;
}
</style>
