<script setup lang="ts">
import type { Item } from "@/types/item.type.ts";

interface IProps {
  item: Item | null,
}

defineProps<IProps>();
</script>

<template>
  <div class="selected-item">
    <div v-if="item">
      Selected item: {{ item.name }}
    </div>
    <div v-else>
      No item selected
    </div>
  </div>
</template>