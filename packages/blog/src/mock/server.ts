import { setupServer } from 'msw/node';
import { graphql, HttpResponse } from 'msw';
import graphqlHandlers from './handlers';

export const server = setupServer(...graphqlHandlers);

export const graphqlMock = ({
  operation,
  operationName,
  data,
}: {
  status: number;
  operationName: string;
  data?: Record<string, unknown>;
  operation: 'query' | 'mutation';
}) => {
  server.use(
    graphql[operation](operationName, () => {
      return HttpResponse.json(data);
    }),
  );
};
