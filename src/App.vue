<script setup lang="ts">
import SelectedUserItems from './components/SelectedUserItems.vue';
import SelectedAvailableItem from './components/SelectedAvailableItem.vue';
import UserItemsList from './components/UserItemsList.vue';
import AvailableItemsList from './components/AvailableItemsList.vue';
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1>Item Selection System</h1>
      <p class="subtitle">Select 1-6 items from the left and 1 item from the right</p>
    </header>

    <main class="app-main">
      <section class="top-section">
        <div class="top-section__left">
          <h2>Selected User Items</h2>
          <SelectedUserItems />
        </div>
        <div class="top-section__right">
          <h2>Selected Available Item</h2>
          <SelectedAvailableItem />
        </div>
      </section>

      <section class="bottom-section">
        <div class="bottom-section__left">
          <h2>User Items</h2>
          <UserItemsList />
        </div>
        <div class="bottom-section__right">
          <h2>Available Items</h2>
          <AvailableItemsList />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 20px;
}

.app-header {
  text-align: center;
  margin-bottom: 32px;
}

.app-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  color: #666;
}

.app-main {
  max-width: 1400px;
  margin: 0 auto;
}

.top-section,
.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.top-section__left,
.top-section__right,
.bottom-section__left,
.bottom-section__right {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
}

@media (max-width: 1024px) {
  .top-section,
  .bottom-section {
    grid-template-columns: 1fr;
  }
}
</style>
