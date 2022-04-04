const { createVuePlugin } = require('vite-plugin-vue2');
import { createSvgPlugin } from "vite-plugin-vue2-svg";
const { resolve } = require('path');

import { defineConfig } from 'vite'

const DEV = process.env.NODE_ENV !== 'production';

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  root: './vue/',
  base: '/static/dist/js/',
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        }
      }
    }),
    createSvgPlugin(),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json']
  },
  server: {
    host: '0.0.0.0',
    port: '8081',
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
    strictPort: true,
  },
  build: {
    outputDir: resolve('./static/dist/'),
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: resolve('./vue/main.js'),
      output: {
        chunkFileNames: undefined,
        dir: './static/dist/js/',
      },
    },
  },
})
