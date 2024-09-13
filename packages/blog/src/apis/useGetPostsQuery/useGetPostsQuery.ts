import { useQuery } from '@apollo/client';
import { GetPostsDocument } from '@src/graphql/posts/posts';
import postsAtom, { PostType } from '@src/recoil/blog/post';
import { useEffect, useMemo } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const useGetPostsQuery = () => {
  const setPosts = useSetRecoilState(postsAtom);
  const resetPosts = useResetRecoilState(postsAtom);

  const { data } = useQuery<PostType[]>(GetPostsDocument, {
    onError: (error) => {
      console.error(error);
    },
  });

  const postsData = useMemo(() => data, [data]);

  useEffect(() => {
    if (postsData) {
      setPosts(postsData);
    }
  }, [postsData, setPosts]);

  useEffect(() => {
    return () => {
      resetPosts();
    };
  }, [resetPosts]);

  return {
    postsData,
  };
};

export default useGetPostsQuery;
