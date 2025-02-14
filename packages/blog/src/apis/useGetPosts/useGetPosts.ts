import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/post';
import postsAtom, { PostData } from '@recoil/postsAtom';
import { useRecoilState } from 'recoil';

interface PostsResponseData {
  posts: PostData[];
}

const adapter = (data?: PostsResponseData) => {
  if (!data) {
    return [];
  }

  return data.posts;
};

const useGetPosts = () => {
  const [postsData, setPostsData] = useRecoilState<PostData[]>(postsAtom);

  const { loading: isLoading, error: isError } = useQuery<PostsResponseData>(GET_POSTS, {
    onCompleted: (data) => setPostsData(adapter(data)),
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    isLoading,
    isError,
    postsData,
  };
};

export default useGetPosts;
