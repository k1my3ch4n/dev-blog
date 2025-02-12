import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@src/graphql/post';

const useGetPosts = () => {
  useQuery(GET_POSTS, {
    onError: (error) => {
      console.log(error);
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });
};

export default useGetPosts;
