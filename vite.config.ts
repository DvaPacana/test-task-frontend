import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@features': path.resolve(__dirname, 'src/app/features'),
      '@store': path.resolve(__dirname, 'src/app/store'),
      '@constants': path.resolve(__dirname, 'src/app/constants'),
      '@interfaces': path.resolve(__dirname, 'src/app/interfaces'),
      '@enums': path.resolve(__dirname, 'src/app/enums')
    }
  }
});
