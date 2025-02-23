import { graphql, HttpResponse } from 'msw';

const graphqlHandlers = [
  graphql.query('GetPosts', () => {
    return HttpResponse.json({
      data: {
        posts: [
          {
            id: 'id1',
            postKey: 'postKey1',
            title: 'title1',
            tags: ['tag1', 'tag2'],
          },
        ],
      },
    });
  }),
];

export default graphqlHandlers;
