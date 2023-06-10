import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "", // NOTE: For gh-pages to remove slash prefix from imports
  plugins: [
    react(), 
    VitePWA(
      
    )
  ],
})
