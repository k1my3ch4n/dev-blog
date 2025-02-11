import { gql } from 'graphql-tag';
import pool from './db.mjs';

// GraphQL 스키마 정의
export const typeDefs = gql`
  type Post {
    postId: String!
    title: String!
    tags: [String!]!
  }

  type Query {
    getPosts: [Post!]!
    getPost(postId: String!): Post
  }

  type Mutation {
    addPost(postId: String!, title: String!, tags: [String!]!): Post
    deletePost(postId: String!): Boolean
  }
`;

// 리졸버 정의
export const resolvers = {
  Query: {
    getPosts: async () => {
      const { rows } = await pool.query('SELECT * FROM posts');
      return rows;
    },
    getPost: async (_, { postId }) => {
      const { rows } = await pool.query('SELECT * FROM posts WHERE postId = $1', [postId]);
      return rows[0];
    },
  },
  Mutation: {
    addPost: async (_, { postId, title, tags }) => {
      await pool.query('INSERT INTO posts (postId, title, tags) VALUES ($1, $2, $3)', [
        postId,
        title,
        tags,
      ]);
      return { postId, title, tags };
    },
    deletePost: async (_, { postId }) => {
      const result = await pool.query('DELETE FROM posts WHERE postId = $1', [postId]);
      return result.rowCount > 0;
    },
  },
};
