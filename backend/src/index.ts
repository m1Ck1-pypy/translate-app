import Bun from 'bun';

const PORT = 3000;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const server = Bun.serve({
  port: PORT,
  async fetch(request: Request) {
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === 'POST' && pathname === '/translate') {
      return new Response(JSON.stringify('123'), { status: 200, headers: CORS_HEADERS });
    }

    return new Response('Not Found', { status: 404 });
  },
});

// eslint-disable-next-line no-console
console.log(`Listening on PORT: ${server.port}`);
