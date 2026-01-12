import { defineAsyncComponent } from "vue";

export const ItemCard = defineAsyncComponent(() => import("./item-card.vue"));
