import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/mid-school-test/', // 註解掉此行，讓預設的 root ('/') 適用於 Cloudflare Pages
})
