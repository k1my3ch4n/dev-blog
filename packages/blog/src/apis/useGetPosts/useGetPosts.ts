import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/post';
import postsAtom, { PostData } from '@recoil/postsAtom';
import { useEffect, useMemo } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

interface PostsResponseData {
  posts: PostData[];
}

export const adapter = (data?: PostsResponseData) => {
  if (!data) {
    return [];
  }

  return data.posts;
};

const useGetPosts = () => {
  const setPostsData = useSetRecoilState(postsAtom);
  const resetPostsData = useResetRecoilState(postsAtom);

  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<PostsResponseData>(GET_POSTS, {
    onError: (error) => {
      console.error(error);
    },
  });

  const postsData = useMemo(() => adapter(data), [data]);

  useEffect(() => {
    if (postsData) {
      setPostsData(postsData);
    }
  }, [postsData, setPostsData]);

  useEffect(() => {
    return () => {
      resetPostsData();
    };
  }, [resetPostsData]);

  return {
    isLoading,
    isError: !!error,
    postsData,
  };
};

export default useGetPosts;
