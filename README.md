# Выбор одежды

Тестовое задание, интерфейс выбора вещей на Vue 3.

## Запуск

```bash
pnpm install
pnpm dev
```

Откроется на http://localhost:5173

## Стек

- Vue 3 + Composition API
- TypeScript
- Vite
- Vitest
- ESLint + Prettier

## Структура

```
src/
├── composables/     # useMultiSelect, useSingleSelect
├── components/      # ItemCard
├── data/            # данные вещей
└── types/           # типы
```

Логика выбора вынесена в composable, покрыта тестами. Компоненты простые и переиспользуемые.

## Тесты

```bash
pnpm test
```

## Сборка

```bash
pnpm build
```
