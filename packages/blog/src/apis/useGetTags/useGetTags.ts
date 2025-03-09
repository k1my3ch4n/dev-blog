import { useQuery } from '@apollo/client';
import { GET_TAGS } from '@src/graphql/post';

export const adapter = (data: any) => {
  if (!data) {
    return [];
  }

  return data.allTags;
};

const useGetTags = () => {
  const { data } = useQuery(GET_TAGS);

  return { data: adapter(data) };
};

export default useGetTags;
