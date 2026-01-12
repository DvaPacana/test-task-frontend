import { defineAsyncComponent } from "vue";

export const ItemList= defineAsyncComponent(() => import("./item-list.vue"));
