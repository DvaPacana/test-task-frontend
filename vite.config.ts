import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@shared/ui": path.resolve(__dirname, "src/shared/ui"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@processes": path.resolve(__dirname, "src/processes"),
    },
  },
});
