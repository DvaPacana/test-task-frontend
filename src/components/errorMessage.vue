<template>
  <transition name="fade">
    <div v-if="visible" class="error-message">
      <span class="error-message__message">{{ message }}</span>
      <button class="error-message__close-btn" @click="close">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ErrorMessageProps } from '@/types/componentsProps'

const emit = defineEmits(['close-message'])
const props = withDefaults(defineProps<ErrorMessageProps>(), {
    message: null
})

const visible = ref(false)

const close = (): void => {
    emit('close-message')
    visible.value = false
}

watch(() => props.message, (val) => {
    if (val) {
      visible.value = true
      if (props.timeShowSecond) {
        setTimeout(() => close(), props.timeShowSecond * 1000)
      }
    } else close()
  }, { immediate: true })
</script>

<style scoped lang="scss">
.error-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e25254;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  animation: slide-up 0.3s ease-out;

  &__message {
    font-size: 18px;
    padding-right: 1rem;
  }
  &__close-btn {
    position: absolute;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #ffffffc5;
    border: none;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    top: 15%;
    right: 2%;
    &:hover {
        color: #ffffffc7;
    }
    &:active {
        color: white;
    }
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
