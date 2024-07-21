import { Hono } from 'hono';
import { createRequestHandler } from 'remix-server/hono';

const app = new Hono();

app.use(
  createRequestHandler({
    // eslint-disable-next-line import/no-unresolved
    build: () => import('virtual:remix/server-build'),
  }),
);

export default app;
