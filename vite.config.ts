import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Static hosts answer unknown paths with 404.html. Shipping the app shell under that name
// lets the app render its own "not found" page there, with a real 404 status.
const emit404Page = (): Plugin => ({
  name: 'emit-404-page',
  apply: 'build',
  // Run after Vite's own HTML plugin, which is what adds index.html to the bundle.
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html'];
    if (index?.type === 'asset') this.emitFile({ type: 'asset', fileName: '404.html', source: index.source });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emit404Page()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
