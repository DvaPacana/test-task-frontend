import { resolve } from 'node:path';
import unocss from '@unocss/postcss'
import vue from '@vitejs/plugin-vue'
import nested from 'postcss-nested'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import biomePlugin from 'vite-plugin-biome'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss(), biomePlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        nested,
        unocss,
      ]
    },
  },
})
