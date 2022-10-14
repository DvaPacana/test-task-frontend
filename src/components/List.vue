<script setup>
import ListItem from "./ListItem.vue";

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  category: {
    type: String
  }
});

const emit = defineEmits(["onSelect"]);

const onItemClickHandler = (item) => {
  emit("onSelect", item, props.category);
};
</script>
<template>
  <div class="list">
    <ListItem
      v-for="item in items"
      :key="item.id"
      @click="onItemClickHandler(item)"
      >{{ item.name }}</ListItem
    >
  </div>
</template>
<style scoped>
.list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
