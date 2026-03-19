// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// Assuming you have 'react' plugin imported

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    // This forces Vite to use a single, de-duplicated version of these packages
    dedupe: ['react', 'react-dom'],
    alias: {
      '@': './src',
      "@components": "./src/components",
    }
  },

  server: {
    port: 5173,
  },
});