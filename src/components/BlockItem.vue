<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    required: false,
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <div
      class="block-item"
      :class="{'selected': selected}"
      @click="emit('click')"
  >
    {{data.name}}
  </div>
</template>

<style scoped>
.block-item {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
}

.selected {
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}
</style>
