import { gql } from '@apollo/client';

export const GetPostsDocument = gql`
  query GetPosts {
    id
    title
    file
    thumbnail
    description
    createdDate
    lastChangeDate
  }
`;
