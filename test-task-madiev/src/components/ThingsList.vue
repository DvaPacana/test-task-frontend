<script setup lang="ts">
import { Things } from '@/stores/chooseUser';
interface Props {
  data: Things[]
}
interface Emits {
  click: (e) => void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

</script>

<template>
  <div class="things">
    <div v-for="item in props.data">
      <div
        :key="item.id"
        class="things__items"
        @click="$emit('click', item)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.things {
  padding: 1em;
  
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
}
</style>
