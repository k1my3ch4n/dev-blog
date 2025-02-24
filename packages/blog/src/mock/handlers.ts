import { MOCK_GET_POST_WITH_KEY_RESPONSE, MOCK_GET_POSTS_RESPONSE } from '@fixtures/posts';
import { graphql, HttpResponse } from 'msw';

const graphqlHandlers = [
  graphql.query('GetPosts', () => {
    return HttpResponse.json({
      data: MOCK_GET_POSTS_RESPONSE,
    });
  }),
  graphql.query('GetPostWithKey', () => {
    return HttpResponse.json({
      data: MOCK_GET_POST_WITH_KEY_RESPONSE,
    });
  }),
];

export default graphqlHandlers;
