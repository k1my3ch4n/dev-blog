import { useQuery } from '@apollo/client';
import { GetPostsDocument } from '@src/graphql/posts/posts';

interface PostData {
  id: string;
  title: string;
  description: string;
  createDate: string;
  lastChangeDate: string;
  thumbnail: string;
  file: string;
}

const useGetPostsQuery = () => {
  const { data } = useQuery<PostData[]>(GetPostsDocument, {
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

export default useGetPostsQuery;
