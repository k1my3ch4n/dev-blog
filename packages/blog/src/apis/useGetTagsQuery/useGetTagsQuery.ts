import { useQuery } from '@apollo/client';
import { GetTagsDocument } from '@src/graphql/tags/tags';

const useGetTagsQuery = () => {
  const { data } = useQuery(GetTagsDocument, {
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
