import { graphql, HttpResponse } from 'msw';

const graphqlHandlers = [
  graphql.query('GetPosts', () => {
    return HttpResponse.json({
      data: {
        posts: [
          {
            id: 1,
            postKey: 'msw-1',
            title: 'title1',
            tags: ['tag1', 'tag2'],
          },
        ],
      },
    });
  }),
];

export default graphqlHandlers;
