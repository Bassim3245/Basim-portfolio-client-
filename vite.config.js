import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // ← استخدم IPv4 بدلاً من ::1
    port: 5173,        // ← يمكنك تغييره إذا أردت
    strictPort: true,  // ← يمنع Vite من تغيير المنفذ تلقائيًا
  },
})
