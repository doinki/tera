import 'dotenv/config';

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { createRequestHandler } from 'remix-server/hono';
import { gracefulShutdown } from 'server.close';

process.env.NODE_ENV = 'production';

const __dirname = dirname(fileURLToPath(import.meta.url));

process.chdir(join(__dirname, '..'));

const app = new Hono();

app.use((c, next) => {
  const { path } = c.req;

  if (!path.includes('.')) {
    return next();
  }

  if (path.substring(0, 8) === '/assets/') {
    c.header('Cache-Control', 'public, max-age=31556926, immutable');
  } else {
    c.header('Cache-Control', 'public, max-age=3600');
  }

  return serveStatic({
    root: 'build/client',
  })(c, next);
});

app.use(logger());
app.use(
  // eslint-disable-next-line import/extensions
  createRequestHandler({ build: await import('../build/server/index.js') }),
);

const hostname = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT) || 3000;

const server = serve(
  {
    fetch: app.fetch,
    hostname,
    port,
  },
  () => {
    process.send?.('ready');
  },
);

server.keepAliveTimeout = 65000;

gracefulShutdown(server);
