import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['localhost', '7bbf-2401-4900-634a-75aa-d6c-f692-e399-752d.ngrok-free.app'],
    host: true, // This enables listening on all local IPs
  }
})