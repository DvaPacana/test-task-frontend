import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import App from "../App.vue";
import { useItemsStore } from "../stores/items";

describe("App", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("не дает выбрать больше шести вещей слева", async () => {
    const wrapper = mount(App);
    const store = useItemsStore();

    for (const item of store.leftItems) {
      await wrapper.vm.$nextTick();
      store.toggleLeftItem(item);
    }

    expect(store.selectedLeft.length).toBeLessThanOrEqual(6);
  });

  it("позволяет выбрать только одну вещь справа", async () => {
    const wrapper = mount(App);
    const store = useItemsStore();

    const [first, second] = store.rightItems;

    store.selectRightItem(first);
    await wrapper.vm.$nextTick();
    expect(store.selectedRight?.id).toBe(first.id);

    store.selectRightItem(second);
    await wrapper.vm.$nextTick();
    expect(store.selectedRight?.id).toBe(second.id);
  });
});

