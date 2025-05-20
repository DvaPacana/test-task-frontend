<template>
  <div class="p-3">
    <div class="grid grid-cols-2 gap-4 mb-3">
      <ListCard
        :list="selectedLeftList"
        title="Selected Left List"
        unique-id="selectedLeftList"
        :cols="3"
        @select-item="unSelectLeftItem"
      >
        <template #footer>
          <div class="text-lg font-bold">
            Selected: {{ selectedLeftList.length }} / {{ maxLengthLeftList }}
          </div>
        </template>
      </ListCard>
      <ListCard
        :list="selectedRightList"
        title="Selected Right List"
        unique-id="selectedRightList"
        :cols="1"
        @select-item="unSelectRightItem"
      />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <ListCard
        :list="filteredLeftList"
        @selectItem="selectLeftItem"
        title="Left List"
        unique-id="filteredLeftList"
      />
      <ListCard
        :list="filteredRightList"
        @selectItem="selectRightItem"
        title="Right List"
        unique-id="filteredRightList"
      />
    </div>

    <template v-if="debug">
      <div class="p-3">
        <h2 class="text-lg font-bold">Debug</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            selectedLeftList: {{ selectedLeftList }}<br />
            filteredLeftList: {{ filteredLeftList }}<br />
          </div>
          <div>
            selectedRightList: {{ selectedRightList }}<br />
            filteredRightList: {{ filteredRightList }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import leftList from "@shared/data/leftList";
import rightList from "@shared/data/rightList";
import ListCard from "@features/ListCard/ui/ListCard.vue";
import { useSelectableList } from "@shared/composables/useSelectableList";

const debug = false;
const maxLengthLeftList = 6;
const maxLengthRightList = 1;

const {
  selected: selectedLeftList,
  filtered: filteredLeftList,
  select: selectLeftItem,
  unSelect: unSelectLeftItem,
} = useSelectableList(leftList, maxLengthLeftList);

const {
  selected: selectedRightList,
  filtered: filteredRightList,
  select: selectRightItem,
  unSelect: unSelectRightItem,
} = useSelectableList(rightList, maxLengthRightList);
</script>

<style scoped></style>
