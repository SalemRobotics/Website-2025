import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    warmup: {
      clientFiles: ['./public/good_group.webp'],
    },
    host: '0.0.0.0',
    port: 6324,
    strictPort: true,
  },
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
