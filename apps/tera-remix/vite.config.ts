import devServer, { defaultOptions } from '@hono/vite-dev-server';
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ isSsrBuild }) => {
  return {
    build: {
      rollupOptions: {
        output: isSsrBuild
          ? undefined
          : {
              // eslint-disable-next-line consistent-return
              manualChunks: (id) => {
                if (id.includes('.pnpm/react@')) {
                  return 'react';
                }
                if (id.includes('.pnpm/react-dom@')) {
                  return 'react-dom';
                }
              },
            },
      },
      target: isSsrBuild
        ? 'node22'
        : ['chrome89', 'edge89', 'safari15', 'firefox89'],
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
  };
});
