<template>
  <article :id="item.id">
    <component :is="isClickable ? 'button' : 'div'" @click="isClickable ? $emit('on-select', item) : null" :style="{ backgroundImage: `url(${item.img})` }">
      <h2 v-if="item.name" class="title">{{ item.name }}</h2>
    </component>
  </article>
</template>

<script>
  export default {
    name: 'ItemComponent',
    props: {
      item: {
        type: Object,
        required: true,
      },
      isClickable: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>
