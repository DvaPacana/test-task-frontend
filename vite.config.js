import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue() , svgLoader()],
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
})
