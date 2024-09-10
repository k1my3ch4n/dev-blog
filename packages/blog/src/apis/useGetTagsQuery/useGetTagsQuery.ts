import { useQuery } from '@apollo/client';
import { GetTagsDocument } from '@src/graphql/tags/tags';

interface TagData {
  id: string;
  tag: string;
}

const useGetTagsQuery = () => {
  const { data } = useQuery<TagData[]>(GetTagsDocument, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    data,
  };
};

export default useGetTagsQuery;
