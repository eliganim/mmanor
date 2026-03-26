import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { contentPlugin } from './vite-plugin-content'

export default defineConfig({
  plugins: [react(), contentPlugin()],
})
