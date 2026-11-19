import { defineConfig } from 'vite';

// GitHub Pages project site: https://machine10101-vibes.github.io/Mota-Mayhem/
export default defineConfig({
  base: process.env.VITE_BASE || '/Mota-Mayhem/',
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
});
