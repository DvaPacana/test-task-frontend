<script setup>
defineProps({
  weapon: {
    type: Object,
    required: true
  }
})

defineEmits(['select'])
</script>

<template>
  <div 
    class="weapon-card"
    :class="{ 'selected': weapon.selected }"
    @click="$emit('select', weapon)"
    :title="weapon.selected ? 'Click to remove' : 'Click to select'"
  >
    <div class="weapon-header">
      <img 
        :src="`/wear/${weapon.id}.svg`" 
        :alt="weapon.name"
        class="weapon-icon"
        @error="handleImageError"
      />
    </div>
    <h3 class="weapon-name">{{ weapon.name }}</h3>
    <div class="weapon-status">
      <span v-if="weapon.selected" class="status-selected">✓ Equipped</span>
    </div>
  </div>
</template>

<script>
const handleImageError = (event) => {
  // Fallback to emoji if image fails to load
  event.target.style.display = 'none'
  const fallbackIcon = document.createElement('span')
  fallbackIcon.className = 'weapon-icon-fallback'
  fallbackIcon.textContent = '👕'
  event.target.parentNode.appendChild(fallbackIcon)
}
</script>

<style scoped>
.weapon-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.weapon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.weapon-card.selected {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.weapon-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.weapon-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
}

.weapon-icon-fallback {
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.weapon-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
  text-align: center;
}

.weapon-status {
  text-align: center;
}

.status-selected {
  color: #059669;
  font-weight: 600;
  font-size: 0.8rem;
}

@media (max-width: 480px) {
  .weapon-card {
    padding: 1rem;
  }
  
  .weapon-icon {
    width: 48px;
    height: 48px;
  }
}
</style> 