import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/movie-api/', // Replace 'movie-api' with your repository name
  plugins: [react()],
});
