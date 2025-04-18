<script setup lang="ts">
import { Things } from '@/stores/chooseUser';
interface Props {
  data: Things[] | null
}
interface Emits {
  click: (e) => void
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<template>
  <div class="things">
    <div v-for="(item, index) in props.data">
      <div
        :key="item.id"
        class="things__items"
        @click="$emit('click', index)"
      >{{item.name}}</div>
    </div>
  </div>
  <div class="things-info">selected {{props.data.length}}/6</div>
</template>

<style scoped lang="scss">
.things {
  padding: 1em;
  height: 100%;
  
  &__items {
    border: 1px solid black;
    width: 5em;
    height: 5em;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    margin-bottom: 1em;
    cursor: pointer;
  }
  &-info {
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: end;
  }
}
</style>
