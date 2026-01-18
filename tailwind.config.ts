import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        border: '#000000',
        selected: '#d1d5db',
        hover: '#f3f4f6',
      },
      spacing: {
        item: '5rem',
        'item-lg': '8rem',
      },
    },
  },
  plugins: [],
} satisfies Config
