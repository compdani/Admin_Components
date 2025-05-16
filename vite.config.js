import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
        entry: resolve(__dirname, 'src/index.js'),
        fileName: (format) => `admin-components.${format}.js`,
        formats: ['es', 'cjs'] // <--- ONLY ESM and CJS
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
                vue: 'Vue'
            }
        }
    }
  }
});
