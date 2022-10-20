import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useSelectedStore = defineStore("selectedStore", () => {
  const user = ref([]);
  const all = ref(null);

  function init() {
    const localStorageItems = localStorage.getItem("items");
    if (localStorageItems) {
      try {
        this.$patch(JSON.parse(localStorageItems));
      } catch {
        console.log("Broken localStorage");
        localStorage.removeItem("items");
      }
    }

    watch(this, (selected) => {
      localStorage.setItem("items", JSON.stringify(selected));
    });
  }
  return { user, all, init };
});
