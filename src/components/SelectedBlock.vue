<template>
  <div class="selected-block">
    <h3>
      {{ title }}
      <span v-if="max">({{ items.length }} / {{ max }})</span>
    </h3>
    <ul class="selected-block__list">
      <li v-for="item in items" :key="item.id" class="selected-block__item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectedBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
    },
    max: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style scoped>
.selected-block {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #333;
}

.selected-block__list {
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
}
</style>
