import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/feedback': {
        target: 'http://localhost:8080', // use your Spring Boot local server
        changeOrigin: true,
        secure: false,
      },
      '/feedbacks': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
