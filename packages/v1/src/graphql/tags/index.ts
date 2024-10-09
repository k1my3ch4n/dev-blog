import { gql } from '@apollo/client';

export const GetTagsDocument = gql`
  query GetTags {
    id
    tag
  }
`;
