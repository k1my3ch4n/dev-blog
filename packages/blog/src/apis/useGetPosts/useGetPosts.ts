import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/post';
import { useEffect, useMemo, useState } from 'react';

const useGetPosts = () => {
  const [postsData, setPostsData] = useState([]);

  const { data } = useQuery(GET_POSTS, {
    onError: (error) => {
      console.log(error);
    },
  });

  // todo : query 수정예정
  const postsMemoData = useMemo(() => data?.getPosts, [data]);

  useEffect(() => {
    if (postsMemoData) {
      setPostsData(postsMemoData);
    }
  }, [postsMemoData, setPostsData]);

  return {
    postsData,
  };
};

export default useGetPosts;
