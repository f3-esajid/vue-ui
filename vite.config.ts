import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'VueUi',
      fileName: 'vue-ui'
    },
    rollupOptions: {
      external: [
        'vue',
        'class-variance-authority',
        'clsx',
        'lucide-vue-next',
        'radix-vue',
        'tailwind-merge',
        'tailwindcss-animate',
        'vite-plugin-dts'
      ]
    }
  }
})
