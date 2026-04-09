import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/Daogui_Life/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
