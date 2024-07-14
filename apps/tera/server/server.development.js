import middie from '@fastify/middie';
import chalk from 'chalk';
import fastify from 'fastify';
import getPort, { portNumbers } from 'get-port';
import { createServer } from 'vite';

import { createRequestHandler } from './requestHandler.js';

const server = fastify();
const viteDevServer = await createServer({
  server: {
    middlewareMode: true,
  },
});

await server.register(middie);
server.use(viteDevServer.middlewares);

server.all(
  '*',
  createRequestHandler({
    build: () => viteDevServer.ssrLoadModule('virtual:remix/server-build'),
  }),
);

try {
  const host = process.env.HOST || 'localhost';
  const port = Number(process.env.PORT) || 5173;
  const realPort = await getPort({
    port: portNumbers(port, port + 100),
  });

  await server.listen({
    host,
    port: realPort,
  });

  if (port !== realPort) {
    console.warn(
      chalk.yellow(
        `⚠️  Port ${port} is not available. Using port ${realPort} instead.`,
      ),
      '\n',
    );
  }

  console.log(
    chalk.green('  ➜ '),
    chalk.bold(host === 'localhost' ? 'Local:' : 'Network:'),
    '\t',
    chalk.cyan(`http://${host}:${chalk.cyanBright(realPort)}/`),
    '\n',
  );
} catch (error) {
  console.error(error);
  process.exit(1);
}
