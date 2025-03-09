import { useQuery } from '@apollo/client';
import { GET_TAGS } from '@src/graphql/post';

export const adapter = (data: any) => {
  if (!data) {
    return [];
  }

  return data.allTags;
};

// todo : data 만 리턴하는 경우 수정
const useGetTags = () => {
  const { data } = useQuery(GET_TAGS);

  return { data: adapter(data) };
};

export default useGetTags;
