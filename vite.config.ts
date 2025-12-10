import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Ganti 'NAMA-REPOSITORY' dengan nama repository GitHub Anda persis.
  // Contoh: Jika link repo Anda github.com/fardian/nurse-portfolio, maka isi: '/nurse-portfolio/'
  // Jika salah, CSS dan JS tidak akan terbaca di website live.
  base: '/Portfolio/', 
})
