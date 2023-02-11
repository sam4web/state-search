import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/state-search/',
  plugins: [react()],
  server: {
    http: 'http://localhost',
    port: 3000,
    host: true,
  },
});
