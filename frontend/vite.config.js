// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      proxy: {
        '/feedback': {
          target: 'http://192.168.1.33:8080',
          changeOrigin: true,
          secure: false,
        },
        '/feedbacks': {
          target: 'http://192.168.1.33:8080',
          changeOrigin: true,
          secure: false,
        },
      }
      
    },
  },
})
