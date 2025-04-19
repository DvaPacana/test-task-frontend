<template>
  <div class="wrapper">
    <selected-block
      title="Selected Left"
      :items="selectedLeft"
      :max="6"
    />

    <selected-block
      title="Selected Right"
      :items="selectedRight ? [selectedRight] : []"
    />

    <item-list
      :items="leftItems"
      :selected="selectedLeft"
      :max="6"
      @update:selected="updateLeft"
    />

    <item-list
      :items="rightItems"
      :selected="selectedRight"
      single
      @update:selected="updateRight"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ItemList from '@/components/ItemList.vue';
import SelectedBlock from '@/components/SelectedBlock.vue';
import { LEFT_ITEMS, RIGHT_ITEMS } from '@/constants/mock';

export default {
  name: 'App',
  components: { ItemList, SelectedBlock },
  data() {
    return {
      leftItems: LEFT_ITEMS,
      rightItems: RIGHT_ITEMS,
    };
  },
  computed: {
    ...mapState(['selectedLeft', 'selectedRight']),
  },
  methods: {
    updateLeft(newList) {
      this.$store.commit('SET_LEFT', newList);
    },
    updateRight(newItem) {
      this.$store.commit('SET_RIGHT', newItem);
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
</style>
