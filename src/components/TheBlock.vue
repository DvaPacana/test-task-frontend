<template>
  <div class="block">
    <div
      v-for="(item) in modelValue"
      class="block__item"
      :class="{'selected': item.isActive}"
      :key="item.id"
      @click="() => toggleItem(item.id)"
    >{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: { id: number, name: string, isActive: boolean }[]
}>()

const emit = defineEmits(['update:modelValue'])

const toggleItem = (id: number) => {
  const index = props.modelValue.findIndex(item => item.id === id)
  const updatedValue = [...props.modelValue]
  updatedValue[index].isActive = !updatedValue[index].isActive
  emit('update:modelValue', updatedValue, id )
}
</script>

<style scoped lang="scss">
.block {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #051f54;
  background-image: linear-gradient( rgba(92,106,156,1) 0%, rgba(172,196,218,1) 79%);
  overflow-x: hidden;
  &:nth-child(1) {
    border-radius: 0 0 10px 0;
  }
  &:nth-child(2) {
    border-radius: 0 0 0 10px;
  }
  &:nth-child(3) {
    border-radius: 0 10px 0 0;
  }
  &:nth-child(4) {
    border-radius: 10px 0 0 0;
  }
  &__item {
    position: relative;
    padding: 10px 2%;
    border: 1px solid white;
    background-color: #051f54;
    color: white;
    white-space: nowrap;
    opacity: 0.6;
    flex-shrink: 1;
    overflow-x: hidden;
    transition: all 0.2s;
    cursor: pointer;
    &:before {
      position: absolute;
      content: '';
      right: -1px;
      bottom: 0;
      top: 0;
      width: 1px;
      //background-image: linear-gradient(90deg, #ffffff00, #fff);
      box-shadow: 0 0 15px white, 0 0 10px white, 0 0 5px white, 0 0 3px white;
      transition: opacity 0.2s;
    }

    &:hover {
      opacity: 1;
      flex-shrink: 0;
      &:before {
        opacity: 0;
      }
    }

    &.selected {
      opacity: 1;
      scale: 1.1;
      flex-shrink: 0;
    }
  }
}
</style>
