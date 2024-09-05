import { graphql } from 'msw';

const mockHandlers = [
  graphql.query('/home', (_, res, ctx) => {
    return res(ctx.data({}));
  }),
];

const handlers = [...mockHandlers];

export default handlers;
