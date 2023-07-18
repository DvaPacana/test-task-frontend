<script lang="ts" setup>
/// ///
// Components
const ItemsSideComponent = defineAsyncComponent(
  () => import('@components/SideComponent.vue')
)
</script>

<template>
  <div id="test-app" class="test-app-container">
    <ItemsSideComponent
      fetch-url="/user-items-list.json"
      multiple
      :max="6"
      data-cy="left-side"
    />
    <ItemsSideComponent fetch-url="/items-list.json" data-cy="right-side" />
  </div>
</template>

<style lang="scss">
.test-app-container {
  display: flex;
}
</style>
