<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="border p-3"><slot name="selectedItems"></slot></div>
    <div class="box-content size-24 w-full">
      <slot name="selectedItem"></slot>
    </div>
    <div class="border"><slot name="leftPane"></slot></div>
    <div class="border"><slot name="rightPane"></slot></div>
  </div>
</template>
