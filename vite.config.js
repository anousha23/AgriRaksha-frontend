import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/ml': 'http://localhost:5000',   
      '/auth': 'http://localhost:5000'  
    }
  }
})
