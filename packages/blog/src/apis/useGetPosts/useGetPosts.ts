import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/post';
import postsAtom from '@recoil/postsAtom';
import { PostsResponseData } from '@fixtures/posts';
import { useEffect, useMemo } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

export const adapter = (data?: PostsResponseData) => {
  if (!data) {
    return [];
  }

  return data.posts;
};

const useGetPosts = () => {
  console.log('connected!');

  const setPostsData = useSetRecoilState(postsAtom);
  const resetPostsData = useResetRecoilState(postsAtom);

  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<PostsResponseData>(GET_POSTS, {
    fetchPolicy: 'network-only',
    onError: (error) => {
      console.error(error);
    },
  });

  const postsData = useMemo(() => adapter(data), [data]);

  console.log('postsData : ', postsData);

  useEffect(() => {
    console.log('loading:', isLoading);
    console.log('error:', error);
    console.log('data:', data);

    if (postsData) {
      console.log('useEffect!');
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
