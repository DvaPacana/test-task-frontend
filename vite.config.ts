import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

const path = fileURLToPath(new URL('./src', import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
    build: {
      outDir: env.VITE_OUTPUT_DIR,
    },
    plugins: [
      vue(),
      tailwindcss(),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': path,
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };
});
