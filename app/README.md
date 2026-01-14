# Подбор вещей (Vue 3 + Vite)

Тестовое приложение для выбора условных вещей пользователя и одной вещи из подборки. Используется Vue 3 и TypeScript.

## Быстрый старт
```bash
npm install
npm run dev
```

## Скрипты
- `npm run dev` — запуск dev-сервера
- `npm run build` — production-сборка
- `npm run preview` — предпросмотр сборки
- `npm run type-check` — проверка типов
- `npm test` — unit-тесты (Vitest)

## Структура
- `src/App.vue` — основная страница и композиция блоков
- `src/composables/useSelections.ts` — бизнес-логика выбора позиций
- `src/components` — UI-компоненты (панели, карточки, чипы)
- `src/data` — мок-данные для списка вещей
- `src/constants/texts.ts` — текстовые константы
