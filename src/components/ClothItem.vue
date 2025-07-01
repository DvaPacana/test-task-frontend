<script setup lang="ts">

const {id: idN, name, sel} = defineProps<{
  id: number
  name: string
  sel?: string
}>()
</script>

<template>
  <div :idN="idN" :class="sel ? 'it sel' : 'it'">
    {{ name }}
  </div>
</template>

<style lang="scss">
.it {
  display: inline-block;
  gap: .5rem;
  min-width: calc(25% - 1.2rem - 2px);
  margin: 1rem 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #bbb2;
  &.sel {
    background-color: #b5b5b5;
  }
}
</style>
