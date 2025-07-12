<script setup>
import { ref } from 'vue'
import WeaponCard from './components/WeaponCard.vue'
import ItemCard from './components/ItemCard.vue'

const weaponsRaw = [
    {
        "id": 11,
        "name": "Jacket 1"
    },
    {
        "id": 12,
        "name": "Jacket 2"
    },
    {
        "id": 13,
        "name": "Jacket 3"
    },
    {
        "id": 14,
        "name": "Jacket 4"
    },
    {
        "id": 15,
        "name": "Hoodie 1"
    },
    {
        "id": 16,
        "name": "Hoodie 2"
    },
    {
        "id": 17,
        "name": "Hoodie 3"
    },
    {
        "id": 18,
        "name": "Hoodie 4"
    }
]

const itemsRaw = [
    {
        "id": 1,
        "name": "Shoes 1"
    },
    {
        "id": 2,
        "name": "Shoes 2"
    },
    {
        "id": 3,
        "name": "Shoes 3"
    },
    {
        "id": 4,
        "name": "Shoes 4"
    },
    {
        "id": 5,
        "name": "T-shirt 1"
    },
    {
        "id": 6,
        "name": "T-shirt 2"
    },
    {
        "id": 7,
        "name": "T-shirt 3"
    },
    {
        "id": 8,
        "name": "T-shirt 4"
    }
]

// Game data
const weapons = ref(weaponsRaw.map((item) => {
  item.selected = false
  return item
}))

const items = ref(itemsRaw.map((item) => {
  item.selected = false
  return item
}))

// Selected items tracking
const selectedWeapon = ref(null)
const selectedItems = ref([])

// Weapon selection (max 1)
const selectWeapon = (weapon) => {
  // Deselect all weapons first
  weapons.value.forEach(w => w.selected = false)
  
  // Select the clicked weapon
  weapon.selected = true
  selectedWeapon.value = weapon
}

// Item selection (max 6)
const selectItem = (item) => {
  if (item.selected) {
    // Deselect item
    item.selected = false
    selectedItems.value = selectedItems.value.filter(i => i.id !== item.id)
  } else {
    // Check if we can add more items (max 6)
    if (selectedItems.value.length < 6) {
      item.selected = true
      selectedItems.value.push(item)
    }
  }
}

// Remove item from selection
const removeSelectedItem = (itemId) => {
  const item = items.value.find(i => i.id === itemId)
  if (item) {
    item.selected = false
    selectedItems.value = selectedItems.value.filter(i => i.id !== itemId)
  }
}

// Remove weapon from selection
const removeSelectedWeapon = () => {
  if (selectedWeapon.value) {
    selectedWeapon.value.selected = false
    selectedWeapon.value = null
  }
}

// Handle weapon image loading errors
const handleWeaponImageError = (event) => {
  event.target.src = '/wear/default.svg'; // Fallback to a default SVG image
};

// Handle item image loading errors
const handleItemImageError = (event) => {
  event.target.src = '/items/default.png'; // Fallback to a default PNG image
};
</script>

<template>
  <div id="app">
    <!-- Top Bar with Selected Items -->
    <div class="top-bar">
      <!-- Selected Items (Left) -->
      <div class="selected-items-display">
        <h3>Selected Items ({{ selectedItems.length }}/6)</h3>
        <div class="selected-items-grid">
          <div 
            v-for="item in selectedItems" 
            :key="item.id" 
            class="selected-item"
            @click="removeSelectedItem(item.id)"
            :title="`Click to remove ${item.name}`"
          >
            <img 
              :src="`/items/${item.id}.png`" 
              :alt="item.name"
              class="item-icon-small"
              @error="handleItemImageError"
            />
            <span class="item-name">{{ item.name }}</span>
          </div>
          <div 
            v-for="i in (6 - selectedItems.length)" 
            :key="`empty-${i}`" 
            class="selected-item empty"
          >
            <span class="item-icon-small">+</span>
            <span class="item-name">Empty Slot</span>
          </div>
        </div>
      </div>

      <!-- Selected Weapon (Right) -->
      <div class="selected-weapon-display">
        <h3>Selected Weapon</h3>
        <div 
          v-if="selectedWeapon" 
          class="selected-weapon"
          @click="removeSelectedWeapon"
          :title="`Click to remove ${selectedWeapon.name}`"
        >
          <img 
            :src="`/wear/${selectedWeapon.id}.svg`" 
            :alt="selectedWeapon.name"
            class="weapon-icon-large"
            @error="handleWeaponImageError"
          />
          <div class="weapon-info">
            <span class="weapon-name">{{ selectedWeapon.name }}</span>
          </div>
        </div>
        <div v-else class="selected-weapon empty">
          <span class="weapon-name">Not Selected</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="inventory-container">
      <!-- Items Section (Left) -->
      <div class="items-section">
        <h2 class="section-title">Inventory Items</h2>
        <p class="section-subtitle">Select up to 6 items for your loadout</p>
        
        <div class="items-grid">
          <ItemCard 
            v-for="item in items" 
            :key="item.id"
            :item="item"
            :is-disabled="!item.selected && selectedItems.length >= 6"
            @select="selectItem"
          />
        </div>
      </div>

      <!-- Weapons Section (Right) -->
      <div class="weapons-section">
        <h2 class="section-title">Weapon Arsenal</h2>
        <p class="section-subtitle">Choose your primary weapon</p>
        
        <div class="weapons-grid">
          <WeaponCard 
            v-for="weapon in weapons" 
            :key="weapon.id"
            :weapon="weapon"
            @select="selectWeapon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  min-height: 100vh;
}

#app {
  width: 100%;
  min-height: 100vh;
}

/* Top Bar */
.top-bar {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #3b82f6;
  position: sticky;
  top: 0;
  z-index: 100;
}

.selected-items-display {
  width: 50vw;
}

.selected-weapon-display {
  width: 180px;
}

.selected-items-display h3,
.selected-weapon-display h3 {
  color: #e5e7eb;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.selected-items-grid {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.selected-item {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid #3b82f6;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.selected-item:hover {
  background: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

.selected-item.empty {
  background: rgba(156, 163, 175, 0.2);
  border-color: #9ca3af;
  cursor: default;
}

.selected-item.empty:hover {
  background: rgba(156, 163, 175, 0.2);
  transform: none;
}

.item-icon,
.weapon-icon {
  font-size: 1.2rem;
}

.item-icon-small {
  width: 20px;
  height: 20px;
  object-fit: contain;
  border-radius: 4px;
}

.weapon-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 4px;
}

.weapon-icon-large {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 8px;
  fill: red;
  color: red;
  margin-right: 0.75rem;
}

.item-name,
.weapon-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: #e5e7eb;
}

.selected-weapon {
  background: rgba(169, 161, 147, 0.86);
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 300px;
}

.selected-weapon:hover {
  background: rgba(245, 158, 11, 0.3);
  transform: translateY(-2px);
}

.selected-weapon.empty {
  background: rgba(156, 163, 175, 0.2);
  border-color: #9ca3af;
  cursor: default;
}

.selected-weapon.empty:hover {
  background: rgba(156, 163, 175, 0.2);
  transform: none;
}

.weapon-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Main Container */
.inventory-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Styles */
.items-section,
.weapons-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1f2937;
  text-align: center;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

/* Grid Layouts */
.items-grid,
.weapons-grid {
  display: grid;
  gap: 1rem;
}

.items-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.weapons-grid {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

/* Responsive Design */
@media (max-width: 1024px) {
  .inventory-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  
  .top-bar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .selected-items-grid {
    justify-content: center;
  }
  
  .selected-weapon {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .items-grid,
  .weapons-grid {
    grid-template-columns: 1fr;
  }
  
  .selected-items-grid {
    flex-direction: column;
  }
  
  .selected-item {
    min-width: auto;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .items-section,
  .weapons-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .inventory-container {
    padding: 0.5rem;
  }
  
  .items-section,
  .weapons-section {
    padding: 1rem;
  }
}
</style>
