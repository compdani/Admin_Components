import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command }) => {
  const baseConfig = {
    plugins: [vue()]
  };

  if (command === 'build') {
    return {
      ...baseConfig,
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          fileName: (format) => `admin-components.${format}.js`,
          formats: ['es', 'cjs']
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
    };
  }

  return baseConfig;
});
