import {
  createReadableStreamFromReadable,
  createRequestHandler as createRemixRequestHandler,
  writeReadableStreamToWritable,
} from '@remix-run/node';

export function createRequestHandler({
  build,
  getLoadContext,
  mode = process.env.NODE_ENV,
}) {
  let handleRequest = createRemixRequestHandler(build, mode);

  return async (request, reply) => {
    let remixRequest = createRemixRequest(request, reply);
    let loadContext = await getLoadContext?.(request, reply);

    let remixResponse = await handleRequest(remixRequest, loadContext);

    await sendRemixResponse(reply, remixResponse);
  };
}

export function createRemixRequest(request, reply) {
  let controller = new AbortController();
  reply.raw.on('close', () => {
    controller.abort();
  });

  let init = {
    headers: new Headers(request.headers),
    method: request.method,
    signal: controller.signal,
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = createReadableStreamFromReadable(request.raw);
    init.duplex = 'half';
  }

  return new Request(
    `${request.protocol}://${request.hostname}${request.url}`,
    init,
  );
}

export async function sendRemixResponse(reply, nodeResponse) {
  reply.raw.statusCode = nodeResponse.status;

  nodeResponse.headers.forEach((value, key) => {
    reply.raw.setHeader(key, value);
  });

  if (nodeResponse.headers.get('Content-Type')?.includes('text/event-stream')) {
    reply.raw.flushHeaders();
  }

  if (nodeResponse.body) {
    await writeReadableStreamToWritable(nodeResponse.body, reply.raw);
  } else {
    reply.raw.end();
  }
}
