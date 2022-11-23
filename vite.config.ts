import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      services: resolve(__dirname, 'src/services'),
      src: resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: {
      port: 24679,
    },
    host: true,
    open: false,
    port: 3000,
  },
});
