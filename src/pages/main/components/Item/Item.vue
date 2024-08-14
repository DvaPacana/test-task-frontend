<script setup lang="ts">
import {computed, onMounted, PropType, ref} from "vue";
import {ItemModel, ItemSizeEnum} from "@/pages";

const props = defineProps({
  item: {
    type: Object as PropType<ItemModel>,
    required: true,
  },
  size: {
    type: String as ItemSizeEnum,
  }
})

/** Высота блока */
const height = ref()

/** Стили блока */
const itemStyles = computed(() => ({
    minHeight: props.size == ItemSizeEnum.Big && height.value + 'px',
    cursor: props.size == ItemSizeEnum.Small && 'pointer',
  })
)

/** После монтирования компонента */
onMounted(() => {
  if (props.size == ItemSizeEnum.Big) {
    window.addEventListener('resize' ,setHeight)
    setHeight()
  }
})

/** Задать высоту блока */
const setHeight = () => {
  height.value =  document.querySelector('.selected-items')?.getBoundingClientRect().height
}
</script>

<template>
  <div
      :style="itemStyles"
      class="item">
    {{ item.name }}
  </div>
</template>

<style scoped lang="scss">
 .item {
   display: flex;
   justify-content: center;
   align-items: center;
   border: 4px solid black;
   padding: 8px;
 }
</style>
