import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// 스키마 정의
const typeDefs = `#graphql
  type tag {
    id: String
    tag: String
  }

  type Query {
    tags: [tag]
  }
`;
// 예제 데이터
const tags = [
    {
        id: '1',
        tag: 'mock1',
    },
    {
        id: '2',
        tag: 'mock2',
    },
    {
        id: '3',
        tag: 'mock3',
    },
];
// 리졸버 정의
const resolvers = {
    Query: {
        tags: () => tags,
    },
};
// Apollo Server 인스턴스 생성
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// 서버 실행
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
