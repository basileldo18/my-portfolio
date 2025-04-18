import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://basileldo18.github.io/my-portfolio/', // 👈 Use your repo URL here
});
