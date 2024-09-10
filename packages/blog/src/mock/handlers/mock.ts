import { GetTagsQueryResponse } from '@src/fixtures/tags';
import { graphql, HttpResponse } from 'msw';

const mockHandlers = [
  graphql.query('GetTags', () => {
    return HttpResponse.json({
      data: GetTagsQueryResponse,
    });
  }),
];

const handlers = [...mockHandlers];

export default handlers;
