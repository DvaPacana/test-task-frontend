<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select'])
</script>

<template>
  <div 
    class="item-card"
    :class="{ 
      'selected': item.selected, 
      'disabled': isDisabled 
    }"
    @click="$emit('select', item)"
    :title="item.selected ? 'Click to remove' : 'Click to select'"
  >
    <div class="item-header">
      <img 
        :src="`/items/${item.id}.png`" 
        :alt="item.name"
        class="item-icon"
        @error="handleImageError"
      />
    </div>
    <h3 class="item-name">{{ item.name }}</h3>
    <div class="item-status">
      <span v-if="item.selected" class="status-selected">✓ Selected</span>
      <span v-else-if="isDisabled" class="status-full">Full</span>
    </div>
  </div>
</template>

<script>
const handleImageError = (event) => {
  // Fallback to emoji if image fails to load
  event.target.style.display = 'none'
  const fallbackIcon = document.createElement('span')
  fallbackIcon.className = 'item-icon-fallback'
  fallbackIcon.textContent = '👕'
  event.target.parentNode.appendChild(fallbackIcon)
}
</script>

<style scoped>
.item-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.item-card.selected {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.item-card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.item-card.disabled:hover {
  transform: none;
  box-shadow: none;
}

.item-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.item-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
}

.item-icon-fallback {
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
  text-align: center;
}

.item-status {
  text-align: center;
}

.status-selected {
  color: #059669;
  font-weight: 600;
  font-size: 0.8rem;
}

.status-full {
  color: #dc2626;
  font-weight: 600;
  font-size: 0.8rem;
}

@media (max-width: 480px) {
  .item-card {
    padding: 1rem;
  }
  
  .item-icon {
    width: 48px;
    height: 48px;
  }
}
</style> 