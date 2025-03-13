import Bun from 'bun';

const PORT = 3000;

const server = Bun.serve({
  port: PORT,
  async fetch() {
    // const { method } = request;
    // const { pathname } = new URL(request.url);

    return new Response('Not Found', { status: 404 });
  },
});

// eslint-disable-next-line no-console
console.log(`Listening on PORT: ${server.port}`);
