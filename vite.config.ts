import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/organise-my-trip/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      proxy: {
        '/api': {
          target: 'http://localhost:8787',
          changeOrigin: true,
        },
      },
    },
    configureServer(server) {
      // Rewrite relative asset requests (images/..., assets/...) coming from
      // nested SPA routes to the base path so they resolve in dev, mirroring
      // the production server.js rewrite middleware.
      server.middlewares.use((req, _res, next) => {
        const url = req.url || '';
        const m = url.match(/^\/(?:organise-my-trip\/)?[\w-]+(?:\/[\w-]+)*\/((?:images|assets)\/.+)$/);
        if (m) {
          req.url = `/organise-my-trip/${m[1]}`;
        }
        next();
      });
    },
  };
});
