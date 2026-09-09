import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vercel sets process.env.VERCEL during build; GitHub Actions (Pages) does not.
const isVercel = !!process.env.VERCEL

// https://vite.dev/config/
export default defineConfig({
  base: isVercel ? '/' : '/networks_homepage/',
  plugins: [react()],
  define: {
    __USE_HASH_ROUTER__: JSON.stringify(!isVercel),
  },
})
