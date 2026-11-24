import { defineConfig } from 'vite';

// GitHub Pages project site: https://machine10101-vibes.github.io/Mota-Mayhem/
export default defineConfig({
  base: process.env.VITE_BASE || '/Mota-Mayhem/',
  server: {
    host: '0.0.0.0',
  },
  build: { rollupOptions: { input: { main: 'index.html', brands: 'brands.html' } } },
  preview: {
    host: '0.0.0.0',
  },
});
