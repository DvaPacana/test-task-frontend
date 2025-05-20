<template>
  <div 
    class="item-card" 
    :class="{'selected': isSelected }" 
    :style="cssVars"
    @click="$emit('selectItem', item)">
    <div class="default-img" />
    <h3>{{ item?.name }}</h3>
  </div>
</template>
  
<script lang="ts" setup>
import { ItemCardProps } from '@/types/componentsProps';

const props = withDefaults(defineProps<ItemCardProps>(), {
  imgSize: () => [100, 100],
});

const cssVars = {
  '--img-width': `${props.imgSize[0]}px`,
  '--img-height': `${props.imgSize[1]}px`,
  '--img-url': `url('https://placehold.co/${props.imgSize[0]}x${props.imgSize[1]}')`
};
</script>
  
<style lang="scss" scoped>
.default-img {
  width: var(--img-width);
  height: var(--img-height);
  background-image: var(--img-url);
  background-size: cover;
  background-position: center;
}

.item-card {
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &.selected {
    background-color: #d0e0ff;
  }
  &:hover {
    background-color: #f0f0f0;
  }
}
</style>