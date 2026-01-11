<template>
  <div class="item" @click="handleClick">
    <div class="item__name">{{ name }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  idx?: number
  name: string
  clickHandler: (id?: number) => void
}>()

const { idx, name, clickHandler } = props

const handleClick = () => clickHandler(idx)
</script>
<style lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  border: 1px solid #000;
  cursor: pointer;
  transition: 0.3s;
  color: #000;
  &__name {
    font-size: 18px;
  }
  &:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>
