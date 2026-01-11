<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  },
})

defineEmits(['click'])
</script>

<template>
  <div
    class="item"
    :class="{ selected }"
    @click="$emit('click', item)"
  >
    {{ item.name }}
  </div>
</template>

<style scoped>
.item {
  padding: 10px 15px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: white;
  transition: all 0.3s ease;
  user-select: none;
}

.item {
  cursor: pointer;
}

.item:hover {
  background-color: #e3f2fd;
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.item.selected {
  background-color: #3498db;
  color: white;
  border-color: #2980b9;
}
</style>

