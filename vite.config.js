import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command }) => {
  const baseConfig = {
    plugins: [vue()],
    optimizeDeps: {
      include: ['ace-builds']
    },
    build: {
      commonjsOptions: {
        include: [/ace-builds/, /node_modules/]
      }
    }
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
          external: ['vue', 'ace-builds'],
          output: {
            exports: 'named',
            globals: {
              vue: 'Vue',
              'ace-builds': 'ace'
            }
          }
        }
      }
    };
  }

  return baseConfig;
});
