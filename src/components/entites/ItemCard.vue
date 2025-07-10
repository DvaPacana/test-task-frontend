<template>
  <div class="Item" :class="{Item_clickable: clickable}" @click="clickHandler">
    <img class="Item__image" :src="`${item.image}.png`" alt=""/>
    <div class="Item__caption">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import {inject, defineProps} from "vue";

const props = defineProps({
  item: {
    type: Object,
    validator(value) {
      return ['id', 'name', 'image'].every(key => key in value)
    }
  },
  clickable: {
    type: Boolean,
    default: false,
  },
})

const itemClicked = inject('itemClicked', () => {})

const clickHandler = () => {
  if (props.clickable) {
    itemClicked(props.item)
  }
}
</script>

<style scoped lang="scss">
.Item {
  position: relative;
  display: flex;

  &_clickable {
    cursor: pointer;
  }

  &__image {
    width: 100%;
  }

  &__caption {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 4px;
    transition-duration: 100ms;
    background: #FFFFFF80;
    backdrop-filter: blur(8px);
  }

  &:hover &__caption {
    opacity: 1;
  }
}
</style>
