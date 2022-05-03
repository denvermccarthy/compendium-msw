import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mockData } from './tests/fixtures/mockData';

global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
