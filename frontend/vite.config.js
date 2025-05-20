import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Konfigurasi Vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Gunakan port default
  },
});
