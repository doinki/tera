import devServer, { defaultOptions } from '@hono/vite-dev-server';
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    target: ['chrome89', 'edge89', 'safari15', 'firefox89'],
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    devServer({
      entry: 'server/server.development.js',
      exclude: [...defaultOptions.exclude, /^\/app\/.*/, /.*\.png$/],
      injectClientScript: false,
    }),
    tsconfigPaths(),
  ],
  server: {
    host: '0.0.0.0',
  },
});
