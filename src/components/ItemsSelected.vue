<template>
  <div class="items__container">
    <ul
      class="items__list"
      :class="{
        'items--counter': isCounter,
        'items--single': props.count === 1,
      }"
    >
      <li
        v-for="item in items"
        :key="item.id"
        class="items__item"
        :class="{
          'items__item--empty': (props.count === 1 && n === 1) || n >= 4,
        }"
        @click="handleRemove(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div
      v-if="isCounter"
      class="counter"
    >
      <span class="counter__text">selected: </span>
      <span class="counter__current">{{ items.length }}</span
      >/<span class="counter__total">{{ props.count }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 6,
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
const isCounter = props.count != 1;

const emit = defineEmits(['remove-item']);

const handleRemove = (itemId) => {
  emit('remove-item', itemId);
};
</script>

<style lang="scss" scoped>
.items__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
}
.items__list {
  @include list-none;
  height: 100%;
  display: grid;
  gap: calc($grid-gap-tiny);

  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  @media (min-width: 992px) {
    display: flex;
    height: 100%;
  }
}
.items--counter {
  height: calc(100% - 1em - $grid-gap-tiny);
}
.items--single {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  aspect-ratio: 1 / 1;
}

.items__item {
  aspect-ratio: 1 / 1;
  min-height: 100%;
  max-height: 100%;
  max-height: calc(100% - $grid-gap-tiny / 2);

  overflow: hidden;
  font-size: 0.8em;
  @include flex-center;
  user-select: none;

  border: 2px dashed #3b82f6;
  background: #dbeafe;
}

.items--single .items__item {
  height: 100%;
  max-height: 100%;
}

.items__item:not(.items__item--empty):hover {
  cursor: pointer;
  border-color: rgba(239, 68, 68, 1);
  background: rgba(254, 226, 226, 1);
}

.items__item--empty {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  color: rgba(107, 114, 128, 1);
  border: 0;
  opacity: 0.7;
}

.counter {
  line-height: 1;
}
</style>
