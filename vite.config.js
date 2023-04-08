import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// If you have a custom path alias in your project, add it here
const path = require('path');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
