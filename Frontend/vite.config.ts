import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['bootstrap/dist/css/bootstrap.min.css'],  // Add this line
  },
  build: {
    rollupOptions: {
      external: ['bootstrap/dist/css/bootstrap.min.css'],  // Add this line
    },
  },
});