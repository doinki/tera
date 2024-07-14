import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import fastifyStatic from '@fastify/static';
import fastify from 'fastify';
import gracefulShutdown from 'http-graceful-shutdown';

import { createRequestHandler } from './requestHandler.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'build', 'client');

const server = fastify({
  logger: {
    level: 'warn',
  },
});

await server.register(fastifyStatic, {
  decorateReply: false,
  prefix: '/',
  prefixAvoidTrailingSlash: true,
  root: publicDir,
  setHeaders: (res, path) => {
    res.setHeader(
      'Cache-Control',
      path.substring(publicDir.length).startsWith('/assets/')
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=3600',
    );
  },
  wildcard: false,
});

server.all(
  '*',
  createRequestHandler({
    build: await import('../build/server/index.js'),
  }),
);

try {
  const host = process.env.HOST || 'localhost';
  const port = Number(process.env.PORT) || 3000;

  await server.listen({
    host,
    port,
  });

  gracefulShutdown(server.server, {
    timeout: 10000,
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
