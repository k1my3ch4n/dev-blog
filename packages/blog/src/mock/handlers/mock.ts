import { GetPostsQueryResponse } from '@fixtures/posts';
import { GetTagsQueryResponse } from '@fixtures/tags';
import { graphql, HttpResponse } from 'msw';

const mockHandlers = [
  graphql.query('GetTags', () => {
    return HttpResponse.json({
      data: GetTagsQueryResponse,
    });
  }),
  graphql.query('GetPosts', () => {
    return HttpResponse.json({
      data: GetPostsQueryResponse,
    });
  }),
];

const handlers = [...mockHandlers];

export default handlers;
