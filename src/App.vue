<script lang="ts" setup>
/// ///
// Components
const ItemsSideComponent = defineAsyncComponent(
  () => import('@components/SideComponent.vue')
)
</script>

<template>
  <div id="test-app" class="test-app-container">
    <ItemsSideComponent fetch-url="/user-items-list.json" multiple :max="6" />
    <ItemsSideComponent fetch-url="/user-items-list.json" />
  </div>
</template>

<style lang="scss">
.test-app-container {
  display: flex;
}
</style>
