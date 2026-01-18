<script setup lang="ts">
import { userItems, choiceItems } from '~/data/items'
import { useSelectionStore } from '~/stores/selection'

const store = useSelectionStore()

const authorLinks = [
  {
    icon: '📄',
    label: 'Резюме',
    href: 'https://disk.yandex.ru/i/6DVvx5TmfZKb9A',
  },
  {
    icon: '✈️',
    label: 'Telegram',
    href: 'https://t.me/ivanrmnvch',
  },
  {
    icon: '📧',
    label: 'ivansylkin@gmail.com',
    href: 'mailto:ivansylkin@gmail.com',
  },
  {
    icon: '📱',
    label: '+7 (912) 135 67 38',
    href: 'tel:+79121356738',
  },
  {
    icon: '💻',
    label: 'GitHub',
    href: 'https://github.com/ivanrmnvch',
  },
]
</script>

<template>
  <div class="page">
    <header class="page__header">
      <h1 class="page__title">Тестовое задание VueJS</h1>
      <p class="page__author">Иван Сылкин — Middle+ Fullstack Developer</p>
      <nav class="page__links">
        <a
          v-for="link in authorLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="page__link"
        >
          <span class="page__link-icon">{{ link.icon }}</span>
          <span class="page__link-label">{{ link.label }}</span>
        </a>
      </nav>
    </header>

    <!-- Верхняя часть: выбранные вещи -->
    <section class="page__top">
      <SelectedItemsRow
        :items="store.selectedUserItems"
        :max-items="6"
        @remove="store.toggleUserItem"
      />
      <SelectedSingleItem :item="store.selectedChoiceItem" @remove="store.toggleChoiceItem" />
    </section>

    <!-- Нижняя часть: списки вещей -->
    <section class="page__bottom">
      <div class="page__list-wrapper">
        <h2 class="page__list-title">Вещи пользователя</h2>
        <ItemsList
          :items="userItems"
          :selected-ids="store.selectedUserItems.map((i) => i.id)"
          :disabled="!store.canAddMoreUserItems"
          @select="store.toggleUserItem"
        />
      </div>
      <div class="page__list-wrapper">
        <h2 class="page__list-title">Вещи на выбор</h2>
        <ItemsList
          :items="choiceItems"
          :selected-ids="store.selectedChoiceItem ? [store.selectedChoiceItem.id] : []"
          @select="store.toggleChoiceItem"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page {
  @apply max-w-4xl mx-auto p-4;

  &__header {
    @apply text-center mb-8;
  }

  &__title {
    @apply text-2xl font-bold mb-2;
  }

  &__author {
    @apply text-gray-600 mb-4;
  }

  &__links {
    @apply flex flex-wrap justify-center gap-2 sm:gap-3;
  }

  &__link {
    @apply flex items-center gap-1.5 px-3 py-1.5 rounded-full;
    @apply bg-gray-100 hover:bg-gray-200 transition-colors;
    @apply text-sm text-gray-700 hover:text-gray-900;
    @apply no-underline;
  }

  &__link-icon {
    @apply text-base;
  }

  &__link-label {
    @apply hidden sm:inline;
  }

  &__top {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4 mb-4;
  }

  &__bottom {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4;
  }

  &__list-wrapper {
    @apply flex flex-col;
  }

  &__list-title {
    @apply text-sm font-medium text-gray-600 mb-2;
  }
}
</style>
