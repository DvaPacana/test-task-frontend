import * as path from 'path'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'


export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces")
    },
  },
  plugins: [
    Vue(),
    Inspect(),
    AutoImport({
      imports: ['vue'],
      dirs: ['./src/composables/**'],
      vueTemplate: true,
      cache: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "~/assets/styles/variables.scss";
        `
      }
    }
  }
})
